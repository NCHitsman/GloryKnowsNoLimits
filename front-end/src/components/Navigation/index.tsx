import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import ProfileButton from "./ProfileButton";
import { RootState } from "../../store";
import "./Navigation.css";
import LoginFormPage from "../LoginFormPage/index";
import { UserType } from "../../CustomTypes";

interface Props {
  isLoaded: boolean;
  sessionUser: UserType | null;
}

function Navigation({ isLoaded, sessionUser }: Props) {
  let sessionLinks;
  if (sessionUser) {
    sessionLinks = <ProfileButton />;
  } else {
    sessionLinks = (
      <div className="LogOutSignUpButtonCont">
        <NavLink className="LogOutSignUpButton" to="/login">
          LOG IN
        </NavLink>
        <NavLink className="LogOutSignUpButton" to="/signup">
          SIGN UP
        </NavLink>
      </div>
    );
  }

  return (
    <div className="NavCont">
      <div className="HomeLinkCont">
        <NavLink className="HomeLink" exact to="/">
          Planetary Empires
        </NavLink>
      </div>
      <div className="NavLinkParentCont">
        <div className="NavLinkCont Features">
          <NavLink
            onClick={(e) => e.preventDefault()}
            className="NavLink UnderConstruction"
            to="/features"
          >
            Features
          </NavLink>
        </div>
        <div className="NavLinkCont">
          <div
            className="NavLink"
            onClick={() =>
              window.open(
                "https://img.fireden.net/tg/image/1559/17/1559178030443.pdf"
              )
            }
          >
            How To Play
          </div>
        </div>
        <div className="NavLinkCont">
          <NavLink
            onClick={(e) => e.preventDefault()}
            className="NavLink UnderConstruction"
            to="/mapGallery"
          >
            Map Gallery
          </NavLink>
        </div>
        <div className="NavLinkCont">
          <NavLink
            onClick={(e) => e.preventDefault()}
            className="NavLink UnderConstruction"
            to="/faq"
          >
            FAQ
          </NavLink>
        </div>
        <div className="NavLinkCont">
          <NavLink className="NavLink" to="/about">
            About Me
          </NavLink>
        </div>
      </div>
      {isLoaded && sessionLinks}
    </div>
  );
}

export default connect((state: RootState) => ({
  sessionUser: state.session.user,
}))(Navigation);
