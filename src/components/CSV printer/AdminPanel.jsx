import React, { useEffect } from "react";
import { downloadCSV } from "./csv";

const AdminPanel = () => {
  useEffect(() => {
    // This runs once when the component loads
    window.downloadCSV = downloadCSV;
  }, []);

  return (
   
    <button onClick={() => downloadCSV() } className="border bg-green-600 text-white rounded-md my-5 p-4 ">Download CSV</button>
   
  );
};


export default AdminPanel;