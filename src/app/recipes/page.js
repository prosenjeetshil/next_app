import Navbar from '../components/NavBar';
import styles from '../styles/RecipesPage.module.css'

const RecipesPage = () => {
  return (
    <div className={styles.page}>
        <Navbar/>
      <div>
        <h1>Diet Food Recipes</h1>
        {/* Add content here */}
      </div>
    </div>
  );
};

export default RecipesPage;