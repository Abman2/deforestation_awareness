import ReactGA from "react-ga4";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../components/Quiz/firebaseConfig";

export const initGA = () => {
  ReactGA.initialize("G-NTYV5E1G2T");
};

export const trackPageView = (url) => {
  ReactGA.send({ hitType: "pageview", page: url });
};

export const logUserDetails = async (page) => {
  try {
    trackPageView(page);

    const res = await fetch("https://ipapi.co/json/");
    const data = await res.json();

    const logData = {
      timestamp: serverTimestamp(),
      pageVisited: page,
      location: `${data.city}, ${data.region}, ${data.country_name}`,
      ip: data.ip,
      deviceInfo: navigator.userAgent,
    };

    await addDoc(collection(db, "visitorLogs"), logData);
    console.log("Logged visitor data to Firestore:", logData);
  } catch (error) {
    console.error("Error logging user details:", error);
  }
};
