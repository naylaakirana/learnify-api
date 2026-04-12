import API from "./api";

// =======================
// 🔐 LOGIN
// =======================
export const login = async (data) => {
  try {
    const res = await API.post("/login", data);
    return res.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};

// =======================
// 📝 REGISTER
// =======================
export const register = async (data) => {
  try {
    const res = await API.post("/register", data);
    return res.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};

// =======================
// 👤 GET USER (PROTECTED)
// =======================
export const getUser = async () => {
  try {
    const res = await API.get("/me");
    return res.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};

// =======================
// 🚪 LOGOUT
// =======================
export const logout = () => {
  localStorage.removeItem("token");
};