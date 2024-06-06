import { useLocation } from 'react-router-dom'
import { LogoAluraFlix } from '../../assets/recursos'
import style from './Footer.module.css'

function Footer() {
  const location = useLocation();

  const esInicio = location.pathname === '/';

  return (
    <div className={`${style.contenidoFooter} ${esInicio ? style.fondoFooterHome : style.fondoFooterNuevoVideo}`}>
      <img className={style.logoAluraFlix} src={LogoAluraFlix} />
      <div className={style.infoDesarrollador}>
        <h1>Desarrollado por</h1>
        <a className={style.linkRepositorio} href="https://mateok13.github.io/portafolio/" target="_blank">Jhonny Mateo Rosero Cortes</a>
        <h1>2024</h1>
      </div>
    </div>
  )
}

export default Footer