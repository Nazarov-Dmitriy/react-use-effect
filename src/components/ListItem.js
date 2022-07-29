import React from "react";

export default function ListItem(props) {
  const { name, id, handleInfo } = props;
  return (
    <li className="list_item" onClick={() => handleInfo({ name, id })}>
      {name}
    </li>
  );
}
