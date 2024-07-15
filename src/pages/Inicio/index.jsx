import Banner from 'components/Banner';
import Equipo from 'components/Equipo';
import Modal from 'components/Modal';
import { useFormulario } from 'context';
import React from 'react'

const Inicio = () => {
  const {videos, categorias} = useFormulario();

  return (
    <>
      <Banner color="#001233"/>
      {
        categorias.map((categoria) =>
          <Equipo 
            nombre={categoria.categoria} 
            key={categoria.id}
            color={categoria.colorPrincipal}
            videosSeleccionado={videos.filter(video => {
              return video.categoria === categoria.categoria
            })}
          />
        )
      }  
      <Modal />
    </>
  )
}

export default Inicio;