import Navbar from '../components/Navbar';
import styles from '../styles/ExercisesPage.module.css';

const ExercisesPage = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.exercisesPage}>
        <h1>Exercise Guide</h1>
        {/* Add content here */}
      </div>
    </div>
  );
};

export default ExercisesPage;
