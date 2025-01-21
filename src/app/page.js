"use client";
import ChatComponent from "./components/ChatComponent";
import styles from "./page.module.css";
require("dotenv").config();

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.chatbotContainer}>
          <ChatComponent />
        </div>
      </main>
    </div>
  );
}
