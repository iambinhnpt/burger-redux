import React from "react";

export default function ItemMenu() {
  return (
    <tr>
      <td>salad</td>
      <td>
        <button className="btn btn-success">+</button>
        <button className="btn btn-danger">-</button>
      </td>
      <td>10</td>
    </tr>
  );
}
