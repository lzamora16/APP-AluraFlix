import Cabecera from 'components/Cabecera'
import Container from 'components/Container';
import PiePagina from 'components/PiePagina';
import { FormularioProvider } from 'context';
import React from 'react'
import { Outlet } from 'react-router-dom';

const PaginaBase = () => {
  return (
    <FormularioProvider>
      <main>
        <Cabecera />
        <Container >
          <Outlet />
        </Container>
        <PiePagina />
      </main>
    </FormularioProvider>
  )
}

export default PaginaBase;