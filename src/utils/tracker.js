import ReactGA from "react-ga4";

export const initGA = () => {
    ReactGA.initialize("G-NTYV5E1G2T"); // Replace with your GA Measurement ID
};

export const trackPageView = (url) => {
    ReactGA.send({ hitType: "pageview", page: url });
};

export const logUserDetails = async (page) => {
    try {
        const res = await fetch("https://ipapi.co/json/");
        const data = await res.json();

        const logData = {
            timestamp: new Date().toISOString(),
            pageVisited: page,
            location: `${data.city}, ${data.region}, ${data.country_name}`,
            ip: data.ip,
            deviceInfo: navigator.userAgent
        };

        // Get old logs
        const logs = JSON.parse(localStorage.getItem("userLogs") || "[]");
        logs.push(logData);

        // Save updated logs
        localStorage.setItem("userLogs", JSON.stringify(logs));

        console.log("User logged:", logData);
    } catch (error) {
        console.error("Error getting user details:", error);
    }
};
