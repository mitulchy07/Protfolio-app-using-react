import React from "react";
import Typical from "react-typical";
import ScrollService from "../../../utilities/ScrollService";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.facebook.com/hasanchowdhuri97" target="_blank">
                <i className="fa fa-facebook-square" />
              </a>
              <a href=" " >
                <i className="fa fa-google-plus-square" />
              </a>
              <a href=" ">
                <i className="fa fa-instagram" />
              </a>
              <a href="https://www.youtube.com/channel/UCMBhfavyhULt1qsipH_Ufsg/" target="_blank">
                <i className="fa fa-youtube-square" />
              </a>
              <a href=" " >
                <i className="fa fa-twitter" />
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'm{" "}
              <span className="highlighted-text">Hasan Chowdhuri</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Fullstack Web Developer",
                    1000,
                    "SEO Developer",
                    1000,
                    "Ui/Ux Designing",
                    1000,
                    "Facebook Marketing",
                    1000,
                    "Youtube Marketing",
                    1000,
                  ]}
                />
              </h1>
            </span>
            <span className="profile-role-tagline">
              My job is building website with frontend and backend operations.
            </span>
          </div>

          <div className="profile-options">
            <button
              className="btn primary-btn"
              onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            >
              {" "}
              Hire Me{" "}
            </button>
            <a href="hasan.pdf" download="Hasan Chowdhuri.pdf">
              <button className="btn highlighted-btn">See My Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
