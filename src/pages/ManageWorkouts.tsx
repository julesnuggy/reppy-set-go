import Button from '../components/Button';
import styles from './ManageWorkouts.module.scss';

const ManageWorkouts = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Manage Workouts</h2>
      <Button className={styles.start}>Start New Workout</Button>
      <p className={styles.info_text}>Click/Tap on an exercise below to view/edit it.</p>
      <Button className={styles.history}>Workout 3</Button>
      <Button className={styles.history}>Workout 2</Button>
      <Button className={styles.history}>Workout 1</Button>
    </div>
  );
};

export default ManageWorkouts;
