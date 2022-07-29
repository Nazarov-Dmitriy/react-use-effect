import React from "react";

export default function Details(props) {
  console.log(props);
  return (
    <>
      <div className="wrapper-detailis">
        <img className="desription-img" src={props.avatar} alt="avatar" />
        <div className="desription-detailis">
            <h3 className="detailis-name">Name: {props.name}</h3>
            <p className="detailis-city">City: {props.details.city}</p>
            <p className="detailis-company">Company: {props.details.company}</p>
            <p className="detailis-position">Position: {props.details.position}</p>
        </div>
      </div>
    </>
  );
}
