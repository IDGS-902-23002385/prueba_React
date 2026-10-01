import { useState } from 'react';
import Container from '@mui/material/Container';
import Header from '../ui/Header';
import Footer from '../ui/Footer';
import Banner from '../ui/Banner';
import FormularioRegistro from './FormularioRegistro';
import BuscadorRegistros from './BuscadorRegistros';
import TablaRegistros from './TablaRegistros';
import ContadorRegistros from './ContadorRegistros';
import { RegistroService } from '../service/RegistroService';

function ModuloRegistros() {
  const [registros, setRegistros] = useState([]);
  const [busqueda, setBusqueda] = useState('');

  const registroService = new RegistroService(registros, setRegistros);
  const registrosFiltrados = registroService.filtrar(busqueda);

  return (
    <>
      <Header titulo="Modulo de invalidos" totalRegistros={registros.length} />
      <Container maxWidth="md">
        <Banner />
        <FormularioRegistro onAgregar={(nuevo) => registroService.agregar(nuevo)} />
        <BuscadorRegistros valor={busqueda} onChange={setBusqueda} />
        <TablaRegistros
          registros={registrosFiltrados}
          onEliminar={(id) => registroService.eliminar(id)}
          hayBusqueda={Boolean(busqueda.trim())}
        />
        <ContadorRegistros />
      </Container>
      <Footer />
    </>
  );
}

export default ModuloRegistros;