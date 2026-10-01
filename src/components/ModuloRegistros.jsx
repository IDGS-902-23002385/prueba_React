import { useState } from 'react';
import Container from '@mui/material/Container';
import Header from './Header';
import Footer from './Footer';
import Banner from './Banner';
import FormularioRegistro from './FormularioRegistro';
import BuscadorRegistros from './BuscadorRegistros';
import TablaRegistros from './TablaRegistros';
import ContadorRegistros from './ContadorRegistros';


function ModuloRegistros() {
  const [registros, setRegistros] = useState([]);
  const [busqueda, setBusqueda] = useState('');

  const registrosFiltrados = registros.filter((registro) =>
    [registro.nombre, registro.email, registro.edad].some((campo) =>
      String(campo).toLowerCase().includes(busqueda.trim().toLowerCase())
    )
  );

  const agregarRegistro = (nuevoRegistro) => {
    setRegistros((registrosPrevios) => [...registrosPrevios, nuevoRegistro]);
  };

  const eliminarRegistro = (idAEliminar) => {
    setRegistros((registrosPrevios) =>
      registrosPrevios.filter((registro) => registro.id !== idAEliminar)
    );
  };

  return (
    <>
      <Header titulo="Modulo de invalidos" totalRegistros={registros.length} />
      <Container maxWidth="md">
        <Banner />
        <FormularioRegistro onAgregar={agregarRegistro} />
        <BuscadorRegistros valor={busqueda} onChange={setBusqueda} />
        <TablaRegistros
          registros={registrosFiltrados}
          onEliminar={eliminarRegistro}
          hayBusqueda={Boolean(busqueda.trim())}
        />
        <ContadorRegistros/>
      </Container>
      <Footer />
    </>
  );
}

export default ModuloRegistros;
