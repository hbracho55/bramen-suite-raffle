// MUI Imports
import Divider from '@mui/material/Divider'
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  FormControl,
  FormControlLabel,
  Grid,
  Select,
  TextField,
  Typography
} from '../../../../node_modules/@mui/material/index'
import FileUploader from './FileUploader'

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

const JobInformation = () => {
  const buttonProps = (children, color, variant) => ({
    children,
    color,
    variant
  })

  return (
    <>
      <Card className='mb-6'>
        <CardHeader title='Información de Tarea' sx={{ padding: '6px' }} />
        <Divider />
        <CardContent sx={{ padding: '8px' }} className='p-6 bg-actionHover rounded'>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={7}>
              <TextField
                fullWidth
                rows={3}
                multiline
                label='Nota'
                placeholder='Escriba la nota'
                variant='standard'
                defaultValue=''
                id='textarea-standard-static'
              />
            </Grid>
            <Grid item xs={12} sm={5}>
              <div>
                <Button type='submit' variant='contained' className='mie-2'>
                  Registrar nota
                </Button>
                <Button type='submit' variant='contained' className='mie-2'>
                  Historial de notas
                </Button>
              </div>
              <FormControlLabel
                label='Visible sólo para usuarios de la misma unidad'
                control={<Checkbox name='basic-checked' />}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <Divider sx={{ padding: '20px' }} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography className='mbe-2 font-medium' color='text.primary'>
                Documentos adjuntos
              </Typography>
              <FormControl fullWidth>
                <Select native multiple value='doc1' inputProps={{ id: 'select-multiple-native' }}>
                  <option key={'doc1'} value={'doc1'}>
                    documento1.jpg
                  </option>
                  <option key={'doc2'} value={'doc2'}>
                    documento2.doc
                  </option>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FileUploader />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  )
}

export default JobInformation
