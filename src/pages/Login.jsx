import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { login } from "../services/authService";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/courses";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const res = await login({ email, password });

      if (!res.token) {
        throw new Error("Token tidak ditemukan");
      }

      localStorage.setItem("token", res.token);

      navigate(from, { replace: true });
    } catch (err) {
      console.error(err);

      setError(
        err?.message ||
        err?.error ||
        "Email atau password salah"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-xl shadow-md w-80"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-[#1057C1]">
          Login
        </h2>

        {/* ERROR */}
        {error && (
          <p className="text-red-500 text-sm mb-4 text-center">
            {error}
          </p>
        )}

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 p-2 border rounded-lg"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 p-2 border rounded-lg"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#1057C1] text-white py-2 rounded-lg hover:bg-[#0d47a1] transition"
        >
          {loading ? "Loading..." : "Login"}
        </button>

        {/* ✅ LINK REGISTER */}
        <p className="text-sm text-center mt-4">
          Belum punya akun?{" "}
          <span
            onClick={() => navigate("/register")}
            className="text-[#1057C1] cursor-pointer font-medium"
          >
            Register
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;