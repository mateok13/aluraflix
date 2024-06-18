import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { agregar } from '../../api/api';
import style from './NuevoVideo.module.css'

function NuevoVideo() {
  const [titulo, setTitulo] = useState('');
  const [categoriaId, setCategoriaId] = useState('0');
  const [imagen, setImagen] = useState('');
  const [video, setVideo] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleGuardar = async (e) => {
    e.preventDefault();
    if (!titulo || !imagen || !video || !descripcion || categoriaId === '0') {
      alert('Todos los campos son obligatorios y debes seleccionar una categoría.');
      return;
    }
    const videoNuevo = {
      titulo,
      imagen,
      video,
      categoriaId,
      descripcion,
    };
    try {
      const respuesta = await agregar(videoNuevo);
      console.log('Video agregado con éxito:', respuesta);
      alert('Video agregado con éxito.');
      navigate('/aluraflix')
    } catch (error) {
      console.error('Error al agregar el video:', error);
    }
  };

  const handleLimpiar = (e) => {
    e.preventDefault();
    setTitulo('');
    setCategoriaId('0');
    setImagen('');
    setVideo('');
    setDescripcion('');
  };

  return (
    <div className={style.contenidoNuevoVideo}>
      <div className={style.tituloContenido}>
        <h1>Nuevo Video</h1>
        <p>Complete el formulario para crear una nueva tarjeta de video</p>
      </div>
      <div className={style.contenidoForm}>
        <h1 className={style.tituloForm}>Crear Tarjeta</h1>
        <form className={style.formNuevoVideo} onSubmit={handleGuardar}>
          <div className={style.contenidoInput}>
            <label className={style.labelForm}>Titulo</label>
            <input type="text" className={style.inputForm} placeholder='Ingrese el titulo' value={titulo} onChange={(e) => setTitulo(e.target.value)}/>
          </div>
          <div className={style.contenidoInput}>
            <label className={style.labelForm}>Categoria</label>
            <select className={style.inputForm} value={categoriaId} onChange={(e) => setCategoriaId(e.target.value)}>
              <option className={style.optionCategoria} value="0">Selecciona una categoria</option>
              <option className={style.optionCategoria} value="1">Frontend</option>
              <option className={style.optionCategoria} value="2">Backend</option>
              <option className={style.optionCategoria} value="3">Innovación y gestión</option>
            </select>
          </div>
          <div className={style.contenidoInput}>
            <label className={style.labelForm}>Imagen</label>
            <input type="text" className={style.inputForm} placeholder='Ingrese el enlace de la imagen' value={imagen} onChange={(e) => setImagen(e.target.value)}/>
          </div>
          <div className={style.contenidoInput}>
            <label className={style.labelForm}>Video</label>
            <input type="text" className={style.inputForm} placeholder='Ingrese el enlace del video' value={video} onChange={(e) => setVideo(e.target.value)}/>
          </div>
          <div className={style.contenidoInput}>
            <label className={style.labelForm}>Descripcion</label>
            <textarea className={style.textAreaForm + " " + style.inputForm} placeholder='¿De que se trata este video?' value={descripcion} onChange={(e) => setDescripcion(e.target.value)}/>
            <div className={style.contenidoBoton}>
              <button type="submit" className={style.botonGuardar + " " + style.botonesForm}>Guardar</button>
              <button type="button" onClick={handleLimpiar} className={style.botonLimpiar + " " + style.botonesForm}>Limpiar</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default NuevoVideo