import React from "react";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <div
      style={{
        // objectFit:"hover",
        position: "revert-layer",
        background: " #ADD8E6",
        width: "300px",
        height: "100%",
        padding: "101px 0px 17px 30px ",
        scrollbarColor:"red",
      }}
    >
      
      <h2 style={{ color: "white" }}>Student Details</h2>
      <ul style={{ fontSize: "22px" }}>
        <li>
          <div>
            <Link
              to="/StudentCreate"
              style={{ textDecoration: "none", fontSize: "22px" }}
            >
              Student Create
            </Link>
          </div>
        </li>
        <li>
          <Link
            to="/Students"
            style={{ textDecoration: "none", fontSize: "22px" }}
          >
            Students
          </Link>
        </li>
      </ul>
      <h2 style={{ color: "white" }}>Course Category</h2>
      <ul style={{ fontSize: "22px" }}>
        <li>
          <Link
            to="/CreateCategory"
            style={{ textDecoration: "none", fontSize: "22px" }}
          >
            {" "}
            Create Category
          </Link>
        </li>
        <li>
          <Link
            to="/CategoryList"
            style={{ textDecoration: "none", fontSize: "22px" }}
          >
            CategoryList
          </Link>
        </li>
      </ul>
      <h2 style={{ color: "white" }}>Course Details</h2>
      <ul style={{ fontSize: "22px" }}>
        <li>
          <Link
            to="/CreateCourse"
            style={{ textDecoration: "none", fontSize: "22px" }}
          >
            {" "}
            Create Course
          </Link>
        </li>
        <li>
          <Link
            to="/Courses"
            style={{ textDecoration: "none", fontSize: "22px" }}
          >
            {" "}
            Courses
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
