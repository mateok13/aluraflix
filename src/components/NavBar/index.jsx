import { Link, useLocation } from 'react-router-dom';
import style from './NavBar.module.css';

function NavBar() {
    const location = useLocation();

    const esInicio = location.pathname === '/';

    return (
        <div className={`${style.contenidoNavBar} ${esInicio ? style.fondoNavBarHome : style.fondoNavBarNuevoVideo}`}>
            <div className={style.contenidoLogo}>
                <img className={style.logoAluraFlix} src="src\assets\LogoMain.png" />
            </div>
            <div className={style.contenidoBotones}>
                <Link to="/">
                    <button className={`${style.botonNavBar} ${esInicio ? style.botonSeleccionado : style.botonNoSeleccionado}`} >Home</button>
                </Link>

                <Link to="/nuevoVideo">
                    <button className={`${style.botonNavBar} ${!esInicio ? style.botonSeleccionado : style.botonNoSeleccionado}`} >Nuevo Video</button>
                </Link>
            </div>
        </div>
    );
}

export default NavBar;