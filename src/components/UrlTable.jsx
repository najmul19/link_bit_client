export default function UrlTable({ urls, onDelete }) {
  const handleCopy = (shortUrl) => {
    navigator.clipboard.writeText(shortUrl);
    alert('Short URL copied to clipboard');
  };

  return (
    <div className="bg-white shadow rounded p-4">
      <h2 className="text-lg font-semibold mb-2">Your URLs</h2>
      {urls.length === 0 ? (
        <p className="text-sm text-gray-500">
          No URLs yet. Create one above.
        </p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-3 py-2 text-left">Original URL</th>
                <th className="px-3 py-2 text-left">Short code</th>
                <th className="px-3 py-2 text-left">Short URL</th>
                <th className="px-3 py-2 text-right">Clicks</th>
                <th className="px-3 py-2 text-left">Created</th>
                <th className="px-3 py-2 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {urls.map((url) => (
                <tr key={url._id} className="border-t">
                  <td className="px-3 py-2 max-w-xs">
                    <div
                      className="truncate"
                      title={url.originalUrl}
                    >
                      {url.originalUrl}
                    </div>
                  </td>
                  <td className="px-3 py-2">{url.shortCode}</td>
                  <td className="px-3 py-2">
                    <div className="flex items-center gap-2">
                      <a
                        href={url.shortUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-blue-600 underline"
                      >
                        {url.shortUrl}
                      </a>
                      <button
                        onClick={() => handleCopy(url.shortUrl)}
                        className="px-2 py-1 text-xs bg-gray-200 rounded"
                      >
                        Copy
                      </button>
                    </div>
                  </td>
                  <td className="px-3 py-2 text-right">
                    {url.clicks}
                  </td>
                  <td className="px-3 py-2">
                    {new Date(url.createdAt).toLocaleString()}
                  </td>
                  <td className="px-3 py-2 text-center">
                    <button
                      onClick={() => onDelete(url._id)}
                      className="px-2 py-1 text-xs bg-red-500 text-white rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
