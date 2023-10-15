import { Modal } from '@restart/ui';
import { useState } from 'react';
import styles from './NewWorkoutModal.module.scss';

type ModalProps = {
  isShown: boolean;
};

const DAYS_OF_WEEK = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const BackDrop = (props) => <div {...props} className={styles.backdrop} />;

const NewWorkoutModal = ({ isShown }: ModalProps) => {
  const todayString = new Date().toISOString().substring(0, 10);
  const [workoutDate, setWorkoutDate] = useState(todayString);

  const handleClick = () => {
    setWorkoutDate(todayString);
  };

  const getWorkoutDay = () => {
    const dayIndex = new Date(workoutDate).getDay();
    return DAYS_OF_WEEK[dayIndex].slice(0, 3);
  };

  return (
    <Modal show={isShown} renderBackdrop={BackDrop}>
      <div className={styles.modal}>
        <div className={styles.config}>
          <div className={styles.config__name}>
            <label htmlFor="workout-name">Name:</label>
            <input id="workout-name" placeholder="Give your workout a name" />
          </div>

          <div className={styles.config__date}>
            <label htmlFor="workout-date">Date:</label>
            <span>{getWorkoutDay()}</span>
            <input id="workout-date" type="date" value={workoutDate} onChange={(e) => setWorkoutDate(e.target.value)} />
            <button onClick={handleClick}>Today</button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default NewWorkoutModal;
