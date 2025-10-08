import React, { useState } from "react";
import { useLoaderData } from "react-router";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const Appdetails = () => {
    const app = useLoaderData();
    const [isInstalled, setIsInstalled] = useState(false);
    const [showToast, setShowToast] = useState(false);

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


    // Handle install button click
    const handleInstall = () => {
        setIsInstalled(true);
        setShowToast(true);
        setTimeout(() => setShowToast(false), 2500);
    };

    // Prepare rating data for chart
    const reviewData = app.ratings.map((r) => ({
        name: r.name,
        count: r.count,
    }));

    return (
        <div className="max-w-6xl mx-auto py-16 px-6">
            {/* ================= App Info Section ================= */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-10 mb-16">
                <img
                    src={app.image}
                    alt={app.title}
                    className="w-64 h-64 object-cover rounded-2xl shadow-lg"
                />

                <div className="flex-1 text-center md:text-left">
                    <h1 className="text-4xl font-bold text-gray-800 mb-3">{app.title}</h1>
                    <p className="text-lg text-gray-600 mb-4">{app.companyName}</p>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-6 text-gray-700">
                        <p>⭐ <span className="font-semibold">{app.ratingAvg}</span> average rating</p>
                        <p>📥 <span className="font-semibold">{app.downloads.toLocaleString()}</span> downloads</p>
                        <p>💬 <span className="font-semibold">{app.reviews}</span> reviews</p>
                    </div>

                    <button
                        onClick={handleInstall}
                        disabled={isInstalled}
                        className={`px-6 py-3 rounded-lg font-semibold transition shadow-md ${isInstalled
                            ? "bg-gray-400 text-white cursor-not-allowed"
                            : "bg-blue-600 hover:bg-blue-700 text-white"
                            }`}
                    >
                        {isInstalled ? "Installed" : "Install"}
                    </button>
                </div>
            </div>

            {/* ================= Toast Notification ================= */}
            {showToast && (
                <div className="fixed top-8 right-8 bg-green-500 text-white font-semibold px-6 py-3 rounded-lg shadow-lg animate-fadeIn">
                    ✅ App installed successfully!
                </div>
            )}

            {/* ================= Review Chart ================= */}
            {/* <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center md:text-left">
          User Reviews Overview
        </h2>
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={reviewData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#3b82f6" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section> */}
            <section className="mb-16">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center md:text-left">
                    Ratings
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
                                fill="#ff8c00"
                                barSize={25}
                                radius={[0, 6, 6, 0]}
                            />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </section>


            {/* ================= App Description ================= */}
            <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center md:text-left">
                    Description
                </h2>
                <div className="bg-gray-50 p-6 rounded-2xl shadow-inner  text-gray-700 text-lg">
                    {app.description || "No description available for this app."}
                    <p>
                        This focus app takes the proven Pomodoro technique and makes it even more practical for modern lifestyles. Instead of just setting a timer, it builds a complete environment for deep work, minimizing distractions and maximizing concentration. Users can create custom work and break intervals, track how many sessions they complete each day, and review detailed statistics about their focus habits over time. The design is minimal and calming, reducing cognitive load so you can focus entirely on the task at hand. Notifications gently let you know when to pause and when to resume, helping you maintain a healthy rhythm between work and rest.

                        A unique feature of this app is the integration of task lists with timers. You can assign each task to a specific Pomodoro session, making your schedule more structured. The built-in analytics show not only how much time you’ve worked but also which tasks consumed the most energy. This allows you to reflect on your efficiency and adjust your workflow accordingly. The app also includes optional background sounds such as white noise, nature sounds, or instrumental music to create a distraction-free atmosphere.

                        For people who struggle with procrastination, the app provides motivational streaks and achievements. Completing multiple Pomodoro sessions unlocks milestones, giving a sense of accomplishment. This gamified approach makes focusing more engaging and less like a chore. Whether you’re studying for exams, coding, writing, or handling office work, the app adapts to your routine. By combining focus tracking, task management, and motivational tools, this Pomodoro app ensures that you not only work harder but also smarter. It is a personal trainer for your brain, keeping you disciplined, refreshed, and productive throughout the day.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Appdetails;
