// MUI Imports
import AttendRequest from '@/views/apps/request/AttendRequest'
import Grid from '@mui/material/Grid'
import { Typography } from '../../../../../../../node_modules/@mui/material/index'

import { getEcommerceData } from '@/app/server/actions'

// Component Imports

const RequestRequestedPage = async () => {
  const data = await getEcommerceData()

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <div className='flex flex-col items-left gap-4'>
          <div className='flex flex-col items-left text-left'>
            <Typography variant='h4'>Atender Solicitud 35467</Typography>
          </div>
        </div>
        <AttendRequest customerData={data?.customerData} />
      </Grid>
    </Grid>
  )
}

export default RequestRequestedPage
