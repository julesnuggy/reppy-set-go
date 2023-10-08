import barbell from './assets/icons/barbell-red.svg';
import weightlifter from './assets/icons/weightlifter.svg';
import styles from './App.module.scss'

const App = () => {
  return (
    <div className={styles.app_container}>
      <header className={styles.header}>
        <img className={styles.icon} src={barbell} alt='barbell-menu' />
        <h1>Reppy, Set, Go!</h1>
        <img className={styles.icon} src={weightlifter} alt='weightlifter-user-account' />
      </header>
      <main className={styles.main}></main>
    </div>
  )
}

export default App
