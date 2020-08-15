import React, { Component } from "react";
import { connect } from "react-redux";
class MenuComponent extends Component {
  itemMenu = (props) => {
    let { menu, burger } = props;
    return Object.entries(menu).map(([item, price], index) => {
      return (
        <tr key={index}>
          <td>{item}</td>
          <td>
            <button
              className="btn btn-success"
              onClick={() => {
                props.addMid(item, 1);
              }}
            >
              +
            </button>
            <span>{burger[item]}</span>
            <button
              className="btn btn-danger"
              onClick={() => {
                props.addMid(item, -1);
              }}
            >
              -
            </button>
          </td>
          <td>{price}</td>
          <td>{price * burger[item]}</td>
        </tr>
      );
    });
  };
  render() {
    return (
      <div>
        <h1>Chọn thức ăn</h1>
        <table className="table">
          <thead className="font-weight-bold">
            <tr>
              <th>Thức ăn</th>
              <th></th>
              <th>Đơn giá</th>
              <th>Thành tiền</th>
            </tr>
          </thead>
          <tbody>{this.itemMenu(this.props)}</tbody>
          <tfoot>
            <h3>Tổng tiền: {this.props.total}</h3>
            <button
              className="btn btn-success"
              onClick={() => {
                alert(`Vui lòng thanh toán số tiền là ${this.props.total} $`);
              }}
            >
              Thanh Toán
            </button>
          </tfoot>
        </table>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addMid: (item, count) => {
      const action = {
        type: "ADD_MID",
        item,
        count,
      };
      dispatch(action);
    },
  };
};
export default connect(null, mapDispatchToProps)(MenuComponent);
