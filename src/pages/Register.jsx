import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../services/authService";

const Register = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await register({
        name,
        email,
        password,
        password_confirmation: password,
      });

      alert("Register berhasil, silakan login");
      navigate("/login");
    } catch (err) {
      console.error(err);
      alert("Register gagal");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleRegister}
        className="bg-white p-8 rounded-xl shadow-md w-80"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-[#1057C1]">
          Register
        </h2>

        <input
          type="text"
          placeholder="Nama"
          className="w-full mb-4 p-2 border rounded-lg"
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 p-2 border rounded-lg"
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 p-2 border rounded-lg"
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button className="w-full bg-[#1057C1] text-white py-2 rounded-lg">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;a