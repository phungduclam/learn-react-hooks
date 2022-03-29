import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};

TodoForm.defaultProps = {
  onSubmit: null,
};

function TodoForm(props) {
  const { onSubmit } = props;
  const [value, setValue] = useState(" ");

  function HandleChangeValue(e) {
    //ngan chan trinh duyet cua chung t reload khi nhan enter
    setValue(e.target.value);
  }

  function HandleSubmit(e) {
    e.preventDefault();

    if (!onSubmit) return; //neu onSubmit khong phI L 1 function thi kho chay

    const formValues = {
      title: value,
    };
    onSubmit(formValues);
    //sau khi chung ta nhap du lieu va enter thi du lieu trong o text phai mat
    setValue("");
    //reset lai value ban dau la trong
  }

  return (
    //day la chuc nang khi t nhan enter de xac nhan du lieu ng dung
    <form onSubmit={HandleSubmit}>
      <input type="text" value={value} onChange={HandleChangeValue} />
    </form>
  );
}

export default TodoForm;
