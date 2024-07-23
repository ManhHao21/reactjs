import React from "react";
import { useSelector } from "react-redux";

const Header = (props) => {
  const { setEdit } = props;

  const setEditHandle = () => {
    setEdit(true);
  };

  const user = useSelector((state) => state.user);

  return (
    <>
      <header
        className="info-container container d-flex flex-column"
        style={{
          background: `linear-gradient(180deg, ${user.color} 2%, ${user.color} 65%, ${user.color} 100%)`,
        }}
      >
        <div className="d-flex justify-content-end">
          <button
            className="info-edit btn btn-primary btn-sm"
            onClick={setEditHandle}
          >
            Edit
          </button>
        </div>
        <img
          className="info-image"
          src={user.avatar}
          width="100px"
          height="100px"
          alt="User Avatar"
        />
        <div className="info-name fw-bold fs-3">{user.name}</div>
        <div className="info-age fw-light">{user.age} years old</div>
        <div className="info-about fw-light">{user.about}</div>
      </header>
    </>
  );
};

export default Header;
