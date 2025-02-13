import { IoMdNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import "../assets/style/Header.css";

const Header = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="logo">LOGO</div>
        <div className="navButtons">
          <button className="navButton">
            <button className="navButton active">My Activity</button>All
            Projects
          </button>
        </div>
        <div className="navIcons">
          <span className="icon">
            <IoMdNotificationsOutline />
          </span>
          <span className="icon">
            <IoSettingsOutline />
          </span>
          <span className="icon">
            <FaRegUser />
          </span>
          <button className="logoutButton">Logout</button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
