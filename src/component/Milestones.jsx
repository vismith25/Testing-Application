import { IoIosAddCircle } from "react-icons/io";
import { FaFilter } from "react-icons/fa";
import "../assets/style/Milestones.css";

const milestones = [
  {
    name: "Milestone 1",
    type: "Release",
    period: "18 Feb - 20 Aug",
    state: "Active",
    progress: 75,
    warning: "5 days to expire",
  },
  {
    name: "Milestone 1.1",
    type: "Feature",
    period: "15 May - 17 Jun",
    state: "New",
    progress: 0,
  },
  {
    name: "Milestone 2",
    type: "Feature",
    period: "10 May - 20 Jun",
    state: "New",
    progress: 0,
  },
];

import React from "react";

const Milestones = () => {
  return (
    <div className="card">
      <div className="bar">
        <button className="Current">Current Milestones</button>
        <button className="Completed">Completed Milestones</button>
      </div>
      <div className="bar">
        <input type="text" placeholder="Search" className="search" />
        <button className="filter">
          Filter
          <FaFilter className="menuIcon" />
        </button>
        <button className="add">
          <IoIosAddCircle className="menuIcon" />
          Add Milestone
        </button>
      </div>

      <table className="table1">
        <thead>
          <tr>
            <th>Milestone</th>
            <th>Type</th>
            <th>Time Period</th>
            <th>State</th>
            <th>Progress</th>
          </tr>
        </thead>
        <tbody>
          {milestones.map((milestone, index) => (
            <tr key={index}>
              <td>
                {milestone.name}
                {milestone.warning && (
                  <span className="warning"> {milestone.warning}</span>
                )}
              </td>
              <td>{milestone.type}</td>
              <td>{milestone.period}</td>
              <td>{milestone.state}</td>
              <td>
                <progress value={milestone.progress} max="100"></progress>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Milestones;
