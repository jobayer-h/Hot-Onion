import { faArrowCircleRight, faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import why from "../../images/why1.png";
const WhyCard = () => {
  return (
    <div className="col-md-4 col-sm-6">
      <div className="card my-2">
        <img src={why} className="card-img-top" alt="Red Onion" />
        <div className="card-body d-flex">
          <div className="why-icon me-3">
              <div className="icon-container">
                  <FontAwesomeIcon icon={faBell} />
              </div>
          </div>
          <div>
            <h5 className="card-title">Fast Delevery</h5>
            <p className="card-text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure
              accusantium, porro totam alias iste blanditiis?
            </p>
            <a href="/">
              See more <FontAwesomeIcon icon={faArrowCircleRight} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyCard;
