import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar/Navbar";

export default function RootLayouts() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 py-6">
        <Outlet />
      </main>
    </div>
  );
}
