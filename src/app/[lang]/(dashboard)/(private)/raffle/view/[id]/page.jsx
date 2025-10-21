// MUI Imports
import Grid from '@mui/material/Grid'
import { Typography } from '@mui/material'

import { getEcommerceData } from '@/app/server/actions'
import ViewRequest from '@/views/apps/request/ViewRequest'

// Component Imports

const RequestViewPage = async () => {
  const data = await getEcommerceData()

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <div className='flex flex-col items-left gap-4'>
          <div className='flex flex-col items-left text-left'>
            <Typography variant='h4'>Solicitud 35467</Typography>
          </div>
        </div>
        <ViewRequest customerData={data?.customerData} />
      </Grid>
    </Grid>
  )
}

export default RequestViewPage
