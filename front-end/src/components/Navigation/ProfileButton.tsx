import React from "react";
import { useHistory } from "react-router-dom";
import * as sessionActions from "../../store/session";
import "./Navigation.css";
import { useAppDispatch } from "../../store";
import { clearMaps } from "../../store/maps";
import { clearAllSystems } from "../../store/systems";

function ProfileButton() {
  const history = useHistory();
  const dispatch = useAppDispatch();

  const logout = (event: React.MouseEvent) => {
    event.preventDefault();
    dispatch(clearAllSystems());
    dispatch(clearMaps());
    dispatch(sessionActions.logout()).then(() => history.push("/"));
  };

  return (
    <div className="LogOutSignUpButtonCont">
      <button className="LogOutSignUpButton" onClick={logout}>
        LOG OUT
      </button>
    </div>
  );
}

export default ProfileButton;
