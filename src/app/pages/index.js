import FrontPageComponent from "../components/FrontPageComponent";
import Navbar from "../components/NavBar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
        <Navbar/>
      <div className={styles.container}>
        <FrontPageComponent />
      </div>
    </div>
  );
}
