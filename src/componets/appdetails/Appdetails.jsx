import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { toast } from "react-hot-toast";
import { faMagnifyingGlassLocation } from "@fortawesome/free-solid-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons"; 
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Appdetails = () => {
  const app = useLoaderData();
//   const [showToast, setShowToast] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);

  // Check if the app exists in localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("installedApps")) || [];
    const exists = saved.some((a) => a.id === app?.id);
    setIsInstalled(exists);
  }, [app?.id]);

  if (!app) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh] text-center">
        <h1 className="text-5xl font-extrabold text-red-600 mb-4">
          App Not Found
        </h1>
        <p className="text-gray-600 text-lg mb-6">
          The app you’re looking for doesn’t exist or may have been removed.
        </p>
        <button
          onClick={() => window.history.back()}
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md transition"
        >
          Go Back
        </button>
      </div>
    );
  }

  // Handle Install
  const handleInstall = () => {
    const saved = JSON.parse(localStorage.getItem("installedApps")) || [];
    const exists = saved.find((a) => a.id === app.id);
    console.log('heyin')

    if (exists) {
      toast("Already installed!");
      setIsInstalled(true);
      return;
    }

    const updated = [...saved, app];
    localStorage.setItem("installedApps", JSON.stringify(updated));
    setIsInstalled(true);
    toast.success(`${app.title} installed successfully!`);
  };

  // Handle Uninstall
  const handleUninstall = () => {
    console.log('heyun')
    const saved = JSON.parse(localStorage.getItem("installedApps")) || [];
    const updated = saved.filter((a) => a.id !== app.id);
    localStorage.setItem("installedApps", JSON.stringify(updated));
    setIsInstalled(false);
    toast.error(`${app.title} uninstalled successfully!`);
  };

  //  Ratings chart data
  const reviewData =
    app.ratings?.map((r) => ({
      name: r.name,
      count: r.count,
    })) || [];

  return (
    <div className="max-w-6xl mx-auto py-16 px-6">
      {/* ================= App Info Section ================= */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-10 mb-16 bg-white rounded-2xl shadow-md p-6">
        <img
          src={app.image}
          alt={app.title}
          className="w-64 h-64 object-cover rounded-2xl shadow-lg"
        />

        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl font-bold text-gray-800 mb-3">{app.title}</h1>
          <p className="text-lg text-gray-600 mb-4">{app.companyName}</p>

          <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-6 text-gray-700">
            <p>
                <FontAwesomeIcon icon={faStar} />
               <span className="font-semibold">{app.ratingAvg}</span> average
              rating
            </p>
            <p>
              <FontAwesomeIcon icon={faDownload} />
              <span className="font-semibold">
                {app.downloads.toLocaleString()}
              </span>
              
              downloads
            </p>
            <p>
                <FontAwesomeIcon icon={faMagnifyingGlassLocation}/>
               <span className="font-semibold">{app.reviews}</span> reviews
            </p>
          </div>

          {/*  Install / Uninstall Buttons */}
          <div className="flex gap-3 justify-center md:justify-start">
            {isInstalled ? (
              <>
                <button
                  disabled
                  className="px-6 py-3 rounded-lg bg-gray-400 text-white cursor-not-allowed shadow-md"
                >
                  Installed
                </button>
                <button
                  onClick={handleUninstall}
                  className="px-6 py-3 rounded-lg bg-red-500 hover:bg-red-600 text-white shadow-md transition"
                >
                  Uninstall
                </button>
              </>
            ) : (
              <button
                onClick={handleInstall}
                className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-md transition"
              >
                Install
              </button>
            )}
          </div>
        </div>
      </div>

      {/* ================= Ratings Chart ================= */}
      {reviewData.length > 0 && (
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center md:text-left">
            Ratings Overview
          </h2>
          <div className="bg-gray-50 p-6 rounded-2xl shadow-md">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                layout="vertical"
                data={reviewData}
                margin={{ top: 10, right: 30, left: 40, bottom: 10 }}
              >
                <XAxis type="number" />
                <YAxis
                  dataKey="name"
                  type="category"
                  axisLine={false}
                  tickLine={false}
                  width={70}
                />
                <Tooltip />
                <Bar
                  dataKey="count"
                  fill="#3b82f6"
                  barSize={25}
                  radius={[0, 6, 6, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </section>
      )}

      {/* ================= Description ================= */}
      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center md:text-left">
          Description
        </h2>
        <div className="bg-gray-50 p-6 rounded-2xl shadow-inner text-gray-700 text-lg leading-relaxed">
          {app.description || "No description available for this app."}
        </div>
      </section>
    </div>
  );
};

export default Appdetails;

