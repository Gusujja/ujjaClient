// hooks/useGoogleAnalytics.js
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useGoogleAnalytics = () => {
    const location = useLocation();

    useEffect(() => {
        if (typeof window.gtag === "function") {
            window.gtag('config', 'G-HLQR7VSHLD', {
                page_path: location.pathname,
            });
        }
    }, [location]);
};

export default useGoogleAnalytics;
