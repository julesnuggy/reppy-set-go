import styles from './ManageWorkouts.module.scss';

const ManageWorkouts = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Manage Workouts</h2>
      <button className={styles.start}>Start New Workout</button>
      <p className={styles.info_text}>Click/Tap on an exercise below to view/edit it.</p>
      <button className={styles.history}>Workout 3</button>
      <button className={styles.history}>Workout 2</button>
      <button className={styles.history}>Workout 1</button>
    </div>
  );
};

export default ManageWorkouts;
