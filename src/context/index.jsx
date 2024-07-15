import React, {createContext, useContext, useEffect, useState} from 'react';

const FormularioContext = createContext();

export const FormularioProvider = ({children}) =>{

    const [formulario, setFormulario] = useState({
        titulo: '',
        categoria: '',
        imagen: '',
        video: '',
        descripcion: ''
    });

    const [categorias, setCategorias] = useState([]);
    const [videos, setVideos] = useState([]);
    const [abrirModal, setAbrirModal] = useState(false);

    useEffect(() => {
      fetch("https://alura-flix-api-neon.vercel.app/categorias")
      .then((response) => response.json())
      .then((data) => {
        setCategorias(data)
      })
    }, [])

    useEffect(() => {
      fetch("https://alura-flix-api-neon.vercel.app/videos")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setVideos(data)
      })
    }, [])  


    const handleSubmit = async (e) =>{
        e.preventDefault();
    
        try{
          const response = await fetch('https://alura-flix-api-neon.vercel.app/videos',{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formulario),
          });
    
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
    
          const result = await response.json();
          setVideos((prevVideos)=> {
            return [...prevVideos, result]
          });
          handleReset();
          console.log('Exito: ', result);

        }catch(error){
          console.log('Error: ', error);
        }
        
    }

    const eliminarRegistro = async(id) =>{

        console.log(`https://alura-flix-api-neon.vercel.app/videos/${id}`);

        try {
          const response = await fetch(`https://alura-flix-api-neon.vercel.app/videos/${id}`, {
            method: 'DELETE',
          });

          if (!response.ok) {
            throw new Error('Network response was not ok');
          }

          setVideos((prevVideos) => {
            return prevVideos.filter(video => video.id !== id)
          });
          console.log('Video eliminado');
        } catch (error) {
          console.log('Error al eliminar el video', error);
        }
    }

    const editarRegistro = (id) => {
      console.log(`Editar registro ${id}`);

      const videoEditar = videos.find(video => video.id === id);

      if (videoEditar) {
        setFormulario({
          id: videoEditar.id,
          titulo: videoEditar.titulo,
          categoria: videoEditar.categoria,
          imagen: videoEditar.imagen,
          video: videoEditar.video,
          descripcion: videoEditar.descripcion
        });

        setAbrirModal(true);
      }
    }

    const actualizarRegistro = async (e) =>{
      e.preventDefault();

      try {
        const response = await fetch(`https://alura-flix-api-neon.vercel.app/videos/${formulario.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formulario),
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const result = await response.json();
        setVideos((prevVideos) => {
          return prevVideos.map(video => (video.id === result.id ? result : video ));
        });

        handleReset();
        setAbrirModal(false);

        console.log('Registro actualizado');

      } catch (error) {
        console.log('Error al actualizar el registro', error);
      }
    }


    const handleTitulo = (titulo) => setFormulario((prev) => ({...prev, titulo}));
    const handleCategoria = (categoria) => setFormulario((prev) => ({...prev, categoria}));
    const handleImagen = (imagen) => setFormulario((prev) => ({...prev, imagen}));
    const handleVideo = (video) =>setFormulario((prev) => ({...prev, video}));
    const handleDescripcion = (descripcion) => setFormulario((prev) => ({...prev, descripcion}));

    const handleReset = () => {
        setFormulario({
            id: '',
            titulo: '',
            categoria: '',
            imagen: '',
            video: '',
            descripcion: ''
        })
    };

    return(
        <FormularioContext.Provider value={{
            formulario,
            categorias,
            videos,
            eliminarRegistro,
            editarRegistro,
            actualizarRegistro,
            handleTitulo,
            handleCategoria,
            handleImagen,
            handleVideo,
            handleDescripcion,
            handleReset,
            handleSubmit,
            abrirModal,
            setAbrirModal
        }}>
            {children}
        </FormularioContext.Provider>
    )
}

export const useFormulario = ()=>useContext(FormularioContext);