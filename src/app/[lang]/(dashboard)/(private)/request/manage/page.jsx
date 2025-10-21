// MUI Imports
import FormLayoutsRequestDetails from '@/views/forms/form-layouts/FormLayoutsRequestDetails'
import Grid from '@mui/material/Grid'

// Component Imports

const FormLayouts = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <FormLayoutsRequestDetails />
      </Grid>
    </Grid>
  )
}

export default FormLayouts
