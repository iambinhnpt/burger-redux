import React from "react";
import ItemMenu from "./ItemMenu";

export default function MenuComponent() {
  return (
    <div>
      <h1>Chọn thức ăn</h1>
      <table className="table">
        <thead className="font-weight-bold">
          <tr>
            <th>Thức ăn</th>
            <th></th>
            <th>Giá</th>
          </tr>
        </thead>
        <tbody>
          <ItemMenu />
          <ItemMenu />
          <ItemMenu />
        </tbody>
      </table>
    </div>
  );
}
