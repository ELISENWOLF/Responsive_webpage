import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Graphs from "../Graphs/Graphs";
import userlogo from "../logo/profile-pic-01.jpg";
import { MdOutlineExpandLess } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";
import { BiMenuAltRight } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { RiMore2Fill } from "react-icons/ri";
import otherprof1 from "../logo/profile-pic-03.jpg";
import otherprof2 from "../logo/profile-pic-02.jpg";
import otherprof3 from "../logo/profile-pic-04.jpg";
import clip1 from "../Videos/clip1.mp4";
import thumbnail from "../Videos/thumbnail.png";
import "./Dashboard.css";

function Dashboard() {

  var clip = document.querySelectorAll('.clip')
  console.log(clip)
  for (let i = 0; i>clip.length; i++){
    clip[i].addEventListener('mouseenter', function(e){
      clip[i].play()
    })
    clip[i].addEventListener('mouseout', function(e){
      clip[i].pause()
    })
  }

  return (
    <div className="container">
      <div className="left-container">
        <Sidebar />
      </div>
      <div className="right-container">
        <header>
          <h3>
            <label for="">
              <BiMenuAltRight className="bimenu" />
              <FiSearch className="fisearch" />
              <input
                type="search"
                placeholder="Search transactions, invoices or help"
              />
            </label>
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
        <main>
          <div className="main-head">
            <h3 className="main-header">Overview</h3>
            <button className="add-button">
              Add Funds <AiOutlinePlus className="plus-icon" />
            </button>
          </div>
          <div className="cards-left">
            <div className="card-top">
              <div className="graph">
                <div className="graph-head">
                  <span>Statistics</span>
                  <span>
                    Last 6 months <MdOutlineExpandLess className="mdoutline2" />
                  </span>
                </div>
                <div className="line-graphs">
                  <Graphs />
                </div>
              </div>
              <div className="pie-chart">
                <div className="pie-head">
                  <span>Sales distribution</span>
                </div>
              </div>
            </div>
            <div className="card-bottom">
              <div className="refer-box">
                <div className="refer-detail">
                  <div className="refer-head">
                    <h3>Referrer</h3>
                  </div>
                  <div className="refer-body">
                    <table width="100%">
                      <thead className="ref-sub-head">
                        <td>Location</td>
                        <td>Viewers</td>
                        <td>Sales</td>
                        <td>Conversion</td>
                        <td>Total</td>
                      </thead>
                      
                      <hr className="refer-line-head" />
                      <tbody className="refer-table-body">
                        <tr>
                          <td>google.com</td>
                          <td>3756</td>
                          <td>752</td>
                          <td>43%</td>
                          <td>$19,291</td>
                        </tr>
                        <hr className="refer-line" />
                        <tr>
                          <td>facebook.com</td>
                          <td>8126</td>
                          <td>728</td>
                          <td>32%</td>
                          <td>$17,638</td>
                        </tr>
                        <hr className="refer-line" />
                        <tr>
                          <td>twitter.com</td>
                          <td>8836</td>
                          <td>694</td>
                          <td>28%</td>
                          <td>$16,218</td>
                        </tr>
                        <hr className="refer-line" />
                        <tr>
                          <td>Direct,email,IM</td>
                          <td>1173</td>
                          <td>645</td>
                          <td>24%</td>
                          <td>$14,421</td>
                        </tr>
                        <hr className="refer-line" />
                        <tr>
                          <td>linkedin.com</td>
                          <td>2739</td>
                          <td>539</td>
                          <td>20%</td>
                          <td>$12,370</td>
                        </tr>
                        <hr className="refer-line" />
                        <tr>
                          <td>instagram.com</td>
                          <td>2739</td>
                          <td>539</td>
                          <td>20%</td>
                          <td>$12,370</td>
                        </tr>
                        <hr className="refer-line" />
                      </tbody>
                    </table>
                    <button className="btn-table">Show More</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-right">
            <div className="card-right-top">
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
            <div className="card-right-bottom">
              <div className="card-right-bottom-head">
                <span className="card-right-bottom-header">Product Video</span>
                <RiMore2Fill className="card-right-bottom-opt" />
              </div>
              <div className="video">
                <video src={clip1} type="video/mp4" poster={thumbnail}  loop className="clip"/>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
