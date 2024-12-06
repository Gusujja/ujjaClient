
import { Suspense, useEffect } from "react";
import { Routes, Route, useLocation,useNavigate} from "react-router-dom";
import AppNavbar from "./components/AppNavbar/AppNavbar";
import Home from "./pages/Home/Index";
import Classes from "./pages/Classes/Index";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./utility_classes.css";
import "./App.css";
import "./components/GlobalStyle";
import VideoDetails from "./pages/Classes/VideoDetails/VideoDetails";
import Footer from "./components/Footer/Footer";
import ScrollToTopButton from "./components/common/Button/ScrollToTopButton";
import { scrollToSection, scrollToTop } from "./utils/helper";
import Modal from "styled-react-modal";
// import TagManager from "react-gtm-module";
import AdminPortal from "./AdminPortal/Index";
import Login from "./AdminPortal/AuthPages/Login/Login";
import SignUp from "./AdminPortal/AuthPages/SignUp/SignUp";
import ForgotPassword from "./AdminPortal/AuthPages/ForgotPassword/ForgotPassword";
import UploadVideo from "./AdminPortal/VideosPages/UploadVideo/UploadVideo";
import VideoList from "./AdminPortal/VideosPages/VideoList/VideoList";
import AddCategory from "./AdminPortal/AddCategories/AddCategory/AddCategory";
import EditVideo from "./AdminPortal/VideosPages/EditVideo/editVideo";
import CategoryList from "./AdminPortal/AddCategories/CategoryListPage/CategoryList";
import useGoogleAnalytics from "./hooks/CustomHooks/GtagHook";
import FemalePage from "./pages/FemalePage/FemalePage";
import OverForty from "./pages/OverForty/OverForty"


// const tagManagerArgs = { gtmId: "GTM-ND5H33G7" };
// TagManager.initialize(tagManagerArgs);

const App = () => {

  useGoogleAnalytics();

  const token =   localStorage.getItem('token');
const navigate=useNavigate()
//   useEffect(() => { 
// if(token){
//   return navigate("/")
// }
// else if(!token){
// return navigate("login")
// }
//   }, [token])

const { pathname } = useLocation()
useEffect(() => {
  const regex = /\bsignup\b/;
  let register = regex.test(pathname);
  if (pathname === "/login" || register || pathname === "/") {
    if (token  &&
      pathname !== "/" &&
      pathname !== "/videos" &&
      pathname !== "/videos/:videoId" 
    ) {
   
      return navigate("/admin");
    }
  }
  if (
    !token &&
    pathname !== "/" &&
    pathname !== "/videos" &&
    pathname !== "/femalepage" &&
    pathname !== "/over40" &&
    pathname !== "/videos/:videoId" 
    
  ) {
    return navigate("/login");
  }
}, []);
  
  useEffect(() => {
    scrollToTop();
  }, [pathname]);

  // List of paths where Navbar and Footer shouldn't be displayed
  const noNavFooterRoutes = ["/admin", "/login", "/forgot-password", "/signup", "/uploadvideo", "/videolist", "/addcategory", "/categorylist"];

  const shouldShowNavAndFooter = !noNavFooterRoutes.includes(pathname);

  return (
    <div className="home_page">
      <Suspense fallback={<div>loading....</div>}>
        {/* Conditionally render Navbar */}
        {shouldShowNavAndFooter && (
          <AppNavbar scrollToSection={scrollToSection} />
        )}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/videos" element={<Classes />} />
          <Route path="/videos/:videoId" element={<VideoDetails />} />
          <Route path="/femalepage" element={<FemalePage />} />
          <Route path="/over40" element={<OverForty/>} />
        

          <Route path="/admin" element={<AdminPortal />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/uploadvideo" element={<UploadVideo  />}
           />
             <Route path="/editVideo/:Id" element={<EditVideo />} />
          <Route path="/videolist" element={<VideoList />} />
          <Route path="/categorylist" element={<CategoryList />} />
          <Route path="/addcategory" element={<AddCategory  />} />

          <Route path="*" element={<div>Page not found.</div>} />
        </Routes>
        {/* Conditionally render Footer */}
        {shouldShowNavAndFooter && <Footer />}
      </Suspense>
      <ScrollToTopButton />
      <Modal />
    </div>
  );
}

export default App;
