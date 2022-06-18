
import React, {useState} from "react";
import "./Home.css";

function Home() {
  // fixed Header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 0);
  });
  // Toogle Menu
   const [show, setShow] = useState(false);
  return (
    <div className="home" id="Home">
      <div className="home__bg">
        <div className="header d__flex align__items__center pxy__30">
          <div className="navigation pxy__30">
            <ul className="navbar d__flex">
              <a href="#Home">
                <li className="nav__items mx__15">Home</li>
              </a>
              <a href="#About">
                <li className="nav__items mx__15">About</li>
              </a>
              <a href="#Services">
                <li className="nav__items mx__15">Services</li>
              </a>
              <a href="#Portfolio">
                <li className="nav__items mx__15">Portfolio</li>
              </a>
              <a href="#Blog">
                <li className="nav__items mx__15">Blog</li>
              </a>
              <a href="#Contact">
                <li className="nav__items mx__15">Contact</li>
              </a>
            </ul>
          </div>
          {/* Toogle Menu */}
          <div className="toggle__menu">
            <svg onClick={() => setShow(!show)}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-justify white pointer"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </div>
          {show ?(
          <div className="sideNavbar">
              <ul className="sidebar d__flex">
              <li className="sideNavbar">
              <a href="#Home">Home</a>
            </li>
            <li className="sideNavbar">
              <a href="#About">About</a>
            </li>
            <li className="sideNavbar">
              <a href="#Portfolio">Portfolio</a>
            </li>
            <li className="sideNavbar">
              <a href="#Contact">Contact</a>
            </li>
              </ul>
          </div>
           ) : null}
        </div>
        {/* HOME CONTENT */}
        {/* Home Content */}
 <div className="container d__flex align__items_center jsutify__content__center">
 <div className="home__content d__flex">
     <div className="home__meta">
         <h1 className="home__text pz__10">Welcome To My Portfolio</h1>
         <h2 className="home__text pz__10">Mohan Dandigam </h2>
         <h3 className="home__text pz__10 sweet">Front End Developer</h3>
     </div>
     <div className="socialmedia">
<a href="https://www.linkedin.com/in/mohandand/" target="_blank" className="icon"><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 64 64" width="60px" height="60px"><linearGradient id="mM51xuUryDpy5zRPCJ4TLa" x1="32" x2="32" y1="6" y2="58" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#1a6dff"/><stop offset="1" stop-color="#c822ff"/></linearGradient><path fill="url(#mM51xuUryDpy5zRPCJ4TLa)" d="M32,58C17.664,58,6,46.337,6,32C6,17.664,17.664,6,32,6s26,11.664,26,26 C58,46.337,46.336,58,32,58z M32,8C18.767,8,8,18.767,8,32s10.767,24,24,24s24-10.767,24-24S45.233,8,32,8z"/><linearGradient id="mM51xuUryDpy5zRPCJ4TLb" x1="21.922" x2="22.081" y1="25.872" y2="44.462" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#6dc7ff"/><stop offset="1" stop-color="#e6abff"/></linearGradient><rect width="6" height="18" x="19" y="26" fill="url(#mM51xuUryDpy5zRPCJ4TLb)"/><linearGradient id="mM51xuUryDpy5zRPCJ4TLc" x1="22.474" x2="22.527" y1="17.966" y2="24.145" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#6dc7ff"/><stop offset="1" stop-color="#e6abff"/></linearGradient><ellipse cx="22.5" cy="21" fill="url(#mM51xuUryDpy5zRPCJ4TLc)" rx="3.5" ry="3"/><g><linearGradient id="mM51xuUryDpy5zRPCJ4TLd" x1="38.077" x2="37.922" y1="25.983" y2="44.076" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#6dc7ff"/><stop offset="1" stop-color="#e6abff"/></linearGradient><path fill="url(#mM51xuUryDpy5zRPCJ4TLd)" d="M40,26h-0.529H39.47c-2.187,0-4,1.572-4.387,3.647H35V26h-6v18h6v-8.588v-1.529 c0.007-0.379,0.037-0.729,0.084-1.06C35.392,31.493,36.577,30.5,38,30.5c1.657,0,3,1.343,3,3v0.559v1.176V44h6v-9.118v-0.823V33 C47,29.134,43.866,26,40,26z"/></g></svg></a>
<a href="https://github.com/mohandand" target="_blank" className="icon"><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 64 64" width="60px" height="60px"><linearGradient id="KpzH_ttTMIjq8dhx1zD2pa" x1="30.999" x2="30.999" y1="16" y2="55.342" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#6dc7ff"/><stop offset="1" stop-color="#e6abff"/></linearGradient><path fill="url(#KpzH_ttTMIjq8dhx1zD2pa)" d="M25.008,56.007c-0.003-0.368-0.006-1.962-0.009-3.454l-0.003-1.55 c-6.729,0.915-8.358-3.78-8.376-3.83c-0.934-2.368-2.211-3.045-2.266-3.073l-0.124-0.072c-0.463-0.316-1.691-1.157-1.342-2.263 c0.315-0.997,1.536-1.1,2.091-1.082c3.074,0.215,4.63,2.978,4.694,3.095c1.569,2.689,3.964,2.411,5.509,1.844 c0.144-0.688,0.367-1.32,0.659-1.878C20.885,42.865,15.27,40.229,15.27,30.64c0-2.633,0.82-4.96,2.441-6.929 c-0.362-1.206-0.774-3.666,0.446-6.765l0.174-0.442l0.452-0.144c0.416-0.137,2.688-0.624,7.359,2.433 c1.928-0.494,3.969-0.749,6.074-0.759c2.115,0.01,4.158,0.265,6.09,0.759c4.667-3.058,6.934-2.565,7.351-2.433l0.451,0.145 l0.174,0.44c1.225,3.098,0.813,5.559,0.451,6.766c1.618,1.963,2.438,4.291,2.438,6.929c0,9.591-5.621,12.219-10.588,13.087 c0.563,1.065,0.868,2.402,0.868,3.878c0,1.683-0.007,7.204-0.015,8.402l-2-0.014c0.008-1.196,0.015-6.708,0.015-8.389 c0-2.442-0.943-3.522-1.35-3.874l-1.73-1.497l2.274-0.253c5.205-0.578,10.525-2.379,10.525-11.341c0-2.33-0.777-4.361-2.31-6.036 l-0.43-0.469l0.242-0.587c0.166-0.401,0.894-2.442-0.043-5.291c-0.758,0.045-2.568,0.402-5.584,2.447l-0.384,0.259l-0.445-0.123 c-1.863-0.518-3.938-0.796-6.001-0.806c-2.052,0.01-4.124,0.288-5.984,0.806l-0.445,0.123l-0.383-0.259 c-3.019-2.044-4.833-2.404-5.594-2.449c-0.935,2.851-0.206,4.892-0.04,5.293l0.242,0.587l-0.429,0.469 c-1.536,1.681-2.314,3.712-2.314,6.036c0,8.958,5.31,10.77,10.504,11.361l2.252,0.256l-1.708,1.49 c-0.372,0.325-1.03,1.112-1.254,2.727l-0.075,0.549l-0.506,0.227c-1.321,0.592-5.839,2.162-8.548-2.485 c-0.015-0.025-0.544-0.945-1.502-1.557c0.646,0.639,1.433,1.673,2.068,3.287c0.066,0.19,1.357,3.622,7.28,2.339l1.206-0.262 l0.012,3.978c0.003,1.487,0.006,3.076,0.009,3.444L25.008,56.007z"/><linearGradient id="KpzH_ttTMIjq8dhx1zD2pb" x1="32" x2="32" y1="5" y2="59.167" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#1a6dff"/><stop offset="1" stop-color="#c822ff"/></linearGradient><path fill="url(#KpzH_ttTMIjq8dhx1zD2pb)" d="M32,58C17.663,58,6,46.337,6,32S17.663,6,32,6s26,11.663,26,26S46.337,58,32,58z M32,8 C18.767,8,8,18.767,8,32s10.767,24,24,24s24-10.767,24-24S45.233,8,32,8z"/></svg></a>
<a href="mailto:mohandand@gmail.com" target="_blank" className="icon"><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 64 64" width="60px" height="60px"><linearGradient id="X8PQgv_hN2z14HAU6EeM8a" x1="32" x2="32" y1="12" y2="52" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#1a6dff"/><stop offset="1" stop-color="#c822ff"/></linearGradient><path fill="url(#X8PQgv_hN2z14HAU6EeM8a)" d="M58,16.82h-0.01C57.94,14.15,55.81,12,53.2,12H10.8c-2.61,0-4.74,2.15-4.79,4.82H6 c0,0.01,0.01,0.02,0.01,0.04S6,16.89,6,16.91v30.18C6,49.8,8.16,52,10.8,52h42.4c2.64,0,4.8-2.2,4.8-4.91V16.91 c0-0.02-0.01-0.03-0.01-0.05S58,16.83,58,16.82z M50.67,14L32,27.11L13.33,14H50.67z M10.03,14.13L32,29.56l21.97-15.43 c1.15,0.34,2,1.42,2.02,2.72c-0.03,0.64-0.87,1.44-1.3,1.74L32,34.77L9.3,18.58c-0.42-0.29-1.26-1.09-1.29-1.73 C8.03,15.55,8.88,14.47,10.03,14.13z M12,23v27h-1.2C9.26,50,8,48.69,8,47.09V20.11c0.07,0.05,0.12,0.09,0.14,0.11L12.05,23H12z M50,50H14V24.39l18,12.84l18-12.84V50z M56,47.09c0,1.6-1.26,2.91-2.8,2.91H52V23h-0.05l3.9-2.78c0.02-0.02,0.08-0.06,0.15-0.11 V47.09z"/><linearGradient id="X8PQgv_hN2z14HAU6EeM8b" x1="53.975" x2="53.975" y1="20.11" y2="50" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#6dc7ff"/><stop offset="1" stop-color="#e6abff"/></linearGradient><path fill="url(#X8PQgv_hN2z14HAU6EeM8b)" d="M56,20.11v26.98c0,1.6-1.26,2.91-2.8,2.91H52V23h-0.05l3.9-2.78 C55.87,20.2,55.93,20.16,56,20.11z"/><linearGradient id="X8PQgv_hN2z14HAU6EeM8c" x1="10.025" x2="10.025" y1="20.11" y2="50" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#6dc7ff"/><stop offset="1" stop-color="#e6abff"/></linearGradient><path fill="url(#X8PQgv_hN2z14HAU6EeM8c)" d="M12.05,23H12v27h-1.2C9.26,50,8,48.69,8,47.09V20.11c0.07,0.05,0.12,0.09,0.14,0.11L12.05,23z"/><linearGradient id="X8PQgv_hN2z14HAU6EeM8d" x1="32" x2="32" y1="14.13" y2="34.77" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#6dc7ff"/><stop offset="1" stop-color="#e6abff"/></linearGradient><path fill="url(#X8PQgv_hN2z14HAU6EeM8d)" d="M55.99,16.85c-0.03,0.64-0.87,1.44-1.3,1.74L32,34.77L9.3,18.58 c-0.42-0.29-1.26-1.09-1.29-1.73c0.02-1.3,0.87-2.38,2.02-2.72L32,29.56l21.97-15.43C55.12,14.47,55.97,15.55,55.99,16.85z"/></svg></a>
<a href="https://www.instagram.com/mohan_dandigam/?hl=en" target="_blank" className="icon"><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 96 96" width="60px" height="60px"><path fill="#db3eb1" d="M78.507,48.5c-0.066,0-0.132-0.002-0.198-0.007c-1.653-0.107-2.906-1.535-2.798-3.188 c0.869-13.307,0.875-20.995-1.577-23.518c-1.99-2.048-7.295-1.854-15.329-1.56c-3.086,0.112-6.584,0.24-10.58,0.273 c-4.068-0.031-7.584-0.16-10.686-0.273c-8.003-0.294-13.29-0.487-15.272,1.553c-2.446,2.517-2.442,10.21-1.577,23.525 c0.107,1.653-1.146,3.081-2.799,3.188c-1.648,0.1-3.081-1.146-3.188-2.8c-1.062-16.354-0.843-23.873,3.262-28.096 c3.841-3.951,9.846-3.732,19.794-3.367c3.062,0.112,6.532,0.239,10.466,0.27c3.861-0.032,7.314-0.158,10.361-0.27 c9.978-0.366,16.002-0.586,19.851,3.374c4.11,4.229,4.328,11.745,3.261,28.09C81.394,47.282,80.074,48.5,78.507,48.5z" opacity=".3"/><path fill="#db3eb1" d="M78.506,47.5c-0.044,0-0.088-0.001-0.132-0.004c-1.102-0.072-1.938-1.024-1.865-2.126 c0.907-13.902,0.869-21.474-1.857-24.28c-2.3-2.365-7.488-2.175-16.083-1.862c-3.08,0.113-6.57,0.24-10.551,0.273 c-4.038-0.031-7.546-0.16-10.642-0.273c-8.565-0.313-13.733-0.502-16.026,1.855c-2.722,2.801-2.762,10.376-1.858,24.287 c0.072,1.103-0.764,2.054-1.866,2.126c-1.105,0.082-2.054-0.765-2.125-1.866c-1.021-15.73-0.833-23.41,2.981-27.335 c3.531-3.633,9.371-3.418,19.04-3.064c3.068,0.112,6.546,0.239,10.495,0.271c3.892-0.032,7.353-0.159,10.406-0.271 c9.703-0.353,15.559-0.568,19.097,3.072c3.82,3.931,4.006,11.606,2.98,27.327C80.431,46.688,79.551,47.5,78.506,47.5z" opacity=".3"/><path fill="#db3eb1" d="M78.505,46.5c-0.022,0-0.044-0.001-0.066-0.002c-0.551-0.036-0.969-0.512-0.933-1.063 c0.947-14.502,0.869-21.948-2.138-25.041c-2.61-2.687-7.965-2.491-16.836-2.165c-3.073,0.112-6.556,0.24-10.522,0.272 c-4.008-0.031-7.508-0.159-10.597-0.272c-8.842-0.321-14.177-0.519-16.78,2.158c-3.001,3.087-3.081,10.537-2.139,25.049 c0.036,0.551-0.382,1.026-0.933,1.063c-0.539,0.018-1.027-0.382-1.063-0.934c-1.001-15.424-0.849-22.921,2.701-26.572 c3.222-3.314,8.894-3.107,18.287-2.763c3.075,0.113,6.561,0.24,10.523,0.271c3.922-0.032,7.39-0.159,10.45-0.271 c9.425-0.343,15.115-0.553,18.343,2.77c3.555,3.658,3.706,11.152,2.7,26.566C79.467,46.094,79.027,46.5,78.505,46.5z"/><path fill="#0fd2ff" d="M30.431,81.953c-5.859,0.001-9.847-0.656-12.668-3.559 c-4.11-4.229-4.328-11.745-3.261-28.09c0.108-1.654,1.552-2.918,3.189-2.798c1.653,0.107,2.906,1.535,2.798,3.188 c-0.869,13.307-0.875,20.995,1.577,23.518c1.991,2.049,7.296,1.856,15.329,1.56c3.086-0.112,6.584-0.24,10.58-0.273 c4.068,0.031,7.584,0.16,10.686,0.273c8.002,0.292,13.289,0.486,15.272-1.553c2.446-2.517,2.442-10.21,1.577-23.525 c-0.107-1.653,1.146-3.081,2.799-3.188c1.646-0.107,3.081,1.146,3.188,2.8c1.062,16.354,0.843,23.873-3.262,28.096 c-3.841,3.952-9.846,3.733-19.794,3.367c-3.062-0.112-6.532-0.239-10.466-0.27c-3.861,0.032-7.314,0.158-10.361,0.27 C34.95,81.866,32.566,81.953,30.431,81.953z" opacity=".3"/><path fill="#0fd2ff" d="M30.447,80.953c-5.603,0-9.396-0.61-11.967-3.256c-3.82-3.931-4.006-11.606-2.98-27.327 c0.072-1.103,1.026-1.942,2.126-1.866c1.102,0.072,1.938,1.024,1.865,2.126c-0.907,13.902-0.869,21.474,1.857,24.28 c2.3,2.366,7.489,2.176,16.083,1.862c3.08-0.113,6.57-0.24,10.551-0.273c4.038,0.031,7.546,0.16,10.642,0.273 c8.565,0.313,13.733,0.503,16.026-1.855c2.722-2.801,2.762-10.376,1.858-24.287c-0.072-1.103,0.764-2.054,1.866-2.126 c1.104-0.069,2.054,0.765,2.125,1.866c1.021,15.73,0.833,23.41-2.981,27.335c-3.531,3.633-9.371,3.418-19.04,3.064 c-3.068-0.112-6.546-0.239-10.495-0.271c-3.892,0.032-7.353,0.159-10.406,0.271C34.923,80.866,32.557,80.953,30.447,80.953z" opacity=".3"/><path fill="#0fd2ff" d="M30.452,79.953c-5.339,0-8.933-0.563-11.254-2.952c-3.555-3.658-3.706-11.152-2.7-26.566 c0.036-0.551,0.524-0.942,1.063-0.933c0.551,0.036,0.969,0.512,0.933,1.063c-0.947,14.502-0.869,21.948,2.138,25.041 c2.609,2.687,7.964,2.489,16.836,2.165c3.073-0.112,6.556-0.24,10.522-0.272c4.008,0.031,7.508,0.159,10.597,0.272 c8.845,0.323,14.178,0.521,16.78-2.158c3.001-3.087,3.081-10.537,2.139-25.049c-0.036-0.551,0.382-1.026,0.933-1.063 c0.547-0.031,1.027,0.382,1.063,0.934c1.001,15.424,0.849,22.921-2.701,26.572c-3.221,3.314-8.893,3.107-18.287,2.763 c-3.075-0.113-6.561-0.24-10.523-0.271c-3.922,0.032-7.39,0.159-10.45,0.271C34.893,79.867,32.539,79.953,30.452,79.953z"/><g><path fill="#db3eb1" d="M48.539,67.01c-0.214,0-0.428-0.004-0.644-0.012 c-8.613-0.479-14.967-4.767-17.496-11.766c-2.678-7.414-0.514-16.344,5.263-21.714c5.452-5.069,13.059-5.978,20.869-2.496 c1.26,0.563,1.942,1.887,1.746,3.188c1.099-0.514,2.446-0.329,3.366,0.566C67,39.99,68.44,48.102,65.309,55.439 C62.243,62.624,55.856,67.009,48.539,67.01z M47.391,34.939c-2.91,0-5.519,0.997-7.644,2.973 c-4.002,3.721-5.56,10.147-3.706,15.281c1.697,4.696,6.002,7.47,12.125,7.812c5.975,0.203,9.931-3.954,11.624-7.92 c1.711-4.011,1.997-9.796-2.333-14.008c-0.72-0.701-1.013-1.676-0.874-2.599c-0.763,0.357-1.669,0.393-2.497,0.024 C51.745,35.458,49.49,34.939,47.391,34.939z" opacity=".3"/><path fill="#db3eb1" d="M48.536,66.01c-0.202,0-0.403-0.004-0.606-0.011 c-8.173-0.455-14.205-4.503-16.59-11.106c-2.546-7.048-0.489-15.536,5.003-20.642c5.145-4.783,12.355-5.626,19.781-2.314 c1.009,0.449,1.462,1.632,1.012,2.641c-0.45,1.01-1.633,1.463-2.641,1.012c-5.978-2.664-11.457-2.102-15.428,1.591 c-4.282,3.981-5.95,10.859-3.965,16.354c1.841,5.097,6.462,8.105,13.01,8.47c6.503,0.231,10.777-4.256,12.599-8.526 c2.314-5.422,1.311-11.355-2.554-15.116c-0.792-0.771-0.809-2.037-0.039-2.828c0.771-0.793,2.036-0.809,2.828-0.039 c5.06,4.924,6.412,12.599,3.444,19.554C61.484,61.854,55.447,66.009,48.536,66.01z" opacity=".3"/><path fill="#db3eb1" d="M48.533,65.01c-0.189,0-0.378-0.004-0.568-0.011C37.386,64.41,33.598,58.201,32.28,54.553 c-2.375-6.576-0.38-14.806,4.744-19.569c2.841-2.645,9.052-6.437,18.692-2.134c0.504,0.225,0.731,0.816,0.506,1.32 c-0.225,0.505-0.817,0.732-1.32,0.506c-6.367-2.838-12.232-2.21-16.516,1.771c-4.563,4.242-6.339,11.571-4.225,17.426 c1.986,5.498,6.921,8.74,13.895,9.129c7.018,0.247,11.622-4.557,13.574-9.133c2.477-5.805,1.387-12.174-2.777-16.226 c-0.396-0.385-0.405-1.019-0.02-1.414c0.386-0.396,1.019-0.405,1.414-0.02c4.762,4.633,6.026,11.873,3.222,18.444 C60.725,61.084,55.037,65.009,48.533,65.01z"/></g><g><path fill="#0fd2ff" d="M67.145,34.896c-0.357,0-0.719-0.029-1.084-0.09c-2.968-0.486-5.01-2.913-4.966-5.9 c-0.043-2.849,1.87-5.204,4.76-5.775c2.948-0.584,5.84,0.905,6.876,3.535c0.28,0.709,0.27,1.461,0.028,2.126 c0.274,0.641,0.327,1.378,0.097,2.094C72.073,33.325,69.765,34.896,67.145,34.896z" opacity=".3"/><path fill="#0fd2ff" d="M67.141,33.895c-0.302,0-0.609-0.024-0.918-0.075c-2.506-0.411-4.165-2.38-4.128-4.899 c-0.035-2.379,1.554-4.335,3.955-4.809c2.474-0.492,4.892,0.739,5.752,2.92c0.241,0.612,0.16,1.271-0.163,1.79 c0.346,0.494,0.464,1.139,0.266,1.758C71.256,32.598,69.332,33.895,67.141,33.895z M67.122,28.007c-0.101,0-0.202,0.01-0.298,0.028 c-0.741,0.146-0.733,0.646-0.729,0.885c-0.003,0.287-0.011,0.823,0.776,0.952c0.389,0.062,1.066-0.02,1.225-0.516 c0.051-0.16,0.121-0.309,0.206-0.445c-0.088-0.126-0.163-0.264-0.222-0.413C67.949,28.166,67.534,28.007,67.122,28.007z" opacity=".3"/><path fill="#0fd2ff" d="M67.106,32.891c-0.244,0-0.486-0.02-0.722-0.059c-1.997-0.327-3.319-1.894-3.29-3.897 c-0.029-1.939,1.207-3.459,3.148-3.843c1.718-0.338,3.855,0.345,4.628,2.307c0.203,0.514-0.05,1.094-0.563,1.297 c-0.517,0.202-1.095-0.051-1.297-0.564c-0.371-0.942-1.476-1.253-2.38-1.077c-0.469,0.093-1.557,0.462-1.536,1.881 c-0.022,1.538,1.229,1.861,1.614,1.925c0.928,0.147,2.023-0.212,2.339-1.197c0.169-0.524,0.73-0.813,1.258-0.646 c0.526,0.169,0.815,0.731,0.646,1.258C70.378,32.063,68.696,32.891,67.106,32.891z"/></g></svg></a>
</div>
 </div>
</div>
      </div>
    </div>
  );
}

export default Home;
