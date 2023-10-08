import Button from '../components/Button';
import styles from './ManageWorkouts.module.scss';

type Workout = {
  date: Date;
  name: string
  rating: number;
  routine: string;
}

type HistoryProps = {
  workout: Workout;
}

const FAKE_DATA: Workout[] = [
  {
    date: new Date(2023, 9, 13),
    name: 'Arms and chest',
    rating: 3,
    routine: 'One-Off'
  },
  {
    date: new Date(2023, 9, 11),
    name: 'Core',
    rating: 4,
    routine: '5-Way Split'
  },
  {
    date: new Date(2023, 9, 8),
    name: 'Legs',
    rating: 5,
    routine: '5-Way Split'
  },
  {
    date: new Date(2023, 9, 1),
    name: 'Back',
    rating: 2,
    routine: '5-Way Split'
  },
  {
    date: new Date(2023, 8, 29),
    name: 'Chest',
    rating: 3,
    routine: '5-Way Split'
  },
  {
    date: new Date(2023, 8, 28),
    name: 'Arms',
    rating: 4,
    routine: '5-Way Split'
  }
];

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
      {FAKE_DATA.map((workout) => <HistoryButton key={`${workout.date}_${workout.name}`} workout={workout} />)}
    </div>
  );
};

export default ManageWorkouts;
