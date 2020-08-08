import React, { Component } from "react";
import BurgerComponent from "./BurgerComponent";
import MenuComponent from "./MenuComponent";

export default class BaiTapBurger extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-6">
            <BurgerComponent />
          </div>
          <div className="col-6">
            <MenuComponent />
            <h3>Tổng tiền: 0</h3>
            <button className="btn btn-success">Thanh Toán</button>
          </div>
        </div>
      </div>
    );
  }
}
