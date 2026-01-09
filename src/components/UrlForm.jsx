import { useState } from 'react';
import useAxiosSecure from '../api/useAxiosSecure';

export default function UrlForm({ onCreated }) {
  const [originalUrl, setOriginalUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const axiosSecure = useAxiosSecure();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!originalUrl) return;
    setLoading(true);
    try {
      const res = await axiosSecure.post('/urls', { originalUrl });
      onCreated(res.data);
      setOriginalUrl('');
    } catch (err) {
      if (err.response?.status === 403) {
        alert(err.response.data.message);
      } else {
        alert('Failed to create short URL');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow rounded p-4 mb-6"
    >
      <h2 className="text-lg font-semibold mb-2">
        Create Short URL
      </h2>
      <div className="flex gap-2">
        <input
          type="url"
          value={originalUrl}
          onChange={(e) => setOriginalUrl(e.target.value)}
          placeholder="Paste your long URL here..."
          className="flex-1 border rounded px-3 py-2 text-sm"
          required
        />
        <button
          type="submit"
          disabled={loading}
          className="px-4 py-2 bg-blue-600 text-white rounded text-sm disabled:opacity-50"
        >
          {loading ? 'Shortening...' : 'Shorten'}
        </button>
      </div>
    </form>
  );
}
