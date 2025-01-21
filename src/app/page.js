"use client";
import ChatComponent from "./components/ChatComponent";
import FrontPageComponent from "./components/FrontPageComponent";
import Navbar from "./components/NavBar";
import styles from "./page.module.css";
require("dotenv").config();

export default function Home() {
  return (
    <>
      <div className={styles.page}>
        <Navbar/>
        <FrontPageComponent />
      </div>
      <div className={styles.chatbotContainer}>
        <ChatComponent />
      </div>
    </>
  );
}
