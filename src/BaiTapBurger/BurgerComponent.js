import React, { Component } from "react";

export default class BurgerComponent extends Component {
  renderBread = () => {
    let { burger } = this.props;
    let content = [];
    for (let mid in burger) {
      for (let i = 0; i < burger[mid]; i++) {
        content.push(<div className={mid}></div>);
      }
    }
    return content;
  };

  render() {
    return (
      <div>
        <h1>Cửa hàng burger Bình Bình Vui Vẻ</h1>
        <div>
          <div className="breadTop"></div>
          {this.renderBread()}
          <div className="breadBottom"></div>
        </div>
      </div>
    );
  }
}
