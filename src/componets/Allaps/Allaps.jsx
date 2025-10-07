import React, { useState} from "react";
import { useLoaderData, useNavigate } from "react-router";

const AllApps = () => {
  
  const loaderData = useLoaderData(); // fetch data from loader
  const [apps, setApps] = useState(loaderData);
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();
  

//   useEffect(() => {
//     fetch("/Data.json")
//       .then((res) => res.json())
//       .then((data) => setApps(data));
//   }, []);

  const filteredApps = apps.filter((app) =>
    app.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      {/* Title Section */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">All Apps</h1>
        <p className="text-gray-500 text-lg">
          Discover all our top-rated apps in one place.
        </p>
      </div>

      {/* Search and States */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <p className="text-gray-600 font-medium mb-3 md:mb-0">
          Total Apps: <span className="text-blue-600">{filteredApps.length}</span>
        </p>

        <input
          type="text"
          placeholder="Search apps..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 w-full md:w-1/3 focus:ring-2 focus:ring-blue-400 outline-none"
        />
      </div>

      {/* App Section */}
      {filteredApps.length === 0 ? (
        <p className="text-center text-gray-500 text-lg font-medium">
          No App Found 😕
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredApps.map((app) => (
            <div
              key={app.id}
              onClick={() => navigate(`/app/${app.id}`)}
              className="bg-white shadow-md rounded-2xl overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300"
            >
              <img
                src={app.image}
                alt={app.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                  {app.title}
                </h3>
                <p className="text-gray-500 text-sm">
                  📥 {app.downloads} downloads
                </p>
                <p className="text-yellow-500 text-sm">⭐ {app.rating}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllApps;
