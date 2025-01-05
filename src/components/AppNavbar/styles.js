import styled from "styled-components";
import {
  fontFamilyRegular,
  mediaDeviceMax,
  pureDark2,
  pureDark3,
} from "../GlobalStyle";

export const whenScreenIs1024AndLess = `@media screen and ${mediaDeviceMax.laptop}`;



export const NavbarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1001;
  background-color: #fff;

 



  .app-navbar {
    display: flex;
    flex-direction: row;
  }

  
 

/* Remove Dropdown Arrow */
.programs-dropdown-toggle::after,
.videos-dropdown-toggle::after,
.nested-dropdown-toggle::after {
  display: none; /* Remove the dropdown arrow */
}

/* Programs, Videos, and Nested Dropdown Toggles */
.programs-dropdown-toggle,
.videos-dropdown-toggle,
.nested-dropdown-toggle {
  font-family: ${fontFamilyRegular};
  font-size: 16px;
  color: ${pureDark3};
  text-decoration: none; /* Remove underline */
  border: none;
  background: none;
  cursor: pointer;
  display: block;
  width: 100%; /* Make it take up the full width */
  text-align: left; /* Align text to the left */
  margin-top: -6px;
}

.programs-dropdown-toggle:hover,
.videos-dropdown-toggle:hover,
.nested-dropdown-toggle:hover {
  color: ${pureDark2}; /* Change color on hover */
}

/* Remove focus outline (blue color) */
.programs-dropdown-toggle:focus,
.videos-dropdown-toggle:focus,
.nested-dropdown-toggle:focus,
.subcategory-dropdown-item:focus,
.category-dropdown-item:focus {
  outline: none; /* Remove the blue outline */
}

/* Programs, Videos, and Nested Dropdown Menus */
.programs-dropdown-menu,
.videos-dropdown-menu,
.subcategories-dropdown-menu {
  background-color: #f9f9f9;
  border: 1px solid ${pureDark2};
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  padding: 0;
  margin-top: 5px;
  border-radius: 0; /* No border-radius to make them look identical */
  z-index: 1000;
}

/* Dropdown Item */
.programs-dropdown-item,
.videos-dropdown-item,
.subcategory-dropdown-item {
  font-family: ${fontFamilyRegular};
  font-size: 14px;
  color: ${pureDark3};
  padding: 10px 15px;
  text-decoration: none; /* Remove underline */
  display: block;
  width: 100%; /* Ensure full width */
  text-align: left; /* Align text to the left */
  cursor: pointer;
}

.programs-dropdown-item:hover,
.videos-dropdown-item:hover,
.subcategory-dropdown-item:hover {
  background-color: ${pureDark2}; /* Highlight background */
  color: #fff;
}

/* Subcategory Nested Dropdown - Same as Videos Dropdown */
.subcategories-dropdown-menu {
margin-top: -17px;
  margin-left: 90px;
  padding-left: 12px;
  border-left: 2px solid ${pureDark3};
}

/* No focus outline or blue color for subcategory items */
.subcategory-dropdown-item:focus {
  outline: none;
}

/* Hover effect for nested subcategory items */
.subcategory-dropdown-item:hover {
  background-color: ${pureDark2}; /* Highlight the entire item */
  color: #fff;
}

/* For Mobile View */
@media screen and ${mediaDeviceMax.laptop} {
  .programs-dropdown-toggle,
  .videos-dropdown-toggle,
  .nested-dropdown-toggle {
    font-size: 14px; /* Adjust font size for mobile */
  }

  .programs-dropdown-menu,
  .videos-dropdown-menu,
  .subcategories-dropdown-menu {
    font-size: 12px; /* Smaller font size in mobile view */
  }

  .programs-dropdown-item,
  .videos-dropdown-item,
  .subcategory-dropdown-item {
    font-size: 14px; /* Adjust font size for mobile */
    padding: 10px 15px;
  }
}



  .app-nav-link {
    color: #000000;
    font-weight: 400;
    font-family: ${fontFamilyRegular};
    text-decoration: none;
    font-size: 16px;
    transition: all 0.2s ease-in-out;

    ${whenScreenIs1024AndLess} {
      font-size: 14px;
    }


    
  }
`;

