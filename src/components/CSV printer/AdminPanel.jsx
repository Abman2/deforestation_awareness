import React, { useEffect, useState } from "react";
import { downloadCSV as downloadQuizCSV } from "./csv"; // quiz CSV
import { db } from "../Quiz/firebaseConfig";
import { getDocs, collection } from "firebase/firestore";
import { saveAs } from "file-saver";

export default function AdminPanel() {
  const [logs, setLogs] = useState([]);
  const [visitorCount, setVisitorCount] = useState(0);
  const [latestVisitors, setLatestVisitors] = useState([]);
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
      timeZone: "Africa/Lagos"
    });
  };

  // Process visitor logs
  useEffect(() => {
    const processLogs = () => {
      const storedLogs = JSON.parse(localStorage.getItem("userLogs") || "[]");

      const uniqueVisitors = {};
      storedLogs.forEach((log) => {
        if (!uniqueVisitors[log.ip]) {
          uniqueVisitors[log.ip] = {
            ip: log.ip,
            timestamp: log.timestamp,
            pages: new Set([log.pageVisited]),
            location: log.location,
            deviceInfo: log.deviceInfo,
            state: log.location.split(", ")[1] || "",
            country: log.location.split(", ")[2] || ""
          };
        } else {
          uniqueVisitors[log.ip].pages.add(log.pageVisited);
        }
      });

      const groupedLogs = Object.values(uniqueVisitors)
        .map((visitor) => ({
          ip: visitor.ip,
          timestamp: visitor.timestamp,
          pageVisited: Array.from(visitor.pages),
          location: visitor.location,
          state: visitor.state,
          country: visitor.country,
          deviceInfo: visitor.deviceInfo
        }))
        .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

      setLogs(groupedLogs);
      setVisitorCount(groupedLogs.length);
      setLatestVisitors(groupedLogs.slice(0, 5));
    };

    processLogs();
    const interval = setInterval(processLogs, 5000);
    return () => clearInterval(interval);
  }, []);

  // Fetch quiz responses
  useEffect(() => {
    const fetchQuizResponses = async () => {
      try {
        const snapshot = await getDocs(collection(db, "quizResults"));
        const data = snapshot.docs
          .map(doc => doc.data())
          .sort((a, b) => new Date(b.timestamp?.toDate?.() || b.timestamp) - new Date(a.timestamp?.toDate?.() || a.timestamp));

        setQuizResponses(data.slice(0, 5));
      } catch (err) {
        console.error("Error fetching quiz responses:", err);
      }
    };
    fetchQuizResponses();
  }, []);

  // Generate and download visitors CSV
  const downloadVisitorsCSV = () => {
    if (!logs.length) {
      alert("No visitor logs found.");
      return;
    }

    const headers = ["Timestamp", "Pages Visited", "State", "Country", "IP", "Device Info"];
    const rows = logs.map(log => [
      `"${log.timestamp}"`,
      `"${log.pageVisited.join(", ")}"`,
      `"${log.state}"`,
      `"${log.country}"`,
      `"${log.ip}"`,
      `"${log.deviceInfo}"`
    ].join(","));

    const csvContent = [headers.join(","), ...rows].join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    saveAs(blob, "visitors.csv");
  };

  return (
    <div className="p-6">
      {/* Visitors Section */}
      <h1 className="text-2xl font-bold mb-2">User Visit Tracker</h1>
      <p className="text-lg mb-4">
        <strong>Total Unique Visitors:</strong> {visitorCount}
      </p>

      <table className="w-full border-collapse border border-gray-300 mb-4">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 p-2">Timestamp</th>
            <th className="border border-gray-300 p-2">Pages Visited</th>
            <th className="border border-gray-300 p-2">State</th>
            <th className="border border-gray-300 p-2">Country</th>
            <th className="border border-gray-300 p-2">IP</th>
            <th className="border border-gray-300 p-2">Device Info</th>
          </tr>
        </thead>
        <tbody>
          {latestVisitors.length > 0 ? (
            latestVisitors.map((log, index) => (
              <tr key={index}>
                <td className="border border-gray-300 p-2">{log.timestamp}</td>
                <td className="border border-gray-300 p-2">{log.pageVisited.join(", ")}</td>
                <td className="border border-gray-300 p-2">{log.state}</td>
                <td className="border border-gray-300 p-2">{log.country}</td>
                <td className="border border-gray-300 p-2">{log.ip}</td>
                <td className="border border-gray-300 p-2">{log.deviceInfo}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-center p-4">No visitor data found</td>
            </tr>
          )}
        </tbody>
      </table>

      <button
        onClick={downloadVisitorsCSV}
        className="border bg-green-600 text-white rounded-md px-6 py-2 mb-10"
      >
        Download All Visitor Details
      </button>

      {/* Quiz Responses Section */}
      <h1 className="text-2xl font-bold mb-2">Quiz Responses</h1>

      <table className="w-full border-collapse border border-gray-300 mb-4">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 p-2">Name</th>
            <th className="border border-gray-300 p-2">Score</th>
            <th className="border border-gray-300 p-2"> Website Rating</th>
            <th className="border border-gray-300 p-2">Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {quizResponses.length > 0 ? (
            quizResponses.map((entry, index) => (
              <tr key={index}>
                <td className="border border-gray-300 p-2">{entry.name}</td>
                <td className="border border-gray-300 p-2">{entry.score}</td>
                <td className="border border-gray-300 p-2">{entry.feedback || "N/A"}</td>
                <td className="border border-gray-300 p-2">{formatTimestamp(entry.timestamp)}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center p-4">No quiz responses found</td>
            </tr>
          )}
        </tbody>
      </table>

      <button
        onClick={() => downloadQuizCSV()}
        className="border bg-blue-600 text-white rounded-md px-6 py-2"
      >
        Download All Quiz Results
      </button>
    </div>
  );
}
