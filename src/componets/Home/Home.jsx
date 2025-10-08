import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navigate,useLoaderData,useNavigate } from 'react-router';
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import hero from "/src/assets/hero.png"
// const fetchCards = async()=>{
//     const res= await fetch("/Data.json")
//     return res.json()
// }
const Home = () => {
     const navigate = useNavigate();
    //  const Apps=use(fetchCards)
        const Apps=useLoaderData()
     const topApps = Apps.slice(0, 8);
    return (
        <div className="banner">
            <h1 className="font-normal text-[72px] font-normal text-center">We Build <br />Productive Apps</h1>

            <p className="text-center text-[rgba(98,115,130,1)] text-[20px] font-normal">At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.<br />Our goal is to turn your ideas into digital experiences that truly make an impact.</p>

            <div className="flex flex-row gap-4 justify-center">
                <a
                    href="https://www.apple.com/app-store/"

                    className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-100"
                >
                    App Store
                </a>

                <a
                    href="https://play.google.com/store"

                    className="bg-white text-green-600 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-100"
                >
                    Play Store
                </a>
            </div>


            <div className="banner-image flex items-center justify-center mt-[20px]">
                <img src={hero}></img>
            </div>

            <div className="states-section bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1))]">
                <h2 className="text-[rgba(255,255,255,1)] font-inter text-[48px] font-bold text-center">Trusted by Millions, Built for You</h2>
                <div className="state-cards flex flex-col md:flex-row justify-around items-center mt-[20px] gap-[20px]">
                    <div className="card ">
                        <p className="text-[rgba(255,255,255,1)] text-[16px] font-normal text-center">Total Downloads</p>
                        <h3 className="text-[rgba(255,255,255,1)] font-inter text-[64px] font-extrabold text-center">29.6M</h3>
                        <p className="text-[rgba(255,255,255,1)] text-[16px] font-normal text-center">21% more than last month</p>
                    </div>
                    <div className="card">
                        <p className="text-[rgba(255,255,255,1)] text-[16px] font-normal text-center">Total Reviews</p>
                        <h3 className="text-[rgba(255,255,255,1)] font-inter text-[64px] font-extrabold text-center">906K</h3>
                        <p className="text-[rgba(255,255,255,1)] text-[16px] font-normal text-center">46% more than last month</p>
                    </div>
                    <div className="card">
                        <p className="text-[rgba(255,255,255,1)] text-[16px] font-normal text-center">Active Apps</p>
                        <h3 className="text-[rgba(255,255,255,1)] font-inter text-[64px] font-extrabold text-center">132+</h3>
                        <p className="text-[rgba(255,255,255,1)] text-[16px] font-normal text-center">31 more will Launch</p>
                    </div>

                </div>


            </div>

            <section className="top-apps py-20 px-6 text-center">
                <h2 className="text-3xl font-bold mb-10 text-gray-800">
                    Top Rated Apps
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                    {topApps.map((app) => (
                        <div
                            key={app.id}
                            className="app-card bg-white rounded-2xl shadow-md hover:shadow-xl p-4 cursor-pointer transition"
                            onClick={() => navigate(`/app/${app.id}`)}
                        >
                            <img
                                src={app.image}
                                alt={app.title}
                                className="w-full h-40 object-cover rounded-xl mb-4"
                            />
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                {app.title}
                            </h3>
                            <p className="text-gray-600 text-sm">
                                <FontAwesomeIcon icon={faDownload} />
                                {app.downloads.toLocaleString()} downloads
                            </p>
                            <p className="text-yellow-500 font-medium"><FontAwesomeIcon icon={faStar} /> {app.ratingAvg}</p>
                        </div>
                    ))}
                </div>

                <button
                    onClick={() => navigate("/apps")}
                    className="mt-10 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
                >
                    Show All
                </button>
            </section>
        </div>

    );
};

export default Home;