import { Modal } from '@restart/ui';
import { RenderModalBackdropProps } from '@restart/ui/Modal';
import { ReactElement, useState } from 'react';
import Button from './Button';
import styles from './NewWorkoutModal.module.scss';

type ModalProps = {
  isShown: boolean;
  hideModal: () => void;
};

const DAYS_OF_WEEK: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const BackDrop = ({ props }: RenderModalBackdropProps): ReactElement => <div {...props} className={styles.backdrop} />;

const NewWorkoutModal = ({ isShown, hideModal }: ModalProps): ReactElement => {
  const todayString: string = new Date().toISOString().substring(0, 10);
  const [workoutDate, setWorkoutDate] = useState<string>(todayString);

  const handleClick = (): void => {
    setWorkoutDate(todayString);
  };

  const getWorkoutDay = (): string => {
    const dayIndex: number = new Date(workoutDate).getDay();
    return DAYS_OF_WEEK[dayIndex].slice(0, 3);
  };

  return (
    <Modal show={isShown} onHide={hideModal} renderBackdrop={BackDrop}>
      <div className={styles.modal}>
        <div className={styles.buttonContainer}>
          <Button onClick={hideModal} className={styles.closeButton}>X</Button>
        </div>

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
