import React from 'react'
import styles from './Modal.module.css';
import EditarFormulario from 'components/EditarFormulario';
import { useFormulario } from 'context';

const Modal = () => {
    const {abrirModal, setAbrirModal} = useFormulario();

    if (!abrirModal) return null;

    const closeModal = () =>{
        setAbrirModal(false)
    }

  return (
    <div className={styles.modalOverlay}>
        <div className={styles.modalContent}>
            <EditarFormulario closeModal={closeModal} />
        </div>
    </div>
  )
}

export default Modal