import { db } from "../Quiz/firebaseConfig";
import { getDocs, collection } from "firebase/firestore";
import { saveAs } from "file-saver";

// Format Firestore timestamp
function formatTimestamp(timestamp) {
  if (!timestamp) return "";
  const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
  return date.toLocaleString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
    timeZone: "Africa/Lagos"
  });
}

// Main CSV download function
export async function downloadCSV() {
  try {
    const snapshot = await getDocs(collection(db, "quizResults"));
    const data = snapshot.docs.map(doc => doc.data());

    if (!data.length) {
      alert("No quiz responses found.");
      return;
    }

    // Step 1: Get all unique question texts
    const allQuestions = Array.from(
      new Set(data.flatMap(entry => entry.answers.map(a => a.question)))
    );

    // Step 2: Build headers (real question text as columns)
    const baseHeaders = ["Name", "Score", "Feedback", "Timestamp"];
    const headers = [...baseHeaders, ...allQuestions];
    const headerRow = headers.join(",");

    // Step 3: Build rows
    const rows = data.map(entry => {
      const formattedTime = formatTimestamp(entry.timestamp);
      const answerMap = Object.fromEntries(
        entry.answers.map(a => [a.question, a.correct ? "true" : "false"])
      );

      return headers.map(header => {
        if (header === "Name") return `"${entry.name || ""}"`;
        if (header === "Score") return `"${entry.score || 0}"`;
        if (header === "Feedback") return `"${entry.feedback || ""}"`;
        if (header === "Timestamp") return `"${formattedTime}"`;
        return `"${answerMap[header] ?? ""}"`;
      }).join(",");
    });

    // Step 4: Export CSV
    const csvContent = [headerRow, ...rows].join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    saveAs(blob, "quiz_results.csv");

  } catch (err) {
    console.error("Error exporting CSV:", err);
    alert("Failed to export CSV. Check console for details.");
  }
}
