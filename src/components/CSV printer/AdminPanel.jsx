import React, { useEffect, useState } from "react";
import { downloadCSV as downloadQuizCSV } from "./csv";
import { db } from "../Quiz/firebaseConfig";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
} from "firebase/firestore";


export default function AdminPanel() {
 
  

  const [quizResponses, setQuizResponses] = useState([]);

  const formatTimestamp = (timestamp) => {
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
      timeZone: "Africa/Lagos",
    });
  };



  // Fetch quiz responses realtime (latest 5)
  useEffect(() => {
    const q = query(collection(db, "quizResults"), orderBy("timestamp", "desc"),);
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((doc) => doc.data());
      setQuizResponses(data.slice(0, 5));
    });
    return () => unsubscribe();
  }, []);



  return (
    <div className="p-4 sm:p-6">


      {/* Quiz Responses Section */}
      <h1 className="text-xl sm:text-2xl font-bold mb-2">Quiz Responses</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300 mb-4 text-sm sm:text-base">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-2">Timestamp</th>
              <th className="border border-gray-300 p-2">Name</th>
              <th className="border border-gray-300 p-2">Score</th>
              <th className="border border-gray-300 p-2">Deforestation impact</th>
              <th className="border border-gray-300 p-2">Website Rating</th>
            </tr>
          </thead>
          <tbody>
            {quizResponses.length > 0 ? (
              quizResponses.map((entry, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="border border-gray-300 p-2">{formatTimestamp(entry.timestamp)}</td>
                  <td className="border border-gray-300 p-2">{entry.name}</td>
                  <td className="border border-gray-300 p-2">{entry.score}</td>
                  <td className="border border-gray-300 p-2">
                    {(entry.feedback && entry.feedback[0] && entry.feedback[0]["selected"]) || "N/A"}
                  </td>
                  <td className="border border-gray-300 p-2">
                    {(entry.feedback && entry.feedback[1] && entry.feedback[1]["selected"]) || "N/A"}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center p-4">
                  No quiz responses found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <button
        onClick={() => downloadQuizCSV()}
        className="border bg-blue-600 text-white rounded-md px-4 sm:px-6 py-2 text-sm sm:text-base"
      >
        Download All Quiz Results
      </button>
    </div>
  );
}
