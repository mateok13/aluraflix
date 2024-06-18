import { ImagenPortafolio } from '../../assets/recursos'
import style from './Banner.module.css'

function Banner() {
    return (
        <div className={style.contenidoBanner}>
            <div className={style.textoBanner}>
                <h1 className={style.tituloBanner}>FRONT END</h1>
                <h1 className={style.tituloChallenge}>Challenge React</h1>
                <p className={style.textChallenge}>Este challenge es una forma de aprendizaje. Es un mecanismo donde podras comprometerte
                    en la resolucion de un problema para poder aplicar todos los conocimientos adquiridos
                    en la formacion React.
                </p>
            </div>
            <div className={style.contenidoImagen}>
                <a href="https://mateok13.github.io/portafolio/" target="_blank">
                    <img className={style.imagenBanner} src={ImagenPortafolio} />
                </a>
            </div>
        </div>
    )
}

export default Banner