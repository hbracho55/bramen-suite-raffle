'use client'

// React Imports
import { useState } from 'react'
import React from 'react'

// Next Imports
import Link from 'next/link'
import { useParams } from 'next/navigation'

// MUI Imports
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Drawer from '@mui/material/Drawer';
import Fab from '@mui/material/Fab'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import Divider from '@mui/material/Divider'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import DialogContentText from '@mui/material/DialogContentText'

// Hook Imports
import { useImageVariant } from '@core/hooks/useImageVariant'
import { useSettings } from '@core/hooks/useSettings'
import { set } from 'date-fns'

const Book = ({ raffleData, refreshData }) => {
  // States
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const [ticketId, setTicketId] = React.useState('');
  const [ticketNumber, setTicketNumber] = React.useState(0);
  const [openDialog, setOpenDialog] = React.useState(false);
  const [dialogMessage, setDialogMessage] = React.useState('');
  const [formData, setFormData] = React.useState({
    documentNumber: '',
    fullName: '',
    email: '',
    confirmEmail: '',
    phone: '',
  });
  const [formErrors, setFormErrors] = React.useState({
    documentNumber: false,
    fullName: false,
    email: false,
    confirmEmail: false,
    phone: false,
  });
  const [isTextFieldsDisabled, setIsTextFieldsDisabled] = React.useState(false);

  // Vars
  const darkImg = '/images/pages/auth-v2-mask-dark.png'
  const lightImg = '/images/pages/auth-v2-mask-light.png'

  // Hooks
  const { lang: locale } = useParams()
  const authBackground = useImageVariant('light', lightImg, darkImg)
  const { settings } = useSettings()

  // Verifica si los datos están disponibles
  if (!raffleData || !raffleData.tickets || !Array.isArray(raffleData.tickets)) {
    return <Typography>Cargando datos...</Typography>; // Muestra un mensaje de carga
  }

  const validateForm = () => {
    const errors = {
      documentNumber: formData.documentNumber.trim() === '',
      fullName: formData.fullName.trim() === '',
      email: formData.email.trim() === '',
      confirmEmail: formData.confirmEmail.trim() === '',
      phone: formData.phone.trim()== '',
    };

    setFormErrors(errors);

    // Verifica si hay errores
    return !Object.values(errors).some((error) => error);
  };

  const toggleDrawer = (newOpen, ticketId, ticketNumber) => () => {
    setOpenDrawer(newOpen);
    setTicketId(ticketId)
    setTicketNumber(ticketNumber);
    if (newOpen) {
      // Limpia el campo fullName (y otros campos si es necesario) al abrir el Drawer
      setFormData((prev) => ({
        documentNumber: '',
        fullName: '',
        email: '',
        confirmEmail: '',
        phone: '',
    }));
    }
  };

  const handleInputChange = async (e) => {
    const { name, value } = e.target;

    // Si el campo es "documentNumber", valida que solo permita números y el símbolo "-"
    if (name === 'documentNumber') {
      const regex = /^[0-9\-]*$/; // Permitir solo números y el símbolo "-"
      if (!regex.test(value)) {
        return; // Si el valor no cumple con el patrón, no actualices el estado
      }
    }

    // Si el campo es "email", valida formato valido
    if (name === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Patrón para validar emails
      if (!emailRegex.test(value)) {
        setFormErrors((prev) => ({ ...prev, email: true })); // Marca el error si no es válido
      } else {
        setFormErrors((prev) => ({ ...prev, email: false })); // Limpia el error si es válido
      }
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputOnBlur = async (e) => {
    if (formData.documentNumber.trim() != '') {
      try {
        const res = await fetch(`http://rifabramen.ddns.net:4200/api/players/criteria?personalId=${formData.documentNumber.trim()}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          }
        });

        if (!res.ok) {
          throw new Error('Failed to retrieve player criteria data');
        }

        const data = await res.json();
        if (data && data.data.length > 0) {
          setFormData((prev) => ({
            ...prev,
            fullName: data.data[0].name,
            email: data.data[0].email,
            confirmEmail: data.data[0].email,
            phone: data.data[0].phone,
          }));
          setIsTextFieldsDisabled(true);
        } else {
          setIsTextFieldsDisabled(false);
        }

      } catch (error) {
        console.error('Failed to retrieve Player data: ', error)
      }
    }
  };

  const handlePlayer = async () => {
    if (formData.documentNumber.trim() === '') {
      console.error('Por favor, indica el numero de identificación personal');
      return;
    }
    try {
      const res = await fetch(`http://rifabramen.ddns.net:4200/api/players/${formData.documentNumber.trim()}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        }
      });

      if (!res.ok) {
        throw new Error('Failed to retrieve player data');
      }

      const data = await res.json();

    } catch (error) {
      console.error('Failed to retrieve Player data: ', error)
    }
  }

  const handleBooking = async () => {
    if (!validateForm()) {
      console.error('Por favor, completa todos los campos requeridos.');
      return;
    }
    if (formData.email !== formData.confirmEmail) {
      setFormErrors((prev) => ({
        ...prev,
        email: true,
        confirmEmail: true,
      }));
      console.error('Los correos electrónicos no coinciden.');
      return;
    }
    try {
      const res = await fetch(`http://rifabramen.ddns.net:4200/api/manage-raffle-orq/tickets/${ticketId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          status: 'Reservado', // Nuevo estado del ticket
          player: {
            personalId: formData.documentNumber,
            name: formData.fullName,
            email: formData.email,
            phone: formData.phone,
            status: 'Activo'
          },
          raffle: {
            id: '12d179fc-ab9b-43c3-928e-9dc064bdd98e'
          }
        }),
      });

      if (!res.ok) {
        setOpenDrawer(false);
        setDialogMessage('El ticket seleccionado no se encuentra disponible para reservar.')
        setOpenDialog(true);
        refreshData();
        throw new Error('El ticket seleccionado no se encuentra disponible para reservar.');
      }

      const data = await res.json();

      // Refresca los datos llamando a la función pasada como prop
      refreshData();

      // Limpia formulario
      setFormData({
        documentNumber: '',
        fullName: '',
        email: '',
        confirmEmail: '',
        phone: '',
      })

      // Muestra el diálogo de confirmación
      setDialogMessage('El ticket ha sido reservado exitosamente.')
      setOpenDialog(true);
    } catch (error) {
      console.error('Failed to update ticket data: ', error)
    }
  }

  const handleCancel = () => {
    setOpenDrawer(false)
  }

  const handleClose = () => {
    setOpenDialog(false);
    setOpenDrawer(false);
  }

  const totalTickets = 100;
  const numbers = Array.from({ length: totalTickets }, (_, i) => i + 1);
  const rows = [];
  //const columns = Math.round(Math.sqrt(totalTickets));
  const columns = 8;

  const sortedTickets = [...raffleData.tickets].sort((a, b) => {
    // Ordena por número de ticket en orden ascendente
    return a.number - b.number;
  });

  for (let i = 0; i < sortedTickets.length; i += columns) {
    const rowNumbers = sortedTickets.slice(i, i + columns);
    rows.push(rowNumbers);
  }

  return (
    <Grid container>
      <Grid container spacing={6}>
        <Grid item xs={12} md={2} className='self-end'>
          <img
            alt='Rifa'
            src='/images/logos/logo_bramen_sin_fondo.png'
            width='130' height='80'
          />
        </Grid>
        <Grid item xs={12} md={10} className='self-end'>
        </Grid>
        <Grid item xs={12} md={6} className='self-end'>
          <Card className='relative overflow-visible sm:mt-6 md:mt-0'>
            <CardContent className='!pbe-0 sm:!pbe-5'>
              <Grid container spacing={6}>
                <Grid item xs={12} sm={8}>
                  <Typography variant='h4' className='mbe-9'>
                    Rifa a beneficio de <span className='font-bold'>{ raffleData.beneficiary }!</span>
                  </Typography>
                  <Typography>
                    { raffleData.description }
                  </Typography>
                  <div className='flex gap-4'> <br /></div>
                  <Typography variant='h4' className='mbe-9'>
                  </Typography>
                  <Divider className='gap-3'></Divider>
                  <Typography variant='h4' className='mbe-9'>
                  </Typography>
                  <Typography variant='h4' className='mbe-9'>
                    Premios
                  </Typography>
                  <Typography>
                    { raffleData.award1 }
                  </Typography>
                  <Typography variant='h6' className='mbe-4'>
                  </Typography>
                  <Typography>
                    { raffleData.award2 }
                  </Typography>
                  <Typography variant='h6' className='mbe-4'>
                  </Typography>
                  <Typography>
                    { raffleData.award3 }
                  </Typography>
                  <div className='flex gap-4'> <br /></div>
                  <Typography variant='h4' className='mbe-9'>
                  </Typography>
                  <Divider className='gap-3'></Divider>
                  <Typography variant='h4' className='mbe-9'>
                  </Typography>
                  <Typography variant='h4' className='mbe-9'>
                    Datos para el pago
                  </Typography>
                  <Typography>
                    { raffleData.payment }
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={4} className='flex justify-center sm:absolute sm:inline-end-11 sm:top-0'>
                  <img
                    alt='Rifa'
                    src='/images/illustrations/characters-with-objects/caricatura_gim.png'
                    className='bs-auto max-is-full max-bs-[189px]'
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} className='self-end'>
          <Card className='relative overflow-visible sm:mt-6 md:mt-0'>
            <CardContent className='!pbe-0 sm:!pbe-5'>
              <div className='flex flex-col gap-5 is-full sm:is-auto md:is-full sm:max-is-[400px] md:max-is-[unset]'>
                <div>
                  <Typography variant='h4'>Seleccione el número para participar</Typography>
                  <Typography variant='h6'>Valor de ticket: 2.000 CLP</Typography>
                </div>
                <table>
                  <tbody>
                    {rows.map((row, rowIndex) => (
                      <tr key={rowIndex}>
                        {row.map((ticket, colIndex) => (
                          <td key={colIndex}>
                            <Fab
                              disabled={ticket.status === 'Pagado' ? true : false}
                              color={ticket.status === 'Reservado' ? 'warning' : 'success'}
                              aria-label='edit'
                              size={'small'}
                              className='flex gap-2 mbe-2 mr-2'
                              id={ticket.id}
                              onClick={ticket.status === 'Activo' ? toggleDrawer(true, ticket.id, ticket.number) : null}
                            >
                              {ticket.number}
                            </Fab>
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className='flex gap-4'> <br /></div>
              <div className='flex gap-4'>
              <Fab color='success' variant='extended'>
                Disponible
              </Fab>
              <Fab color='primary' variant='extended'>
                Reservado
              </Fab>
              <Fab disabled variant='extended'>
                Pagado
              </Fab>
            </div>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
    <div className='plb-12 pis-12'>
    </div>
    <div>
    <Drawer open={openDrawer} onClose={toggleDrawer(false)} anchor='right'>
      <div className='flex justify-center items-center bs-full bg-backgroundPaper !min-is-full p-6 md:!min-is-[unset] md:p-12 md:is-[480px]'>
        <div className='flex flex-col gap-5 is-full sm:is-auto md:is-full sm:max-is-[400px] md:max-is-[unset]'>
          <div>
            <Typography variant='h4'>Reservar ticket Nº {ticketNumber} </Typography>
            <Typography className='mbe-1'>mucha suerte..</Typography>
          </div>
          <form noValidate autoComplete='off' onSubmit={e => e.preventDefault()} className='flex flex-col gap-5'>
            <TextField
              autoFocus
              fullWidth
              label="Rut"
              name="documentNumber"
              value={formData.documentNumber}
              onChange={handleInputChange}
              onBlur={handleInputOnBlur}
              error={formErrors.documentNumber}
              helperText={formErrors.documentNumber ? 'Este campo es obligatorio' : ''}
            />
            <TextField
              autoFocus
              fullWidth
              label="Nombre completo"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              error={formErrors.fullName}
              disabled={isTextFieldsDisabled}
              helperText={formErrors.fullName ? 'Este campo es obligatorio' : ''}
            />
            <TextField
              autoFocus
              fullWidth
              label="Teléfono"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              error={formErrors.phone}
              disabled={isTextFieldsDisabled}
              helperText={formErrors.phone ? 'Este campo es obligatorio' : ''}
            />
            <TextField
              fullWidth
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              error={formErrors.email}
              disabled={isTextFieldsDisabled}
              helperText={formErrors.email ? 'Este campo es obligatorio' : ''}
            />
            <TextField
              fullWidth
              label="Confirmar Email"
              name="confirmEmail"
              value={formData.confirmEmail}
              onChange={handleInputChange}
              error={formErrors.confirmEmail}
              disabled={isTextFieldsDisabled}
              helperText={
                formErrors.confirmEmail
                  ? 'Este campo es obligatorio o los correos no coinciden'
                  : ''
              }
            />
            <Grid container spacing={6}>
              <Grid item xs={12} md={6} className='self-end'>
                <Button fullWidth variant='contained' type='submit' onClick={handleCancel}>
                  Cancelar
                </Button>
              </Grid>
              <Grid item xs={12} md={6} className='self-end'>
                <Button fullWidth variant='contained' type='submit' onClick={handleBooking}>
                  Reservar
                </Button>
              </Grid>
            </Grid>
          </form>
          <div>
            <Typography className='mbe-1'>
              La reserva del número sólo permanecerá vigente por algunos días y durante ese período debe realizarse el pago. El pago debe ser notificado al contacto que se visualiza en la descripción de la rifa. Finalmente, cuando se haya validado el pago se marcará el número como pagado y se enviará un correo con la información correspondiente.
            </Typography>
          </div>
        </div>
      </div>
    </Drawer>
  </div>
  <Dialog
    open={openDialog}
    onClose={handleClose}
    aria-labelledby='alert-dialog-title'
    aria-describedby='alert-dialog-description'
    closeAfterTransition={false}
  >
    <DialogTitle id='alert-dialog-title'>Reservación</DialogTitle>
    <DialogContent>
      <DialogContentText id='alert-dialog-description'>
        { dialogMessage }
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={handleClose} variant='contained'>
        Aceptar
      </Button>
    </DialogActions>
  </Dialog>
</Grid>
)
}

export default Book
