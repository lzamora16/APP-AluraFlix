import React from 'react'
import styles from './EditarFormulario.module.css';
import Input from 'components/Input';
import InputSelect from 'components/InputSelect';
import InputTextArea from 'components/InputTextArea';
import Boton from 'components/Boton';
import Cerrar from './cerrar.png'
import { useFormulario } from 'context';

const EditarFormulario = ({closeModal}) => {

  const {
    formulario,
    handleTitulo,
    handleCategoria,
    handleImagen,
    handleVideo,
    handleDescripcion,
    actualizarRegistro,
    handleReset
  } = useFormulario();

  return (
    <div className={styles.container}>
        <section className={styles.formulario}>
            <div className={styles.cerrar}>
              <img src={Cerrar} alt="Cerrar Modal" onClick={closeModal} />  
            </div>
            <h2>Editar Card:</h2>
            <form onSubmit={actualizarRegistro}>
                <div className={styles.inputs}>
                    <Input 
                      label="Título" 
                      value={formulario.titulo} 
                      onChange={(e) => handleTitulo(e.target.value)} 
                      clase="editar"
                    />
                    <InputSelect 
                      label="Categoría"
                      value={formulario.categoria} 
                      onChange={(e) => handleCategoria(e.target.value)}
                      clase="editar"
                    />
                    <Input 
                      label="Imagen" 
                      value={formulario.imagen}
                      onChange={(e)=> handleImagen(e.target.value)}
                      clase="editar"
                    />
                    <Input 
                      label="Vídeo" 
                      value={formulario.video}
                      onChange={(e)=> handleVideo(e.target.value)}
                      clase="editar"
                    />
                    <InputTextArea 
                      label="Descripción"
                      value={formulario.descripcion}
                      onChange={(e)=> handleDescripcion(e.target.value)} 
                      clase="editar"
                    />
                </div>
                <div className={styles.botones}>
                    <Boton value="Modificar"  type="submit"/>
                    <Boton value="Limpiar" type="button" onClick={handleReset}/> 
                </div>
            </form>
    </section>
    </div>
  )
}

export default EditarFormulario;