import { useState } from 'react';
import Modal from '../Modal/index'
import EditarCard from '../EditarCard/index'
import style from './Card.module.css'

function Card() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <div className={style.contenidoCard}>
                <img className={style.imagenCard} src=""/>
                <div className={style.contenidoBotonesCard}>
                    <button className={style.botonesCard}>Borrar</button>
                    <button className={style.botonesCard} onClick={openModal}>Editar</button>
                </div>
            </div>
            <Modal isOpen={isModalOpen} closeModal={closeModal}>
                <EditarCard />
            </Modal>
        </>
    )
}

export default Card