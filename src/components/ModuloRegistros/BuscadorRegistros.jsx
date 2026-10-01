import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import ClearIcon from '@mui/icons-material/Clear';
import SearchIcon from '@mui/icons-material/Search';

function BuscadorRegistros({ valor, onChange }) {
  return (
    <TextField
      fullWidth
      label="Buscar registros"
      placeholder="Nombre, email o edad"
      value={valor}
      onChange={(evento) => onChange(evento.target.value)}
      size="small"
      sx={{ mb: 2 }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon fontSize="small" />
          </InputAdornment>
        ),
        endAdornment: valor && (
          <InputAdornment position="end">
            <IconButton
              size="small"
              onClick={() => onChange('')}
              aria-label="Limpiar búsqueda"
            >
              <ClearIcon fontSize="small" />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
}

export default BuscadorRegistros;