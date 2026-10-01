import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import imagen from '../../assets/images/hero.png';

function Banner() {
  return (
    <Paper
      component="section"
      elevation={1}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        minHeight: 180,
        mb: 3,
        pl: { xs: 2, sm: 4 },
        pr: { xs: 1, sm: 3 },
        overflow: 'hidden',
        background: 'linear-gradient(110deg, #e8f4f1 0%, #f5f2fa 100%)',
        textAlign: 'left',
      }}
    >
      <Box sx={{ py: 2 }}>
        <Typography variant="overline" color="text.secondary">
          Panel de control
        </Typography>
        <Typography variant="h5" component="h2" sx={{ fontWeight: 700 }}>
          Gestión de registros
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
          Administra la información desde un solo lugar.
        </Typography>
      </Box>
      <Box
        component="img"
        src={imagen}
        alt="Imagen placeholder del banner"
        sx={{
          width: { xs: 112, sm: 160 },
          height: { xs: 112, sm: 160 },
          objectFit: 'contain',
          flexShrink: 0,
          mr: { xs: 0, sm: 2 },
        }}
      />
    </Paper>
  );
}

export default Banner;