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

  const handleShow = () => {
    const modal = document.querySelector(`.${styles.modal}`);
    setTimeout(() => {
      modal.classList.add(styles.modal__opened);
    }, 1)
  }

  const handleHide = () => {
    const modal = document.querySelector(`.${styles.modal}`);
    modal.classList.add(styles.modal__closing);
    setTimeout(hideModal, 500);
  }

  return (
    <Modal show={isShown} onHide={handleHide} onShow={handleShow} renderBackdrop={BackDrop}>
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

        <div className={styles.buttonContainer}>
          <Button onClick={handleHide} className={styles.closeButton}>CANCEL</Button>
        </div>
      </div>
    </Modal>
  );
};

export default NewWorkoutModal;
