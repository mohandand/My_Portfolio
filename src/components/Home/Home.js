import React from "react";
import "./Home.css"
import logo from "../../img/logo.png"
import profile from "../../img/myimage.JPG"

export default function Home(){
        return(
            <div className="home">
                <div className="home__bg"></div>
                <div className="header d__flex align__items_center jsutify__content__center">
                <div>
                    <img className="logo" src={logo}/>
                </div>
                <div className="navigation mar">
                    <ul className="navbar d__flex" >
                        <a href="#Home"><li className="nav__items mx__15">Home</li></a>
                        <a href="#Home"><li className="nav__items mx__15">About</li></a>
                        <a href="#Home"><li className="nav__items mx__15">Portfolio</li></a>
                        <a href="#Home"><li className="nav__items mx__15">Contact</li></a>
                    </ul>
                </div>
                </div>
                {/* Home Content */}
                <div className="container d__flex align__items_center jsutify__content__center">
                    <div className="home__content d__flex">
                        <div className="home__meta">
                            <h1 className="home__text pz__10">Welcome To My Portfolio</h1>
                            <h2 className="home__text pz__10">This is Mohan Dandigam </h2>
                            <h3 className="home__text pz__10 sweet">I am a Front End Developer</h3>
                        </div>
                        {/* <div >
                        <img className="my_photo" src={profile}/>
                        </div> */}
                    </div>
                </div>
            </div>
        )
}