import React, { useState, useEffect } from "react";
import { MenuOutlined } from "@ant-design/icons";
import Dropdown from "react-bootstrap/Dropdown";
import { NavbarContainer } from "./styles";
import { FlexContainer, fontFamilyMedium, fontFamilyRegular } from "../GlobalStyle";
import { useNavigate, useLocation } from "react-router-dom";
import logoLight from "../../assets/images/VB-logo-black.png"
import logoDark from "../../assets/images/VB-logo-White-new.png"
import ThemeToggle from "../ThemeToggle";
import {useTheme} from "../../hooks/CustomHooks/useTheme";
import ContactModal from "../Footer/ContactModal";
const AppNavbar = ({ scrollToSection }) => {
  const web_Url =
    process.env.NODE_ENV === "production"
      ? process.env.REACT_APP_PRODUCTION_URL
      : process.env.REACT_APP_DEVELOPMENT_URL;
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [filter, setFilter] = useState({ category: "", subCategory: "" });
const [isOpen,setIsOpen]=useState(false)
  const navigate = useNavigate();
  const location = useLocation();
console.log("filter categories",filter.category,filter.subCategory)
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(`${web_Url}category`); // Replace with your backend URL
        if (!response) {
          throw new Error("Failed to fetch categories");
        }
        const data = await response.json();
        setCategories(data);

        const categoryObj = data.find((cat) => cat.category === filter.category);
        setSubcategories(categoryObj ? categoryObj.subcategories : []);
      } catch (err) {
      //  console.log("error fetching categories:", err);
      }
    };

    fetchCategories();
  }, [filter.category]);

  // const handleClick = (item) => {
  //   if (item.link) {
  //     if (location.pathname === item.link && item.link === "/") {
  //       scrollToTop(); // Scroll to top if already on the Home page
  //     } else {
  //       navigate(item.link); // Navigate to the link
  //     }
  //   } else if (item.ref) {
  //     if (location.pathname !== "/") {
  //       navigate("/"); // Navigate to Home first if not already there
  //       setTimeout(() => scrollToSection(item.ref), 300); // Wait for navigation and then scroll
  //     } else {
  //       scrollToSection(item.ref); // Scroll directly if already on Home
  //     }
  //   }
  // };

const handleClick = (item) => {
  if (item.label === "Contact Us") {
    setIsOpen(true); // open modal
  } 
  else if (item.label === "Home") {
    // scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" });
  } 
  else if (item.ref) {
    // scroll to section
    const section = document.getElementById(item.ref);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  } 
  else if (item.link) {
    // navigate to another route
    navigate(item.link);
  }
};


const { theme, toggleTheme } = useTheme();



  const NAVBAR_ITEMS = [
    { id: 7, label: "Home", link: "/", ref: "homeSection" },
    // { id: 1, label: "Videos", link: "/video" }, // This will trigger the "Videos" dropdown
    { id: 3, label: "Time Table", ref: "timeTableSection" },
    // { id: 4, label: "Membership", ref: "membershipSection" },
    { id: 6, label: "Contact Us", ref: "contactUsSection" },
  ];
  // const PROGRAMS = [
  //   { id: 1, label: "Beginners", link: "beginners" },
  //   { id: 2, label: "Kids", link: "/kids" },
  //   { id: 3, label: "Teenagers", link: "/teenagers" },
  //   { id: 4, label: "Females", link: "/femalepage" },
  //   { id: 5, label: "Over 40", link: "/over40" },
  // ];

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter((prevFilter) => ({ ...prevFilter, [name]: value }));
  };

  return (
    <NavbarContainer>
      <FlexContainer
        className="container app-navbar-container  px-0"
        justifycontent="space-between"
      >
       
       <FlexContainer
          className="app-logo gap-3 cursor-pointer"
          onClick={() => navigate("/")}
          justifycontent="space-between"
          style={{ height: "90px" }}
        >
          <img
            src={theme === "light" ? logoLight : logoDark}
            alt="Logo"
            style={{
              maxHeight: "50%",
              width: "auto",
              objectFit: "contain"
            }}
          />
        </FlexContainer>
        <div className="app-navbar gap-4 d-lg-flex d-none">
          {/* Render Navbar Links */}
          {NAVBAR_ITEMS.map((item,index) => (
            item.label== "Contact Us"?
             <div
              className="app-nav-link cursor-pointer"
              key={index}
              onClick={()=>setIsOpen(true)}
            >
              {item.label}
            </div>
            :( <div
              className="app-nav-link cursor-pointer"
              key={index}
              onClick={() => handleClick(item)}
            >
              {item.label}
            </div>)
           
            ))}
          

          {/* Videos Dropdown */}
          {/* <Dropdown className="videos-dropdown-container">
  <Dropdown.Toggle variant="link" className="videos-dropdown-toggle">
    Videos
  </Dropdown.Toggle>
  <Dropdown.Menu className="videos-dropdown-menu">
    <Dropdown.Item
      className="videos-dropdown-item"
      onClick={() => navigate("/video")}
    >
      All Videos
    </Dropdown.Item>
    {categories.map((category) => (
      <Dropdown key={category.category} className="nested-dropdown">
        <Dropdown.Toggle
          variant="link"
          className="nested-dropdown-toggle videos-dropdown-item"
        >
          {category.category}
        </Dropdown.Toggle>
        <Dropdown.Menu className="subcategories-dropdown-menu">
          {category.subcategories.map((subCategory) => (
            <Dropdown.Item
              key={subCategory}
              className="subcategories-dropdown-item"
              onClick={() => navigate(`/video/${category.category}/${subCategory}`)}
            >
              {subCategory}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    ))}
  </Dropdown.Menu>
</Dropdown> */}

          {/* Programs Dropdown */}
          {/* <Dropdown className="programs-dropdown-container">
  <Dropdown.Toggle variant="link" className="programs-dropdown-toggle">
    Programs
  </Dropdown.Toggle>
  <Dropdown.Menu className="programs-dropdown-menu">
    {PROGRAMS.map((program) => (
      <Dropdown.Item
        key={program.id}
        onClick={() => navigate(program.link)}
        className="programs-dropdown-item"
      >
        {program.label}
      </Dropdown.Item>
    ))}
  </Dropdown.Menu>
</Dropdown> */}

        </div>
 <ContactModal isOpen={isOpen} onClose={()=>setIsOpen(false)}/> 

        <button
          onClick={handleClick}
          style={{
            padding: "10px 20px",
            borderRadius: "10px",
            background: "none",
            fontFamily: fontFamilyRegular,
          }}
          >
          Call To Book <br />{" "}
          <span style={{ fontFamily: fontFamilyRegular }}>07846997004</span>
        </button>
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
         
          


        {/* <div className="mobile-menu">
  {NAVBAR_ITEMS.map((item, index) => (
    <div key={index} className="py-2">
      {item.ref ? (
        <a
          href={`#${item.ref}`}
          className="block hover:text-primary transition"
        >
          {item.label}
        </a>
      ) : (
        <button
          onClick={() => {
            setIsModalOpen(true);
            setIsMobileMenuOpen(false); // 👈 close dropdown after click
          }}
          className="block hover:text-primary transition"
        >
          {item.label}
        </button>
      )}
    </div>
  ))}
</div> */}


        {/* Videos Mobile View */}

    

        <Dropdown className="d-lg-none d-block">
  <Dropdown.Toggle variant="" id="dropdown-basic" className="navbar-toggle">
            <MenuOutlined style={{ color: "var(--text-color)"}} />
          </Dropdown.Toggle>
          <Dropdown.Menu className="navbar-dropdown-menu">
            {NAVBAR_ITEMS.map((item) =>
              item.label === "Videos" ? (
                <Dropdown key={item.id} className="videos-dropdown">
                  <Dropdown.Toggle
                    variant="link"
                    className="videos-dropdown-toggle"
                  >
                    {item.label}
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="videos-submenu">
                    <Dropdown.Item onClick={() => navigate("/video")}>
                      All Videos
                    </Dropdown.Item>
                    {categories.map((category,index) => (
              <Dropdown key={index} className="category-dropdown">
                        <Dropdown.Toggle
                          variant="link"
                          className="category-dropdown-toggle"
                        >
                          {category.category}
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="subcategory-dropdown-menu">
                          {category.subcategories.map((subCategory) => (
                            <Dropdown.Item
                              key={subCategory}
                              className="subcategory-dropdown-item"
                      onClick={() => navigate(`/video/${category.category}/${subCategory}`)}
                            >
                              {subCategory}
                            </Dropdown.Item>
                          ))}
                        </Dropdown.Menu>
                      </Dropdown>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              ) : (
                <Dropdown.Item key={item.id} onClick={() => handleClick(item)}>
                  {item.label}
                </Dropdown.Item>
              )
            )}

            {/* Programs Dropdown */}
            {/* <Dropdown className="programs-dropdown">
      <Dropdown.Toggle
        variant="link"
        className="programs-dropdown-toggle"
      >
        Programs
      </Dropdown.Toggle>
      <Dropdown.Menu className="programs-submenu">
        {PROGRAMS.map((program) => (
          <Dropdown.Item
            key={program.id}
            className="programs-dropdown-item"
            onClick={() => navigate(program.link)}
          >
            {program.label}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown> */}
          </Dropdown.Menu>
        </Dropdown>

       

      </FlexContainer>
    </NavbarContainer>
  );
};

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);

  if (element) {
    const headerOffset = 120;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};

export default AppNavbar;
