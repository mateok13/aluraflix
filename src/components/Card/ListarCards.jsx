import PropTypes from 'prop-types'
import { useState, useEffect } from "react"
import Card from "../Card"
import { buscar } from '../../api/api'
import style from './Card.module.css'

const ListarCards = ({ url }) => {
    const [videos, setVideos] = useState([])

    useEffect(() => {
        buscar(url, setVideos)
    }, [url])

    return (
        <div className={style.contenidoListaCards}>
            {videos.map((item) => (
                <Card key={item.id} item={item} />
            ))}
        </div>
    )
}

ListarCards.propTypes = {
    url: PropTypes.string.isRequired
}

export default ListarCards