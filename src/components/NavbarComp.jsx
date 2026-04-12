import { Link, useNavigate } from "react-router-dom";

export default function NavbarComp() {
  const navigate = useNavigate();

  // cek apakah user sudah login
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="flex justify-between items-center px-10 py-4 bg-white shadow-sm">
      {/* LOGO */}
      <h1
        className="text-xl font-bold text-[#1057C1] cursor-pointer"
        onClick={() => navigate("/")}
      >
        Learnify
      </h1>

      {/* MENU */}
      <div className="flex items-center gap-6">
        <Link to="/" className="text-gray-700 hover:text-[#1057C1]">
          Home
        </Link>

        <Link to="/courses" className="text-gray-700 hover:text-[#1057C1]">
          Courses
        </Link>

        {/* 🔥 KONDISI LOGIN */}
        {!token ? (
          <Link
            to="/login"
            className="bg-[#1057C1] text-white px-4 py-2 rounded-lg hover:bg-[#0d47a1]"
          >
            Login
          </Link>
        ) : (
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}