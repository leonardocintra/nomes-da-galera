import Linha from '../components/Linha'
import Tabuleiro from '../components/Tabuleiro'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Tabuleiro />
    </div>
  )
}
