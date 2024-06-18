import PropTypes from "prop-types"
import { useState } from "react"
import { editar } from "../../api/api"
import style from './EditarCard.module.css'

function EditarCard({ item, closeModal }) {
  const [titulo, setTitulo] = useState(item.titulo);
  const [imagen, setImagen] = useState(item.imagen);
  const [video, setVideo] = useState(item.video);
  const [categoriaId, setCategoriaId] = useState(item.categoriaId);
  const [descripcion, setDescripcion] = useState(item.descripcion);

  const handleGuardar = async (e) => {
    e.preventDefault();
    if (!titulo || !imagen || !video || !descripcion || categoriaId === '0') {
      alert('Todos los campos son obligatorios y debes seleccionar una categoría.');
      return;
    }
    const objetoActualizado = {
      titulo,
      imagen,
      video,
      categoriaId,
      descripcion,
    };
    try {
      const respuesta = await editar(item.id, objetoActualizado);
      console.log('Datos actualizados:', respuesta);
      alert('Datos actualizados.')
      closeModal()
      window.location.reload()
    } catch (error) {
      console.error('Error al actualizar los datos:', error);
    }
  };

  const limpiarFormulario = () => {
    setTitulo(item.titulo);
    setImagen(item.imagen);
    setVideo(item.video);
    setCategoriaId(item.categoriaId);
    setDescripcion(item.descripcion);
  };

  return (
    <div className={style.contenidoEditarCard}>
      <h1 className={style.tituloForm}>Editar card:</h1>
      <form className={style.formEditarCard} onSubmit={handleGuardar}>
        <div className={style.contenidoInput}>
          <label className={style.labelForm}>Titulo</label>
          <input type="text" className={style.inputForm} placeholder='Titulo' value={titulo} onChange={(e) => setTitulo(e.target.value)} />
        </div>
        <div className={style.contenidoInput}>
          <label className={style.labelForm}>Categoria</label>
          <select className={style.inputForm} value={categoriaId} onChange={(e) => setCategoriaId(Number(e.target.value))}>
            <option className={style.optionCategoria} value="0">Selecciona la categoria</option>
            <option className={style.optionCategoria} value="1">Frontend</option>
            <option className={style.optionCategoria} value="2">Backend</option>
            <option className={style.optionCategoria} value="3">Innovación y gestión</option>
          </select>
        </div>
        <div className={style.contenidoInput}>
          <label className={style.labelForm}>Imagen</label>
          <input type="text" className={style.inputForm} placeholder='Ingrese el enlace de la imagen' value={imagen} onChange={(e) => setImagen(e.target.value)} />
        </div>
        <div className={style.contenidoInput}>
          <label className={style.labelForm}>Video</label>
          <input type="text" className={style.inputForm} placeholder='Ingrese el enlace del video' value={video} onChange={(e) => setVideo(e.target.value)} />
        </div>
        <div className={style.contenidoInput}>
          <label className={style.labelForm}>Descripcion</label>
          <textarea name="" id="" className={style.textAreaForm + " " + style.inputForm} placeholder='¿De que se trata este video?' value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
        </div>
        <div className={style.contenidoBoton}>
          <button type="submit" className={style.botonGuardar + " " + style.botonesForm}>Guardar</button>
          <button type="button" onClick={limpiarFormulario} className={style.botonLimpiar + " " + style.botonesForm}>Limpiar</button>
        </div>
      </form>
    </div>
  )
}

EditarCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    titulo: PropTypes.string.isRequired,
    imagen: PropTypes.string.isRequired,
    video: PropTypes.string.isRequired,
    categoriaId: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired
  }).isRequired,
  closeModal: PropTypes.func.isRequired
}

export default EditarCard