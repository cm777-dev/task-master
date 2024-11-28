import axios from 'axios';

const baserowApi = axios.create({
  baseURL: import.meta.env.VITE_BASEROW_API_URL,
  headers: {
    'Authorization': `Token ${import.meta.env.VITE_BASEROW_API_TOKEN}`,
    'Content-Type': 'application/json',
  },
});

export const tables = {
  users: 'your_users_table_id',
  services: 'your_services_table_id',
  requests: 'your_requests_table_id',
};

export const getTableRows = async (tableId) => {
  try {
    const response = await baserowApi.get(`/${tableId}/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data from Baserow:', error);
    throw error;
  }
};

export const createTableRow = async (tableId, data) => {
  try {
    const response = await baserowApi.post(`/${tableId}/`, data);
    return response.data;
  } catch (error) {
    console.error('Error creating data in Baserow:', error);
    throw error;
  }
};

export const updateTableRow = async (tableId, rowId, data) => {
  try {
    const response = await baserowApi.patch(`/${tableId}/${rowId}/`, data);
    return response.data;
  } catch (error) {
    console.error('Error updating data in Baserow:', error);
    throw error;
  }
};

export const deleteTableRow = async (tableId, rowId) => {
  try {
    await baserowApi.delete(`/${tableId}/${rowId}/`);
  } catch (error) {
    console.error('Error deleting data from Baserow:', error);
    throw error;
  }
};
