import {
  MdOutlineDashboard,
  MdFolder,
  MdFlag,
  MdCheckCircle,
  MdError,
} from "react-icons/md";
import "../assets/style/Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <button className="projectButton">Project 01</button>

      <ul className="sidebarMenu">
        <li className="menuItem">
          <MdOutlineDashboard className="menuIcon" />
          Overview
        </li>
        <li className="menuItem">
          <MdFolder className="menuIcon" />
          Project Repository
        </li>
        <li className="menuItem active">
          <MdFlag className="menuIcon" />
          Milestones
        </li>
        <li className="menuItem">
          <MdCheckCircle className="menuIcon" />
          Runs & Results
        </li>
        <li className="menuItem">
          <MdError className="menuIcon" />
          Issues
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
