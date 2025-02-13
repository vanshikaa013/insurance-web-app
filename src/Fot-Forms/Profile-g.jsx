import React from "react";
import "./Profile.css";
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineBalance, MdOutlinePayment } from "react-icons/md";
import { IoWifiSharp } from "react-icons/io5";
import { FaCar } from "react-icons/fa";
import { GrChat } from "react-icons/gr";
import { FiUser } from "react-icons/fi";
import { CiStar } from "react-icons/ci";
import { FaUserGroup } from "react-icons/fa6";
import { LuLogOut } from "react-icons/lu";

const Profile = () => {
  return (
    <>
      <div className="Profile">
        <div className="background w-100">
          <div className="d-flex align-items-center justify-content-center">
            <div className="text-center mt-5 p-1 png">
              <img
                src="https://s3-alpha-sig.figma.com/img/50a8/98dd/34aefdddf85a34a3cd21dbfdb8abd639?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QJngum8hGzJwW0~NrFZnTd8EksLzZKk2~RYR-p8hpsoLyxTu5u8qysEyQoVvjmdKoFydngAaiKcT~knN9ogAf~ARXr3jc1Tq5bKfPeOCaQ-7Ay6e8TOduURG0zoTnKKanaKx3iYoPx9BqIDRXyRlvCkoafu3RVEij-ox0TsNKT-o1aZZ2MYjZfy2~JbBklfhPfl32Z0X0cGz~NxCWP~4G-eHmI9OyO5yLce1ucKBwVqY90oq87IuaN9Lyb03iW7Z2f7oKmStotJkEEf0WsobQJ3~9LcmLRA8I75XSse6Ptq1j1f6KgLI-NoJPTb6Xv95sOgkQZ1H1x440TZkKVrTHQ__"
                alt=""
              />
            </div>
          </div>
          <div className="sohail text-center">
            <p className="mt-3">
              Sohail Shah <br />{" "}
              <span>
                <h6>73542903339</h6>
              </span>
            </p>
          </div>
          <div className="text-center">
            <button className=" btn btn shadow  mycolor">
              View profile
            </button>
          </div>
          </div>
          </div>
          {/*  */}
          <div className="User rounded-4 container shadow mt-4">
            <div className="d-flex align-items-center justify-content-between">
              <div className="words p-3">
                <h6 className="m-1 mx-2">
                  <span
                    style={{ backgroundColor: "#FBF2ED", borderRadius: "50%" }}
                    className="p-2 icn"
                  >
                    <MdOutlinePayment
                      style={{ color: " #D87A49", fontSize: "25px" }}
                    />
                  </span>
                  Payments
                </h6>
                <p
                  style={{ fontSize: "12px", fontWeight: "400" }}
                  className=" text-secondary mx-5"
                >
                  Transaction history
                </p>
              </div>
              <div className="icon text-primary">
                <IoIosArrowForward />
              </div>
            </div>
            {/* 2 */}
            <div className="d-flex align-items-center justify-content-between">
              <div className="words p-3">
                <h6 className="m-1 mx-2">
                  <span
                    style={{ backgroundColor: "#E9F2FF", borderRadius: "50%" }}
                    className="p-2 icn"
                  >
                    <IoWifiSharp
                      style={{ color: "#5692DB", fontSize: "25px" }}
                    />
                  </span>
                  Offline Policies
                </h6>
                <p
                  style={{ fontSize: "12px", fontWeight: "400" }}
                  className=" text-secondary mx-5"
                >
                  Access your policies without internet
                </p>
              </div>
              <div className="icon text-primary">
                <IoIosArrowForward />
              </div>
            </div>
            {/* 3 */}
            <div className="d-flex align-items-center justify-content-between">
              <div className="words p-3">
                <h6 className="m-1 vehicle mx-2">
                  <span
                    style={{ backgroundColor: "#F7DBDF", borderRadius: "50%" }}
                    className="p-2 icn"
                  >
                    <FaCar style={{ color: "#BE5365", fontSize: "25px" }} />
                  </span>
                  Vehicle inspection{" "}
                </h6>
                <p
                  style={{ fontSize: "12px", fontWeight: "400" }}
                  className=" text-secondary mx-5"
                >
                  For shop insurance, change in policy or claim{" "}
                </p>
              </div>
              <div className="icon text-primary">
                <IoIosArrowForward />
              </div>
            </div>
            {/* 4 */}
            <div className="d-flex align-items-center justify-content-between">
              <div className="words p-3">
                <h6 style={{ fontSize: "15px" }} className="m-1 mx-2">
                  <span
                    style={{ backgroundColor: "#D5F5CD", borderRadius: "50%" }}
                    className="p-2 icn"
                  >
                    <GrChat style={{ color: "#84C31F", fontSize: "25px" }} />
                  </span>
                  Communication <span className="name" >preferences</span>
                </h6>
                <p
                  style={{ fontSize: "12px", fontWeight: "400" }}
                  className=" text-secondary mx-5"
                >
                  Choose how we communicate with you{" "}
                </p>
              </div>
              <div className="icon text-primary">
                <IoIosArrowForward />
              </div>
            </div>
            {/* 5 */}
            <div className="d-flex align-items-center justify-content-between">
              <div className="words p-3">
                <h6 className="m-1 vehicle mx-2">
                  <span
                    style={{ backgroundColor: "#EEE4F5", borderRadius: "50%" }}
                    className="p-2 icn"
                  >
                    <FiUser style={{ color: "#B17DD4", fontSize: "25px" }} />
                  </span>
                  Know your advisor{" "}
                </h6>
                <p
                  style={{ fontSize: "12px" }}
                  className=" text-secondary mx-5"
                >
                  Find if you spoke to genuine advisor from ShopInsurance{" "}
                </p>
              </div>
              <div className="icon text-primary">
                <IoIosArrowForward />
              </div>
            </div>
            {/* 6 */}
            <div className="d-flex align-items-center justify-content-between">
              <div className="words p-3">
                <h6 className="m-1 mx-2">
                  <span
                    style={{ backgroundColor: "#FDEEDE", borderRadius: "50%" }}
                    className="p-2 icn"
                  >
                    <CiStar style={{ color: "#F5B355", fontSize: "25px" }} />
                  </span>
                  Rate us{" "}
                </h6>
                <p
                  style={{ fontSize: "12px", fontWeight: "400" }}
                  className=" text-secondary mx-5"
                >
                  How did you like ShopInsurance app{" "}
                </p>
              </div>
              <div className="icon text-primary">
                <IoIosArrowForward />
              </div>
            </div>
            {/* 7 */}
          </div>

          {/* out */}

          <div className="container">
            <div className="d-flex align-items-center justify-content-between mt-3">
              <div className="words p-3">
                <h5 style={{ fontSize: "16px" }} className="m-1 bf mx-2">
                  <span
                    style={{ backgroundColor: "#D9E0EB", borderRadius: "50%" }}
                    className="p-2 icns icns"
                  >
                    <MdOutlineBalance
                      className="h3"
                      style={{ color: "#000000", fontSize: "25px" }}
                    />
                  </span>
                  Legal info{" "}
                </h5>
              </div>
              <div className="icon text-primary">
                <IoIosArrowForward />
              </div>
            </div>
            {/* out */}
            <div className="d-flex align-items-center justify-content-between mt-3">
              <div className="words p-3">
                <h5 style={{ fontSize: "16px" }} className="m-1 bf mx-2">
                  <span
                    style={{ backgroundColor: "#D9E0EB", borderRadius: "50%" }}
                    className="p-2 icns"
                  >
                    <FaUserGroup
                      className="h3"
                      style={{ color: "#000000", fontSize: "25px" }}
                    />
                  </span>
                  About{" "}
                </h5>
              </div>
              <div className="icon text-primary">
                <IoIosArrowForward />
              </div>
            </div>
            {/* out */}
            <div className="d-flex align-items-center justify-content-between mt-3">
              <div className="words p-3">
                <h5 style={{ fontSize: "16px" }} className="m-1 bf mx-2">
                  <span
                    style={{ backgroundColor: "#D9E0EB", borderRadius: "50%" }}
                    className="p-2 icns"
                  >
                    <LuLogOut style={{ color: "#000000", fontSize: "25px" }} />
                  </span>
                  Logout{" "}
                </h5>
              </div>
              <div className="icon text-primary">
                <IoIosArrowForward />
              </div>
            </div>
            {/* out */}
          </div>
        {/* </div>
      </div> */}
    </>
  );
};

export default Profile;
