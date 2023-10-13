import Button from '../components/Button';
import { FAKE_WORKOUTS } from '../fake_data';
import { Workout } from '../interfaces/Workout';
import styles from './ManageWorkouts.module.scss';

type HistoryProps = {
  workout: Workout;
}

const HistoryButton = ({ workout }: HistoryProps) => {
  const starRating = '★'.repeat(workout.rating) + '☆'.repeat((5 - workout.rating));

  return (
    <Button className={styles.history}>
      <p className={styles.date}>{workout.date.toLocaleDateString()}</p>
      <p className={styles.routine}>{workout.routine}</p>
      <p className={styles.rating}>{starRating}</p>
      <p className={styles.name}>{workout.name}</p>
    </Button>
  );
};

const ManageWorkouts = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Manage Workouts</h2>
      <Button className={styles.start}>Start New Workout</Button>
      <p className={styles.info_text}>Click/Tap on an exercise below to view/edit it.</p>
      {FAKE_WORKOUTS.map((workout) => <HistoryButton key={`${workout.date}_${workout.name}`} workout={workout} />)}
    </div>
  );
};

export default ManageWorkouts;
