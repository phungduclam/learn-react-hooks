import React, { useState, useRef } from "react";
import PropTypes from "prop-types";

PostFilterForm.propTypes = {
  onSubmit: PropTypes.func,
};

PostFilterForm.defaultPro = {
  onSubmit: null,
};

function PostFilterForm(props) {
  const { onSubmit } = props;
  const [searchTerm, setSearchTerm] = useState("");

  //useRef giu nguyen gia tri sau moi lan render
  const typingTimeoutRef = useRef(null);
  // console.log(typeof typingTimeoutRef); cau lenh nay se cho bn bt tra ve la 1 object

  function handleSearchTermChange(e) {
    setSearchTerm(e.target.value);
    if (!onSubmit) return;

    //thang nay se duoc tra ve la 1 object va thang typingTimeoutRef se co 1 property la current
    if (typingTimeoutRef.current) {
      //ham nay de clear cai timeout luc truoc di
      //vi du ban nhap xong no chay duoc 200 thi bn lai nhap tiep thi ban phai clear timeout 200 di de ve 0 cho chuan la doi 300
      clearTimeout(typingTimeoutRef.current);
    }

    typingTimeoutRef.current = setTimeout(() => {
      //neu ko co  e.target.value nam phia sau thi no van se chay tu gia tri bn dau duoc khoi tao
      const formValues = { searchTerm: e.target.value };
      onSubmit(formValues);
    }, 800);
  }

  return (
    <form>
      <input type="text" value={searchTerm} onChange={handleSearchTermChange} />
    </form>
  );
}

export default PostFilterForm;
