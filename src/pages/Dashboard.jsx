import { useEffect, useState } from "react";
import useAxiosSecure from "../api/useAxiosSecure";
import UrlForm from "../components/UrlForm";
import UrlTable from "../components/UrlTable";

export default function Dashboard() {
  const axiosSecure = useAxiosSecure();
  const [urls, setUrls] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUrls = async () => {
    setLoading(true);
    try {
      const res = await axiosSecure.get("/urls");
      setUrls(res.data);
    } catch (err) {
      alert("Failed to load URLs");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUrls();
  }, []);

  const handleCreated = (newUrl) => {
    setUrls((prev) => [newUrl, ...prev]);
  };

  const handleDelete = async (id) => {
    const ok = window.confirm("Delete this URL?");
    if (!ok) return;
    try {
      await axiosSecure.delete(`/urls/${id}`);
      setUrls((prev) => prev.filter((u) => u._id !== id));
    } catch (err) {
      alert("Failed to delete URL");
    }
  };

  return (
    <div>
      <UrlForm onCreated={handleCreated} />
      {loading ? (
        <div className="mt-4 text-sm text-gray-600">Loading URLs...</div>
      ) : (
        <UrlTable urls={urls} onDelete={handleDelete} />
      )}
    </div>
  );
}
