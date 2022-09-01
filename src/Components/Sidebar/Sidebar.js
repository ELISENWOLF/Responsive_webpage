import React, { useState } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import { RiHomeLine } from "react-icons/ri";
import { RiBarChartBoxLine } from "react-icons/ri";
import { IoMailOutline } from "react-icons/io5";
import { CgNotes } from "react-icons/cg";
import { IoSettingsOutline } from "react-icons/io5";
import { AiOutlinePlus } from "react-icons/ai";
import { MdOutlineExpandLess } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";
import { BsTwitter, BsFacebook, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { RiMore2Fill } from "react-icons/ri";
import { FaPlay } from "react-icons/fa";
import userlogo from "../Picture/profile-pic-01.jpg";
import otherprof1 from "../Picture/profile-pic-03.jpg";
import otherprof2 from "../Picture/profile-pic-02.jpg";
import otherprof3 from "../Picture/profile-pic-04.jpg";
import clip1 from "../Video/clip1.mp4";
import thumbnail from "../Picture/thumbnail.png"

import { FiSearch } from "react-icons/fi";
import Line from "../Graphs/Line";
import Donut from "../Graphs/Donut";

const Sidebar = () => {
  const [show, setShow] = useState(false);

  var clip = document.querySelectorAll('.clip')
  console.log(clip)
  for (let i = 0; i<clip.length; i++){
    clip[i].addEventListener('mouseenter', function(e){
      clip[i].play()
    })
    clip[i].addEventListener('mouseout', function(e){
      clip[i].pause()
    })
  }

  return (
    <main className={show ? "space-toggle" : null}>
      <header className={`header ${show ? "space-toggle" : null}`}>
        <div className="header-toggle" onClick={() => setShow(!show)}>
          <i className={`fas fa-bars ${show ? "fa-solid fa-xmark" : null}`}></i>
        </div>
        <h3>
          <FiSearch className="fisearch" />
          <input
            type="search"
            placeholder="Search transactions, invoices or help"
          />
        </h3>
        <div className="user-wrapper">
          <IoIosNotificationsOutline className="ioio" />
          <div>
            <h4>John Doe</h4>
          </div>
          <div className="logout-btn">
            <MdOutlineExpandLess className="mdoutline" />
            <img
              src={userlogo}
              width="30px"
              height="30px"
              alt=""
              className="userlogo"
            />
          </div>
        </div>
      </header>

      <aside className={`sidebar ${show ? "show" : null}`}>
        <nav className="nav">
          <div>
            <Link to="" className="nav-logo">
              <i className={``}></i>
              <span className="nav-logo-name">ACME</span>
            </Link>
            <Link to="/home" className="nav-link">
              <RiHomeLine />
              <span className="nav-link-name">Home</span>
            </Link>

            <div className="nav-list">
              <Link to="/" className="nav-link active">
                <RiBarChartBoxLine />
                <span className="nav-link-name">Dashboard</span>
              </Link>
              <Link to="/inbox" className="nav-link">
                <IoMailOutline />
                <span className="nav-link-name">Inbox</span>
              </Link>
              <Link to="/product" className="nav-link">
                <CgNotes />
                <span className="nav-link-name">Products</span>
              </Link>
              <Link to="/admin" className="nav-link">
                <IoSettingsOutline />
                <span className="nav-link-name">Admin</span>
              </Link>
            </div>
          </div>
        </nav>
      </aside>
      <div className="content-container">
        <div className="content-header">
          <h3>Overview</h3>
          <button>
            Add Funds
            <AiOutlinePlus className="" />
          </button>
        </div>
        <div className="left">
          <div className="left-top">
            <div className="line-graph">
              <div className="line-graph-head">
                <span className="stat">Statistics</span>
                <span className="month">
                  Last 6 months
                  <MdOutlineExpandLess className="mdoutline2" />
                </span>
              </div>
              <Line />
            </div>
            <div className="donut-graph">
              <div className="donut-graph1">
                <span className="sale">Sales Distribution</span>
                <Donut />
              </div>
            </div>
          </div>
          <div classname="left-bottom">
            <div className="table-box">
              <div className="table-detail">
                <div className="table-head">
                  <h3>Referrer</h3>
                </div>
                <div className="table-body">
                  <table width="100%">
                    <thead className="table-sub-head">
                      <td>Location</td>
                      <td>Viewers</td>
                      <td>Sales</td>
                      <td>Conversion</td>
                      <td>Total</td>
                    </thead>

                    <hr className="table-line-head" />
                    <tbody className="table-refer-body">
                      <tr>
                        <td>google.com</td>
                        <td>3756</td>
                        <td>752</td>
                        <td>43%</td>
                        <td>$19,291</td>
                      </tr>
                      <hr className="table-line" />
                      <tr>
                        <td>facebook.com</td>
                        <td>8126</td>
                        <td>728</td>
                        <td>32%</td>
                        <td>$17,638</td>
                      </tr>
                      <hr className="table-line" />
                      <tr>
                        <td>twitter.com</td>
                        <td>8836</td>
                        <td>694</td>
                        <td>28%</td>
                        <td>$16,218</td>
                      </tr>
                      <hr className="table-line" />
                      <tr>
                        <td>Direct,email,IM</td>
                        <td>1173</td>
                        <td>645</td>
                        <td>24%</td>
                        <td>$14,421</td>
                      </tr>
                      <hr className="table-line" />
                      <tr>
                        <td>linkedin.com</td>
                        <td>2739</td>
                        <td>539</td>
                        <td>20%</td>
                        <td>$12,370</td>
                      </tr>
                      <hr className="table-line" />
                      <tr>
                        <td>instagram.com</td>
                        <td>2739</td>
                        <td>539</td>
                        <td>20%</td>
                        <td>$12,370</td>
                      </tr>
                      <hr className="table-line" />
                    </tbody>
                  </table>
                  <button className="btn-table">Show More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
            <div className="right-top">
            <div className="user-prof">
                <div className="user-photo">
                  <img src={userlogo} alt="" className="user-pic" />
                </div>
                <div className="user-details">
                  <span id="user-name">Nick Herasimenka</span>
                  <span className="user-country">United States</span>
                </div>
                <div className="user-social">
                  <BsTwitter className="social-icon" />
                  <BsFacebook className="social-icon" />
                  <BsLinkedin className="social-icon" />
                  <BsWhatsapp className="social-icon" />
                </div>
              </div>
              <hr className="line" />
              <div className="other-user">
                <div className="other-head">
                  <span className="other-header">Our Users</span>
                  <RiMore2Fill className="more-opt" />
                </div>
                <div className="other-details">
                  <div className="other-user1">
                    <img src={otherprof1} alt="" className="otherprof1" />
                    <div className="other-short-desc">
                      <span className="other-name1">Drew James</span>
                      <span className="other-country1">United States</span>
                    </div>
                    <span className="contact1">Mobile:8715674877</span>
                  </div>
                  <div className="other-user2">
                    <img src={otherprof2} alt="" className="otherprof1" />
                    <div className="other-short-desc">
                      <span className="other-name1">Bavid Kames</span>
                      <span className="other-country1">United States</span>
                    </div>
                    <span className="contact1">Mobile:8715674877</span>
                  </div>
                  <div className="other-user3">
                    <img src={otherprof3} alt="" className="otherprof1" />
                    <div className="other-short-desc">
                      <span className="other-name1">Lavid Emes</span>
                      <span className="other-country1">United States</span>
                    </div>
                    <span className="contact1">Mobile:8715674877</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="right-bottom">
            <div className="right-bottom-head">
                <span className="right-bottom-header">Product Video</span>
                <RiMore2Fill className="right-bottom-opt" />
              </div>
              <div className="video">
                <video src={clip1} type="video/mp4" poster={thumbnail}  loop className="clip"/>
              </div>
            </div>
        </div>
      </div>
    </main>
  );
};

export default Sidebar;
