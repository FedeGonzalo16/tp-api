import * as React from 'react';
import Button from '@mui/joy/Button';
import Snackbar from '@mui/joy/Snackbar';
import PlaylistAddCheckCircleRoundedIcon from '@mui/icons-material/PlaylistAddCheckCircleRounded';

export default function Notify() {
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <Button variant="outlined" color="success" onClick={() => setOpen(true)} className='mb-2'>
        Enviar Correo
      </Button>
      <Snackbar
        variant="soft"
        color="success"
        open={open}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        startDecorator={<PlaylistAddCheckCircleRoundedIcon />}
        endDecorator={
          <Button
            onClick={() => setOpen(false)}
            size="sm"
            variant="soft"
            color="success"
          >
            Cerrar
          </Button>
        }
      >
        Se ha enviado el correo satisfactoriamente
      </Snackbar>
    </React.Fragment>
  );
}
