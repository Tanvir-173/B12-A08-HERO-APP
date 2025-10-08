import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSadTear } from "@fortawesome/free-regular-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const Installation = () => {
  const [installedApps, setInstalledApps] = useState([]);
  const [showToast, setShowToast] = useState(false);
  const [sortOrder, setSortOrder] = useState("default");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apps = JSON.parse(localStorage.getItem("installedApps")) || [];
    setInstalledApps(apps);
    setLoading(false);
  }, []);

  const handleUninstall = (id) => {
    const updatedApps = installedApps.filter((a) => a.id !== id);
    setInstalledApps(updatedApps);
    localStorage.setItem("installedApps", JSON.stringify(updatedApps));
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2500);
  };

  const sortedApps = [...installedApps].sort((a, b) => {
    if (sortOrder === "high-low") return b.downloads - a.downloads;
    if (sortOrder === "low-high") return a.downloads - b.downloads;
    return 0;
  });

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 md:mb-0">
          My Installed Apps
        </h1>

        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2"
        >
          <option value="default">Sort by</option>
          <option value="high-low">High-Low Downloads</option>
          <option value="low-high">Low-High Downloads</option>
        </select>
      </div>

      {sortedApps.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">No installed apps yet <FontAwesomeIcon icon={faFaceSadTear} /></p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sortedApps.map((app) => (
            <div
              key={app.id}
              className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <img src={app.image} alt={app.title} className="w-full h-40 object-cover" />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{app.title}</h3>
                <p className="text-gray-500 text-sm mb-3">
                  <FontAwesomeIcon icon={faDownload} /> {app.downloads.toLocaleString()} downloads
                </p>
                <button
                  onClick={() => handleUninstall(app.id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
                >
                  Uninstall
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {showToast && (
        <div className="fixed top-8 right-8 bg-red-500 text-white font-semibold px-6 py-3 rounded-lg shadow-lg">
          <FontAwesomeIcon icon={faXmark} />App uninstalled successfully!
        </div>
      )}
    </div>
  );
};

export default Installation;
