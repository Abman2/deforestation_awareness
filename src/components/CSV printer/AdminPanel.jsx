import React, { useEffect, useState } from "react";
import { downloadCSV } from "./csv";

export default function AdminPanel() {
  const [logs, setLogs] = useState([]);
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    const storedLogs = JSON.parse(localStorage.getItem("userLogs") || "[]");
    setLogs(storedLogs.reverse()); // latest first
    setVisitorCount(storedLogs.length); // count of visits

    // Auto-update counter every 5 seconds
    const interval = setInterval(() => {
      const updatedLogs = JSON.parse(localStorage.getItem("userLogs") || "[]");
      setLogs(updatedLogs.reverse());
      setVisitorCount(updatedLogs.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-2">User Visit Tracker</h1>
      <p className="text-lg mb-4">
        <strong>Total Visitors:</strong> {visitorCount}
      </p>

      <button
        onClick={() => downloadCSV(logs)}
        className="border bg-green-600 text-white rounded-md mb-6 px-6 py-2"
      >
        Download CSV
      </button>

      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 p-2">Timestamp</th>
            <th className="border border-gray-300 p-2">Page Visited</th>
            <th className="border border-gray-300 p-2">Location</th>
            <th className="border border-gray-300 p-2">IP</th>
            <th className="border border-gray-300 p-2">Device Info</th>
          </tr>
        </thead>
        <tbody>
          {logs.length > 0 ? (
            logs.map((log, index) => (
              <tr key={index}>
                <td className="border border-gray-300 p-2">{log.timestamp}</td>
                <td className="border border-gray-300 p-2">{log.pageVisited}</td>
                <td className="border border-gray-300 p-2">{log.location}</td>
                <td className="border border-gray-300 p-2">{log.ip}</td>
                <td className="border border-gray-300 p-2">{log.deviceInfo}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center p-4">No user data found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
