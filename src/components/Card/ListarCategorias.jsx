import PropTypes from 'prop-types'
import { useState, useEffect } from "react"
import { buscar } from '../../api/api'
import ListarCards from './ListarCards'
import style from './Card.module.css'

const ListarCategorias = ({ url }) => {
    const [categorias, setCategorias] = useState([])

    useEffect(() => {
        buscar(url, setCategorias)
    }, [url])

    return (
        <div>
            {categorias.map((item) => (
                <div key={item.id} className={style.contenidoCategorias}>
                    <h1 className={`${style.tituloCategoria} ${
                        item.id === "1" ? style.tituloCategoriaFrontend : 
                        item.id === "2" ? style.tituloCategoriaBackend : 
                        item.id === "3" ? style.tituloCategoriaInnova : ''}`}>
                        {item.nombre}
                    </h1>
                    <ListarCards url={`/videos?categoriaId=${item.id}`} />
                </div>
            ))}
        </div>
    )
}

ListarCategorias.propTypes = {
    url: PropTypes.string.isRequired
}

export default ListarCategorias