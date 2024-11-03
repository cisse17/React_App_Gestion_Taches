// pour afficher  l'en-tete de 
import styles from './header.module.css';
// import {reactLogo} from "../assets/react.svg"
//import {reactLogo} from "../../assets/react.svg"

const Header = () => {
  return (
    <div  className={styles.container}>
      <div className={styles.titleContainer}>
        <img src="react.svg" alt='logo' width={50} height={50} />
        <div>
            <h1>TaskFlow</h1>
            <div className='color-gray'>
                <code>Eliminez le chaoc, suivez le flux.</code>
            </div>
        </div>
      </div>

      <div className="color-primary">
            v.1.0
      </div>
    </div>
  )
}

export default Header
