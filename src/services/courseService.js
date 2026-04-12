import API from "./api";

export const getCourses = async () => {
  try {
    const res = await API.get("/courses");
    return res.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};