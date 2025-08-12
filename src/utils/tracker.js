import ReactGA from "react-ga4";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../components/Quiz/firebaseConfig"; // Adjust import path

export const initGA = () => {
  ReactGA.initialize("G-NTYV5E1G2T"); // Your GA Measurement ID
};

export const trackPageView = (url) => {
  ReactGA.send({ hitType: "pageview", page: url });
};

export const logUserDetails = async (page) => {
  try {
    // Send pageview to GA
    trackPageView(page);

    // Fetch IP and location data
    const res = await fetch("https://ipapi.co/json/");
    const data = await res.json();

    const logData = {
      timestamp: serverTimestamp(), // Firestore server timestamp
      pageVisited: page,
      location: `${data.city}, ${data.region}, ${data.country_name}`,
      ip: data.ip,
      deviceInfo: navigator.userAgent,
    };

    // Save to Firestore visitorLogs collection
    await addDoc(collection(db, "visitorLogs"), logData);

    console.log("User logged to Firestore and GA:", logData);
  } catch (error) {
    console.error("Error logging user details:", error);
  }
};
