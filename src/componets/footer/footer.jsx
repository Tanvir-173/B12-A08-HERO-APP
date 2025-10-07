import React from 'react';

const Footer = () => {
    return (
        <div>
            <div className="footer flex flex-col md:flex-row items-center justify-around border-b border-gray-300 pb-4">


                <div className="footer-brand  flex flex-col items-center">
                    <img src="/src/assets/logo.png" className="w-[40px] h-[40px]" />
                    <p>Making web experiences beautiful & functional.</p>
                </div>


                <div className="footer-links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/apps">Apps</a></li>
                        <li><a href="/installation">Installation</a></li>
                        <li><a href="">GitHub</a></li>
                    </ul>
                </div>


                <div className="footer-social">
                    <h4>Follow Me</h4>
                    <div className="social-icons">

                        <p>GitHub</p>
                        <p>LinkedIn</p>
                        <p>Twitter</p>


                    </div>
                </div>
            </div>

            <p className="text-center">© 2025 Tanvir Islam. All rights reserved.</p>
        </div>



    );
};

export default Footer;