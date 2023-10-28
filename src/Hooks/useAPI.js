import { useState } from "react";
import api from "../API/axios";

// Custom hook for making GET requests
function useAPI(initialData = []) {
  const [data, setData] = useState(initialData);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const get = async (query) => {
    try {
      const response = await api.get(query);
      setData(response?.data?.data);
      setIsError(false);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };
  const post = async (query, requestData) => {
    try {
      const response = await api.post(query, requestData);
      setData(response?.data);
      setIsError(false);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const patch = async (query, requestData) => {
    try {
      const response = await api.patch(query, requestData);
      setData(response?.data);
      setIsError(false);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };
  return { data, isLoading, isError, get, post, patch };
}
export default useAPI;
