// MUI Imports
import AttendRequest from '@/views/apps/request/AttendRequest'
import Grid from '@mui/material/Grid'
import { Typography } from '@mui/material'

import { getRequestData } from '@/app/server/actions'

// Component Imports

const RequestAttendPage = async () => {
  const data = await getRequestData()

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <div className='flex flex-col items-left gap-4'>
          <div className='flex flex-col items-left text-left'>
            <Typography variant='h4'>Atender Solicitud 35467</Typography>
          </div>
        </div>
        <AttendRequest customerData={data?.requestData} />
      </Grid>
    </Grid>
  )
}

export default RequestAttendPage
