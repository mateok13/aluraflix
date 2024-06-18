import PropTypes from "prop-types"
import { useState } from 'react'
import { borrar } from "../../api/api"
import Modal from '../Modal/index'
import EditarCard from '../EditarCard/index'
import style from './Card.module.css'
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';

function Card({ item }) {
    const { id, imagen, video, categoriaId } = item;
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }

    const eliminarVideo = async () => {
        const respuesta = await borrar(id)
        console.log('Video borrado:', respuesta);
        alert('Video borrado.')
        window.location.reload()
    }

    return (
        <>
            <div className={`${style.contenidoCard} ${categoriaId === "1" ? style.cardFront :
                    categoriaId === "2" ? style.cardBack :
                        categoriaId === "3" ? style.cardInnova : ''}`}>
                <a href={video} target="_blank">
                    <img className={style.imagenCard} src={imagen} />
                </a>
                <div className={style.contenidoBotonesCard}>
                    <button className={style.botonesCard} onClick={eliminarVideo}><DeleteForeverOutlinedIcon/>Borrar</button>
                    <button className={style.botonesCard} onClick={openModal}><BorderColorOutlinedIcon/>Editar</button>
                </div>
            </div>
            <Modal isOpen={isModalOpen} closeModal={closeModal}>
                <EditarCard item={item} closeModal={closeModal}/>
            </Modal>
        </>
    )
}

Card.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.string.isRequired,
        imagen: PropTypes.string.isRequired,
        video: PropTypes.string.isRequired,
        categoriaId: PropTypes.string.isRequired
    }).isRequired
}

export default Card