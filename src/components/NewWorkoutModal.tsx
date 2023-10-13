import { Modal } from '@restart/ui';
import styles from './NewWorkoutModal.module.scss';

type ModalProps = {
  isShown: boolean;
}

const BackDrop = (props) => (
  <div
    {...props}
    className={styles.backdrop}
  />
)

const NewWorkoutModal = ({ isShown }: ModalProps) => {
  const today = new Date();
  const todayString = today.toISOString().substring(0,10);

  return (
    <Modal show={isShown} renderBackdrop={BackDrop}>
      <div className={styles.modal}>
        <h2>New Workout</h2>
        <label>
          Name:
          <input autoFocus={true}></input>
        </label>
        <br/>
        <label>
          Date:
          <input type="date" defaultValue={todayString}></input>
        </label>
      </div>
    </Modal>
  )
}

export default NewWorkoutModal;
