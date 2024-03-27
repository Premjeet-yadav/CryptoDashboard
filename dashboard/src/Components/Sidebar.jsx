import React, { useState } from "react";
import { FiHome, FiSquare } from "react-icons/fi";
import { BiDollar } from 'react-icons/bi'
import { FaBars } from "react-icons/fa";
//import "../App.css";
import './Sidebar.css'

const Sidebar = ({ children }) => {
  const [isopen, setIsOpen] = useState(false);
  const [activeTab,setActiveTab] = useState('')
  const toggle = () => setIsOpen(!isopen);

  const Items = [
    {
      name: "Home",
      icon: <FiHome />,
    },
    {
      name: "About",
      icon: <FiSquare />,
    },
    {
      name: "Prices",
      icon: <BiDollar />,
    }
  ];

  return (
    <>
      <div className="container">
        <div
          style={{ width: isopen ? "150px" : "50px" }}
          className="sidebar"
        >
          <div className="top_section">
            <div
              style={{ marginLeft: isopen ? "50px" : "0px" }}
              className="bars"
            >
              <FaBars onClick={toggle} />
            </div>
          </div>
          {Items.map((item, i) => {
            return (
              <div
                key={i}
                className={`Item ${activeTab === item.name ? "active" : ""}`}
                onClick={() => setActiveTab(item.name)}
              >
                <div className="icon">{item.icon}</div>
                <div
                  style={{ display: isopen ? "block" : "none" }}
                  className="Item_name"
                >
                  {item.name}
                </div>
              </div>
            );
          })}

        </div>
        <main>{children}</main>
      </div>
    </>
  );
};

export default Sidebar;
