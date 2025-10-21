// MUI Imports
import Divider from '@mui/material/Divider'
import { Card, CardContent, CardHeader, Grid, TextField } from '../../../../node_modules/@mui/material/index'

// Component Imports

// Vars
const userData = {
  firstName: 'Seth',
  lastName: 'Hallam',
  userName: '@shallamb',
  billingEmail: 'shallamb@gmail.com',
  status: 'active',
  role: 'Subscriber',
  taxId: 'Tax-8894',
  contact: '+1 (234) 464-0600',
  language: ['English'],
  country: 'France',
  useAsBillingAddress: true
}

const RequestDetails = () => {
  const buttonProps = (children, color, variant) => ({
    children,
    color,
    variant
  })

  return (
    <>
      <Card className='mb-6'>
        <CardHeader title='Detalle de Solicitud' sx={{ padding: '6px' }} />
        <Divider />
        <CardContent sx={{ padding: '8px' }} className='p-6 bg-actionHover rounded'>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6}>
              <TextField
                id='standard-basic'
                InputProps={{ readOnly: true }}
                size='small'
                label='Nro Solicitud'
                defaultValue='31234'
                variant='standard'
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id='standard-basic'
                InputProps={{ readOnly: true }}
                size='small'
                sx={{ width: '200px' }}
                label='Estado'
                defaultValue='En Proceso'
                variant='standard'
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id='standard-basic'
                InputProps={{ readOnly: true }}
                size='small'
                sx={{ width: '500px' }}
                label='Solicitante'
                defaultValue='Eduardo Jose Gonzalez Moran'
                variant='standard'
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id='standard-basic'
                InputProps={{ readOnly: true }}
                size='small'
                sx={{ width: '500px' }}
                label='Unidad'
                defaultValue='Gerencia de Integración'
                variant='standard'
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id='standard-basic'
                InputProps={{ readOnly: true }}
                size='small'
                sx={{ width: '500px' }}
                label='Beneficiario'
                defaultValue='Maria Laura Mendoza Teran'
                variant='standard'
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id='standard-basic'
                InputProps={{ readOnly: true }}
                sx={{ width: '500px' }}
                size='small'
                label='Servicio'
                defaultValue='Atención de incidencias/problemas'
                variant='standard'
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id='standard-basic'
                InputProps={{ readOnly: true }}
                size='small'
                sx={{ width: '500px' }}
                label='Unidad Solicitante'
                defaultValue='Unidad de BigData'
                variant='standard'
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id='standard-basic'
                InputProps={{ readOnly: true }}
                size='small'
                sx={{ width: '500px' }}
                label='Producto'
                defaultValue='Web Personas'
                variant='standard'
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id='standard-basic'
                InputProps={{ readOnly: true }}
                size='small'
                sx={{ width: '500px' }}
                label='Ubicación'
                defaultValue='Edificio Sede Principal'
                variant='standard'
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id='standard-basic'
                InputProps={{ readOnly: true }}
                size='small'
                sx={{ width: '500px' }}
                label='Prioridad'
                defaultValue='Alta'
                variant='standard'
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id='standard-basic'
                InputProps={{ readOnly: true }}
                size='small'
                sx={{ width: '500px' }}
                label='Teléfono'
                defaultValue='33445434'
                variant='standard'
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id='standard-basic'
                InputProps={{ readOnly: true }}
                size='small'
                sx={{ width: '500px' }}
                label='Anexo'
                defaultValue='3434'
                variant='standard'
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                fullWidth
                rows={3}
                InputProps={{ readOnly: true }}
                multiline
                size='small'
                label='Descripción'
                variant='standard'
                defaultValue='Se requiere enriquecer datos del cliente con rut 25516031-1'
                id='textarea-standard-static'
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  )
}

export default RequestDetails
