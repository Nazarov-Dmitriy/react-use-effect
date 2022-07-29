import React from "react";

export default function Spinner() {
  return (
    <>
      <div className="spinner">
        <span className="spinner__animation"></span>
        <span className="spinner__info">Загрузка...</span>
      </div>
    </>
  );
}
