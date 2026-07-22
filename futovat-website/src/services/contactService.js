import api from "../api/axios";

// Customer

export const sendContact = async (contact) => {
  const response = await api.post("/contact", contact);
  return response.data;
};

// Admin

export const getContacts = async () => {
  const response = await api.get("/admin/contact");
  return response.data;
};

export const deleteContact = async (id) => {
  return await api.delete(`/admin/contact/${id}`);
};

export const markAsRead = async (id) => {
  const response = await api.patch(`/admin/contact/${id}/read`);

  return response.data;
};
