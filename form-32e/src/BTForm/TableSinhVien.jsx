import React, { Component } from "react";
import { connect } from "react-redux";
class TableSinhVien extends Component {
  renderSinhVien = () => {
    const { mangSinhVien } = this.props;
    return mangSinhVien.map((sinhVien, index) => {
      return (
        <tr key={index}>
          <td>{sinhVien.maSV}</td>
          <td>{sinhVien.hoTen}</td>
          <td>{sinhVien.soDienThoai}</td>
          <td>{sinhVien.email}</td>
          <td>
            <button
              className="btn btn-success mr-2"
              onClick={() => {
                this.props.dispatch({
                  type: "EDIT",
                  payload: sinhVien.id,
                });
              }}
            >
              Chỉnh sửa
            </button>
            <button
              className="btn btn-danger"
              onClick={() => {
                this.props.dispatch({
                  type: "DELETE",
                  payload: sinhVien.id,
                });
              }}
            >
              Xóa
            </button>
          </td>
        </tr>
      );
    });
  };
  render() {
    console.log(this.props.mangSinhVien);
    return (
      <div className="container">
        <table className="table">
          <thead>
            <tr className="bg-dark text-white">
              <th>MÃ SV</th>
              <th>Họ Tên</th>
              <th>Số Điện Thoại</th>
              <th>Email</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{this.renderSinhVien()}</tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    mangSinhVien: state.QuanLyFormReducer.mangSinhVien,
  };
};
export default connect(mapStateToProps, null)(TableSinhVien);
