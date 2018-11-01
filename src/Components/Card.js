import React, { Component } from "react";

const Card = ({ title, text, previewUrl }) => (
  <div className="col-md-4" >
    <div className="card " style={{ width: "18rem", "textAlign": "centre" }}>
      <img
        className="card-img-top img-responsive"
        src={previewUrl}
        alt="Card image cap"
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
      </div>

      <span>
        <span className = "span-margin">
          <a href="#">
            <i class="fa fa-facebook" aria-hidden="true" />{" "}
          </a>
        </span>
        <span className = "span-margin">
          <a href="#">
            <i class="fa fa-twitter" aria-hidden="true" />{" "}
          </a>
        </span>
        <span className = "span-margin">
          <a href="#">
            <i class="fa fa-google-plus" aria-hidden="true" />{" "}
          </a>
        </span>
        <span className = "span-margin">
          <a href="#">
            <i class="fa fa-linkedin" aria-hidden="true" />{" "}
          </a>
        </span>
        <span className = "span-margin">
          <a href="#">
            <i class="fa fa-instagram" aria-hidden="true" />{" "}
          </a>
        </span>
      </span>
    </div>
  </div>
);

export default Card;
