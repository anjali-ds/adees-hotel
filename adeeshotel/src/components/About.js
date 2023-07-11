import React from 'react';
import './about.css'
import { FaAccusoft, FaCloudversify} from 'react-icons/fa'
function About(props) {
    return (
        <div>
            <div className="container-fluid     ">
                <div className="row my-5 mx-5">
                    <div className="col-lg-6 px-5">
                        <img src="/img/adees/about.png" alt="" />
                    </div>
                    <div className="col-lg-6 px-5 ">
                        <div className="heading">
                            <h1 >ABOUT US</h1>


                        </div>
                        <div className="head mx-5 px-5">
                            <h1>A Best Place
                                to Enjoy</h1>
                        </div>
                        <div className="content">
                            <ul>
                                <li>THE ADEES is a heritage, five-start,luxury Hotel in rewari.</li>
                                <li>Built in the saracenic revival style.</li>
                                <li>It opened ion 2021 as THE ADEES and has historically often been simply known as "THE ADEES"</li>
                                <li>It has been Considered one of the Finest hotels in town.</li>
                            </ul>
                        </div>
                        <div className="button">
                            <button className='btn btn-primary'>More About Us</button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 my-3 mx-0">
                        <div className="imgbox">
                            {/* facilities image */}
                            <div className="fimg">
                                <img src="/img/adees/hotel-rooms-2614141__340.jpg" alt="" />
                                <div className="game">
                                    <a href='#'> DELICIOUS FOOD</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 my-3 mx-0">
                        <div className="imgbox">
                            {/* facilities image */}
                            <div className="fimg">
                                <img src="/img/adees/1 (1).jpg" alt="" />
                                <div className="game">
                                    <a href='#'> SPA SALOON</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 my-3 mx-0">
                        <div className="imgbox">
                            {/* facilities image */}
                            <div className="fimg">
                                <img src="/img/adees/1 (2).jpg" alt="" />
                                <div className="game">
                                    <a href='#'> SWIMMING POOL</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 my-3 mx-0">
                        <div className="imgbox">
                            {/* facilities image */}
                            <div className="fimg">
                                <img src="/img/adees/1 (3).jpg" alt="" />
                                <div className="game">
                                    <a href='#'> GAME ROOM</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 my-3 mx-0">
                        <div className="imgbox">
                            {/* facilities image */}
                            <div className="fimg">
                                <img src="/img/adees/1 (4).jpg" alt="" />
                                <div className="game">
                                    <a href='#'> GYM</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 my-3 mx-0">
                        <div className="imgbox">
                            {/* facilities image */}
                            <div className="fimg">
                                <img src="/img/adees/1 (5).jpg" alt="" />
                                <div className="game">
                                    <a href='#'> BREAKFAST</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <button>abc</button>

        </div>
    );
}

export default About;