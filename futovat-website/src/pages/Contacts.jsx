import { useEffect, useState } from "react";
import "./Contacts.css";

import AdminLayout from "../layouts/AdminLayout";

import {
  getContacts,
  deleteContact,
  markAsRead,
} from "../services/contactService";

export default function Contacts() {
  const [contacts, setContacts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadContacts();
  }, []);

  const loadContacts = async () => {
    try {
      const response = await getContacts();

      setContacts(response);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this contact?")) return;

    try {
      await deleteContact(id);

      loadContacts();
    } catch (error) {
      console.error(error);

      alert("Failed to delete contact.");
    }
  };

  const handleMarkAsRead = async (id) => {
    try {
      await markAsRead(id);

      loadContacts();
    } catch (error) {
      console.error(error);

      alert("Failed to mark contact as read.");
    }
  };

  const filteredContacts = contacts.filter((contact) => {
    const searchText = search.toLowerCase();

    return (
      contact.name.toLowerCase().includes(searchText) ||
      contact.email.toLowerCase().includes(searchText) ||
      (contact.company ?? "").toLowerCase().includes(searchText) ||
      (contact.service ?? "").toLowerCase().includes(searchText)
    );
  });

  return (
    <AdminLayout>
      <div className="contacts-page">
        <h1>Contacts</h1>

        <div className="contacts-toolbar">
          <input
            className="search-box"
            type="text"
            placeholder="Search by name, email, company or service..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <table className="contacts-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Company</th>
              <th>Service</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredContacts.length === 0 ? (
              <tr>
                <td
                  colSpan="6"
                  style={{
                    textAlign: "center",
                    padding: "30px",
                  }}
                >
                  No contacts found.
                </td>
              </tr>
            ) : (
              filteredContacts.map((contact) => (
                <tr key={contact.id}>
                  <td>{contact.name}</td>

                  <td>{contact.email}</td>

                  <td>{contact.company}</td>

                  <td>{contact.service}</td>

                  <td>
                    {contact.isRead ? (
                      <span className="status-read">✅ Read</span>
                    ) : (
                      <span className="status-unread">❌ Unread</span>
                    )}
                  </td>

                  <td>
                    {!contact.isRead && (
                      <button
                        className="read-btn"
                        onClick={() => handleMarkAsRead(contact.id)}
                      >
                        Mark Read
                      </button>
                    )}

                    <button
                      className="delete-btn"
                      onClick={() => handleDelete(contact.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
}
