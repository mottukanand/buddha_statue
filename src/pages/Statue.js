import React, { useState } from "react";
import "../assets/css/statue.css";
import logo from "../assets/images/logo.png";
import {
  FaChevronLeft,
  FaRegHeart,
  FaShareAlt,
  FaRegEye,
  FaLongArrowAltRight,
  FaAngleDoubleLeft,
  FaAngleDoubleRight
} from "react-icons/fa";

const Statue = () => {
  const [toggleSideBar, setToggleSideBar] = useState(false);

  const handleToggleSideBar = (e) => {
    e.preventDefault();
    setToggleSideBar((toggleSideBar) => !toggleSideBar);
  };

  console.log(toggleSideBar, "toggleSidebar");
  return (
    <>
      {/* <div className="relative-pos"> */}
        <div className="flex-container relative-pos">
          <div className={ toggleSideBar ? "flex-item-left active" : "flex-item-left"}>
            <div className="content">
              <div
                className="custom-icon center mb-35"
               
              >
                <FaChevronLeft className="icon-vertical-middle" />
              </div>
              <div className="title mb-35">
                <h2>MAITREYA BUDDHA</h2>
                <h2>IN GESTURE OF</h2>
                <h2>FEARLESSNESS</h2>
                <h2>( ABHAYA MUDRA )</h2>
              </div>

              <div className="icon-group mb-35">
                <div>
                  <div className="custom-icon center">
                    <FaRegHeart className="icon-vertical-middle" />
                  </div>
                  <div className="text-center">0</div>
                </div>
                <div>
                  <div className="custom-icon center">
                    <FaShareAlt className="icon-vertical-middle" />
                  </div>
                  <div className="text-center">120</div>
                </div>

                <div>
                  <div className="custom-icon center">
                    <FaRegEye className="icon-vertical-middle" />
                  </div>
                  <div className="text-center">27</div>
                </div>
              </div>

              <div className="details mb-35">
                <p>Dynasty : Ahichchhatra</p>
                <p>Period : 200 CE</p>
                <p>Material : Sandstone</p>
                <p>Location : National Museum</p>
              </div>

              <div className="mb-35">
                <p className="fs-16">Description :</p>
                <p className="description">
                  Maitreya, the future Buddha to be, resides in the Tushita
                  heaven as a bodhisattva waiting to redeem humanity. In
                  Buddhism, Maitreya is he eighth Buddha, a successor of the
                  seven, historical Buddhas (sapta-manushi Buddhas). The Digha
                  Nikaya mentions, Maitreya Buddha will be born in Ketumati, in
                  present-day Varanasi, Uttar Pradesh. As a bodhisattva,
                  Maitreya wears a heavily adorned with earings, wristlets,
                  necklace, and an amulet. The
                </p>
              </div>

              <div className="read-more mb-35">
                <FaLongArrowAltRight className="icon" />
                <a href="/" className="text">
                  {" "}
                  READ MORE
                </a>
              </div>

              <div className="custom-btn">
                <button className="btn1">ADD TO COLLECTION</button>
                <button className="btn2">SOUVENIR</button>
              </div>
            </div>
          </div>
          <div className={toggleSideBar ? "flex-item-right center h-100" : "flex-item-right center"}>
            <img className="statue-image" src={logo} />
          </div>


          <div className={toggleSideBar ?"close-open-menu left-0" :"close-open-menu" }  onClick={(e) => handleToggleSideBar(e)}>
          <div className="custom-icon-rect center">
            {
                toggleSideBar ?
                <FaAngleDoubleRight className="icon-vertical-middle" />
                :
                <FaAngleDoubleLeft className="icon-vertical-middle" />
            }
     
          </div>
        </div>
        </div>
      
      {/* </div> */}
    </>
  );
};

export default Statue;
