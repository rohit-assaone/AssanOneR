import { NavLink } from "react-router-dom";
import { FaBars, FaHome, FaUser } from "react-icons/fa";

import { BiSearch } from "react-icons/bi";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";

import './sidebar.css'
const routes = [
  {
    path: "/",
    name: "Dashboard",
    icon: <FaHome style={{color: "white"}}/>,
  },
  {
    path: "/sellinsurance",
    name: "Sell Insurance",
    icon: <FaUser />,
  },
 
  {
    path: "/savedquotes",
    name: "Saved quotes",
    icon: <FaUser />,
  },
 
  {
    path: "/renewal",
    name: "Renewal",
    icon: <FaUser />,
  },
  {
    path: "/propspects",
    name: "propspects",
    icon: <FaUser />,
  },
  {
    path: "/customers",
    name: "customers",
    icon: <FaUser />,
  },
  {
    path: "/claims",
    name: "claims",
    icon: <FaUser />,
  },
  {
    path: "/training",
    name: "training",
    icon: <FaUser />,
  },
 
];

const SideBar = ({ children }) => {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);

  };
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "100%",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="below-nav flex" >

          <motion.div
            animate={{
              width: isOpen ? "300px" : "45px",

              transition: {
                duration: 0.5,
                type: "spring",
                damping: 10,
              },
            }}
            className={`sidebar text-white`}
            style={{borderRadius: "0 15px 15px 0"}}
          >

          <div className="top_section">
            

            <div className="bars">
              <FaBars onClick={toggle} />
            </div>
          </div>


            <div className="search">
                <div className="search_icon">
                  <BiSearch />
                </div>
                <AnimatePresence className=''>
                  {isOpen && (
                    <motion.input
                      initial="hidden"
                      animate="show"
                      exit="hidden"
                      variants={inputAnimation}
                      type="text"
                      placeholder="Search"
                  
                    />
                  )}
                </AnimatePresence>
            </div>
            <section className="routes md:mt-5 md:grid md:gap-y-3">
              
              {routes.map((route, index) => {
                if (route.subRoutes) {
                  return (
                    <SidebarMenu
                      setIsOpen={setIsOpen}
                      route={route}
                      showAnimation={showAnimation}
                      isOpen={isOpen}
                    />
                  );
                }

                return (
                  <NavLink
                    to={route.path}
                    key={index}
                    className="link"
                    activeClassName = 'active'

                  >
                    <div className="icon">{route.icon}</div>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          variants={showAnimation}
                          initial="hidden"
                          animate="show"
                          exit="hidden"
                          className="link_text"
                        >
                          {route.name}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </NavLink>
                );
              })}
            </section>
          </motion.div>

        <div className={isOpen ? 'children ml-5 w-[75%]' : 'children ml-5 w-[93%]'}>
          {children}
          </div>
      </div>
    </>
  );
};

export default SideBar;
