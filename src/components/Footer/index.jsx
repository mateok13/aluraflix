import { Link, useLocation } from 'react-router-dom'
import { LogoAluraFlix } from '../../assets/recursos'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined'
import style from './Footer.module.css'

function Footer() {
  const location = useLocation();

  const esInicio = location.pathname === '/aluraflix' || location.pathname === '/aluraflix/';

  return (

    <>
      <div className={`${style.contenidoFooter} ${esInicio ? style.fondoFooterHome : style.fondoFooterNuevoVideo}`}>
        <img className={style.logoAluraFlix} src={LogoAluraFlix} />
        <div className={style.infoDesarrollador}>
          <h1>Desarrollado por:</h1>
          <a className={style.linkRepositorio} href="https://mateok13.github.io/portafolio/" target="_blank">Jhonny Mateo Rosero Cortes</a>
          <h1>2024</h1>
        </div>
      </div>
      <div className={style.contenidoNavbarCelular}>
        <Link to="/aluraflix">
          <div className={`${style.botonNavBarCelular} ${esInicio ? style.botonSeleccionadoCelular : ''}`}>
            <HomeOutlinedIcon style={{ fontSize: esInicio ? '30px' : '40px' }} />
            <h1 className={`${esInicio ? style.textoBotonSeleccionadoCelular : style.textoBotonNoSeleccionadoCelular}`}>Home</h1>
          </div>
        </Link>

        <Link to="/aluraflix/nuevoVideo">
          <div className={`${style.botonNavBarCelular} ${!esInicio ? style.botonSeleccionadoCelular : ''}`}>
            <AddCircleOutlineOutlinedIcon style={{ fontSize: !esInicio ? '30px' : '40px' }}/>
            <h1 className={`${!esInicio ? style.textoBotonSeleccionadoCelular : style.textoBotonNoSeleccionadoCelular}`}>Nuevo Video</h1>
          </div>
        </Link>
      </div>
    </>
  )
}

export default Footer