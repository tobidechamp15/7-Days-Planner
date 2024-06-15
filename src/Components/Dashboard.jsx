import React, { useState, useEffect, useRef } from "react";
import { NavLink, Outlet } from "react-router-dom";

//Assets
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCalendar,
  faHouse,
  faPlus,
  faUser,
  // faChevronRight,
  // faGear,
} from "@fortawesome/free-solid-svg-icons";
import Navbar from "./Navbar";

// import Logout from "./Logout";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  // const [activeDropdown, setActiveDropdown] = useState(null); // Track active dropdown

  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        setSidebarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  // const handleDropdownClick = (index) => {
  //   // Toggle the dropdown when its title is clicked
  //   setActiveDropdown((prev) => (prev === index ? null : index));
  // };

  // const dropdownData = [
  //   {
  //     logo: home,
  //     title: "Home",
  //     items: [
  //       {
  //         item: " Products",
  //         linkTo: "/dashboard/home",
  //       },
  //       {
  //         item: "Add Products",
  //         linkTo: "/dashboard/add-products",
  //       },
  //       {
  //         item: "Delete Products",
  //         linkTo: "/dashboard/delete-products",
  //       },
  //     ],
  //   },
  //   {
  //     icon: faGear,
  //     title: "Profile Settings",
  //     items: [
  //       {
  //         item: "Change Password",
  //         linkTo: "/dashboard/changePassword",
  //       },
  //       {
  //         item: "Upgrade Profile",
  //         linkTo: "/dashboard/upgradeProfile",
  //       },
  //     ],
  //   },
  // ];

  return (
    <section className="w-100">
      <Navbar />
      <div className="p-5">
        <section
          className={`flex w-[255px]   flex-col side-shadow z-50 fixed transition-all ease-in-out duration-700 ${
            sidebarOpen ? "left-0  " : "xsm:-left-[255px]"
          }`}
          ref={sidebarRef}
          id="side-bar"
        >
          <div className="w-100 flex flex-col self-center gap-2 h-full pt-[120px] pb-[60px] mt-3 bgColorGrad rounded-tr-[16px]">
            <div className="flex flex-col w-100 h-full justify-around  px-4">
              <section className="flex flex-col gap-3 ">
                <NavLink
                  to="/dashboard/home"
                  className={({ isActive }) =>
                    `${isActive ? "active-tab" : "inActive-tabs"}  sideBar-tabs
              `
                  }
                >
                  <FontAwesomeIcon icon={faHouse} />
                  Home
                </NavLink>
                <NavLink
                  to="/dashboard/new-plan"
                  className={({ isActive }) =>
                    `${
                      isActive ? "active-tab " : "inActive-tabs"
                    } sideBar-tabs `
                  }
                >
                  <FontAwesomeIcon icon={faPlus} />
                  New Plan
                </NavLink>
                <NavLink
                  to="/dashboard/plans"
                  className={({ isActive }) =>
                    `${isActive ? "active-tab" : "inActive-tabs"} sideBar-tabs`
                  }
                >
                  <FontAwesomeIcon icon={faCalendar} />
                  Plans
                </NavLink>
                <NavLink
                  to="/dashboard/Profile"
                  className={({ isActive }) =>
                    `${isActive ? "active-tab" : "inActive-tabs"} sideBar-tabs`
                  }
                >
                  <FontAwesomeIcon icon={faUser} />
                  Profile
                </NavLink>

                <div>
                  {/* <ul className="list mt-2 list-non w-full flex gap-2 flex-col items-center  transition-all ease-in-out duration-500">
                {dropdownData.map((dropdown, index) => (
                  <li
                    className="w-full flex flex-col hm text-white  hover:text-white "
                    key={index}
                  >
                    <div
                      className={`${
                        activeDropdown === index
                          ? "bg text-white w-100 rounded "
                          : ""
                      } flex  items-center justify-between w-full  transition-all ease-in-out duration-500 cursor-pointer`}
                      onClick={() => handleDropdownClick(index)}
                    >
                      <span
                        className={
                          activeDropdown === index
                            ? "b text-white w-100 p-2 cursor-pointer  flex items-center gap-2"
                            : "p-2 cursor-pointer flex gap-2 items-center "
                        }
                      >
                        {dropdown.logo ? (
                          <img src={dropdown.logo} alt="" />
                        ) : null}
                        {
                          <FontAwesomeIcon
                            icon={dropdown.icon}
                            className="text-xl"
                          />
                        }
                        {dropdown.title}
                      </span>
                      <FontAwesomeIcon
                        icon={faChevronRight}
                        className={`icon ${
                          activeDropdown === index
                            ? "rotate p-2  text-white text-justify"
                            : " p-2 "
                        }`}
                      />
                    </div>
                    <div
                      className={`${
                        activeDropdown === index
                          ? "dropdown-content dropdown-open flex flex-col p-[5%]"
                          : "dropdown-content dropdown-transition flex flex-col"
                      }`}
                    >
                      {dropdown.items.map((item, itemIndex) => (
                        <NavLink
                          key={itemIndex}
                          to={item.linkTo}
                          className="p-3"
                        >
                          {item.item}
                        </NavLink>
                      ))}
                    </div>
                  </li>
                ))}
              </ul> */}
                </div>
              </section>
            </div>
          </div>
        </section>
        <section className=" flex flex-col  md:ms-[255px] ">
          <div className="flex w-100 b md:py-10 py-3 items-center justify-between top-bar px-9">
            <FontAwesomeIcon
              icon={faBars}
              onClick={toggleSidebar}
              className="me-3 md:hidden  cursor-pointer text-3xl text-blue-700 hover:fa-spin"
              spin
            />
            <span className="text-xl xs:hidden font-bold"></span>
            <div className="flex gap-2 items-center justify-center">
              <span className="text-white">
                Welcome
                <span className="font-bold text-gray-200 text-xl  "></span>
              </span>
            </div>
          </div>
          <Outlet />
        </section>
      </div>
    </section>
  );
};

export default Dashboard;
