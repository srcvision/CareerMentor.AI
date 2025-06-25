import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [logs, setLogs] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      const headers = { Authorization: `Bearer ${user?.token}` };
      const usersRes = await axios.get(
        "http://localhost:5000/api/admin/users",
        { headers }
      );
      const logsRes = await axios.get("http://localhost:5000/api/admin/logs", {
        headers,
      });
      console.log("Admin ",logsRes)
      setUsers(usersRes.data)
      setLogs(logsRes.data)
    };
    fetchData();
  }, []);

  return(
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">📊 Admin Dashboard</h2>

      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-2">👥 Registered Users</h3>
        <ul className="space-y-1 bg-white p-4 border rounded">
          {users.map((u) => (
            <li key={u._id}>{u.name} - {u.email}</li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-2">🧠 AI Usage Logs</h3>
        <ul className="space-y-2 bg-white p-4 border rounded max-h-[400px] overflow-y-scroll">
          {logs.map((log) => (
            <li key={log._id}>
              <strong>{log.user.name}</strong> asked <em>{log.type}</em>:
              <br />
              <span className="text-gray-700">"{log.input.slice(0, 100)}..."</span>
              <br />
              <span className="text-green-700">→ "{log.output.slice(0, 150)}..."</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
export default AdminDashboard;
