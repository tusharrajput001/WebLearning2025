import { useState } from "react";
import axios from "axios";

const BASE_URL = "http://localhost:4000";

export const useApi = (endpoint) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchAll = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${BASE_URL}/${endpoint}`);
      setData(res.data);
    } catch (err) {
      console.error("Failed to load users:", err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const create = async (payload) => {
    try {
      const res = await axios.post(`${BASE_URL}/${endpoint}`, payload);
      setData((prev) => [...prev, res.data]);
    } catch (err) {
      throw err;
    }
  };

  const update = async (id, payload) => {
    try {
      const res = await axios.put(`${BASE_URL}/${endpoint}/${id}`, payload);
      setData((prev) =>
        prev.map((item) => (item.id === id ? res.data : item))
      );
    } catch (err) {
      throw err;
    }
  };

  const remove = async (id) => {
    try {
      await axios.delete(`${BASE_URL}/${endpoint}/${id}`);
      setData((prev) => prev.filter((item) => item.id !== id));
    } catch (err) {
      throw err;
    }
  };

  return { data, loading, fetchAll, create, update, remove };
};
