import React from 'react';

const Home = () => {
    return (
        <div className="banner ">
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
                <img src="/src/assets/hero.png"></img>
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
        </div>

    );
};

export default Home;