import React, { Component } from "react";
import FormSinhVien from "./FormSinhVien";
import TableSinhVien from "./TableSinhVien";

export default class BTFormSinhVien extends Component {
  render() {
    return (
      <div>
        <h3 className="text-danger text-center">Form_SinhVien</h3>
        <FormSinhVien />
        <TableSinhVien />
      </div>
    );
  }
}
