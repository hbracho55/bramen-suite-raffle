// MUI Imports
import { MenuItem } from '@/@menu/horizontal-menu/index'
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  Select,
  TextField
} from '../../../../node_modules/@mui/material/index'

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

const RegisterRequest = () => {
  const buttonProps = (children, color, variant) => ({
    children,
    color,
    variant
  })

  const handleReset = () => {}

  return (
    <>
      <Card className='mb-6'>
        <CardContent sx={{ padding: '8px' }} className='p-6 bg-actionHover rounded'>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={7}>
              <div className='flex items-center flex-wrap gap-x-1.5'>
                <FormControl variant='standard' fullWidth>
                  <InputLabel id='demo-basic-select-label'>Unidad</InputLabel>
                  <Select
                    label='Age'
                    labelId='demo-basic-select-label'
                    id='demo-basic-select'
                    sx={{ width: '500px' }}
                    defaultValue=''
                  >
                    <MenuItem value={10}>Integración</MenuItem>
                    <MenuItem value={20}>Bigdata</MenuItem>
                    <MenuItem value={30}>Canales</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className='flex items-center flex-wrap gap-x-1.5'>
                <FormControl variant='standard' fullWidth>
                  <InputLabel id='demo-basic-select-label'>Servicio</InputLabel>
                  <Select
                    label='Age'
                    labelId='demo-basic-select-label'
                    id='demo-basic-select'
                    sx={{ width: '500px' }}
                    defaultValue=''
                  >
                    <MenuItem value={10}>Desarrollo de funcionalidad</MenuItem>
                    <MenuItem value={20}>Análisis de problema</MenuItem>
                    <MenuItem value={30}>Diseño de solución</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl variant='standard' fullWidth>
                <InputLabel id='demo-basic-select-label'>Producto</InputLabel>
                <Select
                  label='Age'
                  labelId='demo-basic-select-label'
                  id='demo-basic-select'
                  sx={{ width: '500px' }}
                  defaultValue=''
                >
                  <MenuItem value={10}>Web Personas</MenuItem>
                  <MenuItem value={20}>App Pyme</MenuItem>
                  <MenuItem value={30}>Web Wholesale</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl variant='standard' fullWidth>
                <InputLabel id='demo-basic-select-label'>Solicitante</InputLabel>
                <Select
                  label='Age'
                  labelId='demo-basic-select-label'
                  id='demo-basic-select'
                  sx={{ width: '500px' }}
                  defaultValue=''
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl variant='standard' fullWidth>
                <InputLabel id='demo-basic-select-label'>Beneficiario</InputLabel>
                <Select
                  label='Age'
                  labelId='demo-basic-select-label'
                  id='demo-basic-select'
                  sx={{ width: '500px' }}
                  defaultValue=''
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl variant='standard' fullWidth>
                <InputLabel id='demo-basic-select-label'>Ubicación</InputLabel>
                <Select
                  label='Age'
                  labelId='demo-basic-select-label'
                  id='demo-basic-select'
                  sx={{ width: '500px' }}
                  defaultValue=''
                >
                  <MenuItem value={10}>Edificio A</MenuItem>
                  <MenuItem value={20}>Edificio B</MenuItem>
                  <MenuItem value={30}>Edificio C</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                fullWidth
                id='standard-basic'
                label='Teléfono'
                sx={{ width: '150px' }}
                type='number'
                variant='standard'
              />
            </Grid>
            <Grid item xs={12} sm={10}>
              <TextField fullWidth id='standard-basic' label='Resumen de solicitud' variant='standard' />
            </Grid>
            <Grid item xs={12} sm={10}>
              <TextField
                fullWidth
                rows={3}
                multiline
                label='Descripción de solicitud'
                variant='standard'
                defaultValue=''
                id='textarea-standard-static'
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <FormControl variant='standard' fullWidth>
                <InputLabel id='demo-basic-select-label'>Tipo de Solicitud</InputLabel>
                <Select
                  label='Age'
                  labelId='demo-basic-select-label'
                  id='demo-basic-select'
                  sx={{ width: '200px' }}
                  defaultValue=''
                >
                  <MenuItem value={10}>Requerimiento</MenuItem>
                  <MenuItem value={20}>Incidente</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={3}>
              <FormControl variant='standard' fullWidth>
                <InputLabel id='demo-basic-select-label'>Prioridad</InputLabel>
                <Select
                  label='Age'
                  labelId='demo-basic-select-label'
                  id='demo-basic-select'
                  sx={{ width: '200px' }}
                  defaultValue=''
                >
                  <MenuItem value={10}>Urgente</MenuItem>
                  <MenuItem value={20}>Alta</MenuItem>
                  <MenuItem value={30}>Media</MenuItem>
                  <MenuItem value={40}>Baja</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControlLabel label='Marcar como borrador' control={<Checkbox name='basic-checked' />} />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <CardActions>
          <Button type='submit' variant='contained' className='mie-2'>
            Registrar
          </Button>
          <Button type='submit' variant='contained' className='mie-2'>
            Registrar y Atender
          </Button>
          <Button type='reset' variant='outlined'>
            Limpiar
          </Button>
        </CardActions>
      </Card>
    </>
  )
}

export default RegisterRequest
