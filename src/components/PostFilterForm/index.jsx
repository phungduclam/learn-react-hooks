import React, { useState } from "react";
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

  return <div></div>;
}

export default PostFilterForm;
