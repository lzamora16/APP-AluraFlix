
import styles from './index.module.css';
import Input from 'components/Input';
import InputTextArea from 'components/InputTextArea';
import Boton from 'components/Boton';
import InputSelect from 'components/InputSelect';
import { useFormulario } from 'context';

const NuevoVideo = () => {

  const {formulario, handleTitulo, handleCategoria, handleImagen, handleVideo, handleDescripcion, handleReset, handleSubmit} = useFormulario();
  
  

  return (
    <section className={styles.container}>
      <div className={styles.encabezado}>
        <h1>NUEVO VIDEO</h1>
        <span>Complete el formulario para crear una nueva tarjeta de video</span>
      </div>
      <section className={styles.containerformulario}>
        <h3>Crear tarjeta</h3>
        <form className={styles.formulario} onSubmit={handleSubmit}>
            <div className={styles.inputs}>
              <Input 
                label="Título" 
                placeholder="Ingrese el título" 
                tipo="text"
                clase="nuevo"
                value={formulario.titulo} 
                onChange={(e) => handleTitulo(e.target.value)}/>
              <InputSelect 
                label="Categoría" 
                clase="nuevo"
                value={formulario.categoria}
                onChange={(e) =>handleCategoria(e.target.value)}/>
              <Input
                label="Imagen" 
                placeholder="Ingrese el enlace de Imagen" 
                tipo="text"
                clase="nuevo"
                value={formulario.imagen} 
                onChange={(e) => handleImagen(e.target.value)}/>
              <Input 
                label="Vídeo" 
                placeholder="Ingrese el enlace del Vídeo" 
                tipo="text"
                clase="nuevo"
                value={formulario.video} 
                onChange={(e) => handleVideo(e.target.value)}/>
              <InputTextArea 
                label="Descripción" 
                placeholder="¿De que se trata este vídeo?" 
                tipo="text"
                clase="nuevo"
                value={formulario.descripcion} 
                onChange={(e) => handleDescripcion(e.target.value)}/>
            </div>
            <div className={styles.botones}>
              <Boton value="Guardar"  type="submit"/>
              <Boton value="Limpiar" type="button" onClick={handleReset} />
            </div>
        </form>
      </section>
    </section>
  )
}

export default NuevoVideo;