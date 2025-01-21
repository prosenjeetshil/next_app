import Link from "next/link";
import styles from "../styles/NavBar.module.css";

const Navbar = () => {
  return (
      <nav className={styles.navbar}>
        <Link href="/">Home</Link>
        <Link href="/recipes">Diet Food Recipes</Link>
        <Link href="/exercises">Exercise Guide</Link>
        </nav>
  );
};

export default Navbar;
