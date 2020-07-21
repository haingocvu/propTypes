import React from "react";
import PropTypes from "prop-types";

function User(props) {
  const { name, email } = props;
  return (
    <div>
      <div>name: {name}</div>
      <div>email: {email}</div>
    </div>
  );
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

User.defaultProps = {
  name: "Beckham",
  email: "12",
};

export default User;
