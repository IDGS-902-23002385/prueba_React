import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ContadorRegistros from '../ModuloRegistros/ContadorRegistros';

function Header({ titulo, totalRegistros }) {
  return (
    <AppBar position="static" sx={{ mb: 3 }}>
      <Toolbar>
        <AssignmentIcon sx={{ mr: 1 }} />
        <Typography variant="h6" component="h1" sx={{ flexGrow: 1 }}>
          {titulo}
        </Typography>
        <ContadorRegistros totalRegistros={totalRegistros} />
      </Toolbar>
    </AppBar>
  );
}

export default Header;
