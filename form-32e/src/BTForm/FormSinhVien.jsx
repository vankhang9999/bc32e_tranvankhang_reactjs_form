import React, { Component } from "react";
import { connect } from "react-redux";

class FormSinhVien extends Component {
  state = {
    values: {
      maSV: "",
      hoTen: "",
      email: "",
      soDienThoai: "",
    },
    errors: {
      maSV: "",
      hoTen: "",
      email: "",
      soDienThoai: "",
    },
  };
  handleBlur = (event) => {
    const {
      name,
      validationMessage,
      title,
      validity: { valueMissing, tooShort, patternMismatch },
    } = event.target;
    let mess = "";
    if (valueMissing) {
      mess = `${title} Không được bỏ trống!`;
    }
    if (patternMismatch) {
      mess = `${title} Không đúng định dạng!!`;
    }
    this.setState({
      errors: {
        ...this.state.errors,
        [name]: mess,
      },
    });
  };
  handleState = (e) => {
    let tagInput = e.target;
    let { name, value } = tagInput;
    this.setState({
      values: {
        ...this.state.values,
        [name]: value,
      },
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.dispatch({
      type: this.props.selectedUser ? "UPDATE_USER" : "ADD",
      payload: this.state.values,
    });
    this.setState({
      values: {
        maSV: "",
        hoTen: "",
        email: "",
        soDienThoai: "",
      },
    });
  };
  static getDerivedStateFromProps = (nextProps, currentState) => {
    console.log(nextProps, currentState);
    if (
      nextProps.selectedUser &&
      nextProps.selectedUser.id !== currentState.values.id
    ) {
      currentState.values = nextProps.selectedUser;
    }
    return currentState;
  };
  render() {
    const { maSV, hoTen, email, soDienThoai } = this.state.values;
    return (
      <div className="container">
        <div className="card text-left">
          <div className="card-header bg-dark text-white">
            <h3>Thông tin sinh viên</h3>
          </div>
          <div className="card-body">
            <form onSubmit={this.handleSubmit}>
              <div className="row">
                <div className="from-group col-6">
                  <span>Mã SV</span>
                  <input
                    required
                    name="maSV"
                    title="Mã SV"
                    type="text"
                    className="form-control"
                    value={maSV}
                    onChange={this.handleState}
                    onBlur={this.handleBlur}
                  />
                  <p className="text-danger">{this.state.errors.maSV}</p>
                </div>
                <div className="from-group col-6">
                  <span>Họ Tên</span>
                  <input
                    required
                    name="hoTen"
                    title="Họ Tên"
                    type="text"
                    className="form-control"
                    value={hoTen}
                    onChange={this.handleState}
                    onBlur={this.handleBlur}
                  />
                  <p className="text-danger">{this.state.errors.hoTen}</p>
                </div>
              </div>
              <div className="row">
                <div className="from-group col-6">
                  <span>Số Điện Thoại</span>
                  <input
                    required
                    name="soDienThoai"
                    title="Số Điện Thoại"
                    type="text"
                    className="form-control"
                    value={soDienThoai}
                    onChange={this.handleState}
                    onBlur={this.handleBlur}
                  />
                  <p className="text-danger">{this.state.errors.soDienThoai}</p>
                </div>
                <div className="from-group col-6">
                  <span>Email</span>
                  <input
                    required
                    name="email"
                    title="Email"
                    type="text"
                    className="form-control"
                    value={email}
                    onChange={this.handleState}
                    onBlur={this.handleBlur}
                  />
                  <p className="text-danger">{this.state.errors.email}</p>
                </div>
              </div>
              <div className="row mt-2">
                <div className="col-md-12 text-left">
                  <button
                    type="submit"
                    className={`btn btn-success ${
                      !this.props.selectedUser ? "" : "d-none"
                    }`}
                  >
                    Thêm Sinh Viên
                  </button>
                  <button
                    type="submit"
                    className={`ml-2 btn btn-primary ${
                      this.props.selectedUser ?? "d-none"
                    }`}
                  >
                    Cập Nhật
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state.QuanLyFormReducer,
  };
};
export default connect(mapStateToProps)(FormSinhVien);
