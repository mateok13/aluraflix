import style from './EditarCard.module.css'

function EditarCard() {
  return (
    <div className={style.contenidoEditarCard}>
      <h1 className={style.tituloForm}>Editar card:</h1>
      <form className={style.formEditarCard}>
        <div className={style.contenidoInput}>
          <label className={style.labelForm}>Titulo</label>
          <input type="text" className={style.inputForm} placeholder='Titulo'/>
        </div>
        <div className={style.contenidoInput}>
          <label className={style.labelForm}>Categoria</label>
          <select className={style.inputForm}>
            <option className={style.optionCategoria} value="0" selected>Selecciona la categoria</option>
            <option className={style.optionCategoria} value="1">Frontend</option>
            <option className={style.optionCategoria} value="2">Backend</option>
            <option className={style.optionCategoria} value="3">Innovacion </option>
            <option className={style.optionCategoria} value="4">Gestion </option>
          </select>
        </div>
        <div className={style.contenidoInput}>
          <label className={style.labelForm}>Imagen</label>
          <input type="text" className={style.inputForm} placeholder='URL de la imagen'/>
        </div>
        <div className={style.contenidoInput}>
          <label className={style.labelForm}>Video</label>
          <input type="text" className={style.inputForm} placeholder='URL del video'/>
        </div>
        <div className={style.contenidoInput}>
          <label className={style.labelForm}>Descripcion</label>
          <textarea name="" id="" className={style.textAreaForm + " " + style.inputForm}></textarea>
        </div>
        <div className={style.contenidoBoton}>
          <button className={style.botonGuardar + " " + style.botonesForm}>Guardar</button>
          <button className={style.botonLimpiar + " " + style.botonesForm}>Limpiar</button>
        </div>
      </form>
    </div>
  )
}

export default EditarCard