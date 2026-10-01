import Chip from '@mui/material/Chip';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';

function ContadorRegistros({ totalRegistros }) {
  const etiqueta = totalRegistros === 1 ? 'registro' : 'registros';

  return (
    <Chip
      color="default"
      icon={<FormatListNumberedIcon />}
      label={`${totalRegistros} ${etiqueta}`}
      variant="outlined"
      sx={{ color: 'inherit', borderColor: 'currentColor' }}
    />
  );
}

export default ContadorRegistros;