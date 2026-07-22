import { useEffect, useState } from "react";
import "./Dashboard.css";

import AdminLayout from "../layouts/AdminLayout";
import { getContacts } from "../services/contactService";

export default function Dashboard() {
  const [total, setTotal] = useState(0);
  const [read, setRead] = useState(0);
  const [unread, setUnread] = useState(0);

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {
    try {
      const contacts = await getContacts();

      setTotal(contacts.length);

      setRead(contacts.filter((x) => x.isRead).length);

      setUnread(contacts.filter((x) => !x.isRead).length);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AdminLayout>
      <div className="dashboard-page">
        <h1>Dashboard</h1>

        <div className="stats">
          <div className="stat-card">
            <h3>Total Contacts</h3>

            <h2>{total}</h2>
          </div>

          <div className="stat-card">
            <h3>Unread Contacts</h3>

            <h2>{unread}</h2>
          </div>

          <div className="stat-card">
            <h3>Read Contacts</h3>

            <h2>{read}</h2>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
