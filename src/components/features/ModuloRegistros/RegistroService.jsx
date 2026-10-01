export class RegistroService {
  constructor(registros, setRegistros) {
    this.registros = registros;
    this.setRegistros = setRegistros;
  }

  filtrar(busqueda) {
    return this.registros.filter((registro) =>
      [registro.nombre, registro.email, registro.edad].some((campo) =>
        String(campo).toLowerCase().includes(busqueda.trim().toLowerCase())
      )
    );
  }

  agregar(nuevoRegistro) {
    this.setRegistros((registrosPrevios) => [...registrosPrevios, nuevoRegistro]);
  }

  eliminar(idAEliminar) {
    this.setRegistros((registrosPrevios) =>
      registrosPrevios.filter((registro) => registro.id !== idAEliminar)
    );
  }
}