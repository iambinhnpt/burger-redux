import React, { Component } from "react";
import BurgerComponent from "./BurgerComponent";
import MenuComponent from "./MenuComponent";
import { connect } from "react-redux";

class BaiTapBurger extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-6">
            <BurgerComponent burger={this.props.burger} />
          </div>
          <div className="col-6">
            <MenuComponent
              menu={this.props.menu}
              burger={this.props.burger}
              total={this.props.total}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    burger: state.BurgerReducer.burger,
    menu: state.BurgerReducer.menu,
    total: state.BurgerReducer.total,
  };
};
export default connect(mapStateToProps)(BaiTapBurger);
