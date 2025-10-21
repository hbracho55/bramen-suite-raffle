// MUI Imports
import Grid from '@mui/material/Grid'

// Components Imports
import EffectivenessReport from '@/views/apps/request/dashboard/EffectivenessReport'
import RequestJobs from '@/views/apps/request/dashboard/RequestJobs'
import RequestOverview from '@/views/apps/request/dashboard/RequestOverview'
import RequestResponsibles from '@/views/apps/request/dashboard/RequestResponsibles'
import RequestServiceProducts from '@/views/apps/request/dashboard/RequestServiceProducts'
import TotalRequests from '@/views/apps/request/dashboard/TotalRequests'
import WeeklyRequests from '@/views/apps/request/dashboard/WeeklyRequests'
import WorkerRateWithImage from '@/views/apps/request/dashboard/WorkerRateWithImage'

import { getAcademyData } from '@/app/server/actions'
import RequestGrowth from '@/views/apps/request/dashboard/RequestGrowth'

const DashboardRequest = async () => {
  const data = await getAcademyData()
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} md={5} className='self-end'>
        <RequestGrowth />
      </Grid>
      <Grid item xs={12} sm={6} md={4} className='self-end'>
        <WorkerRateWithImage
          stats='55 atenciones finalizadas'
          title='Trabajador(a) del mes'
          trendNumber='60%'
          chipColor='primary'
          src='/images/illustrations/characters/9.png'
          chipText={`Mes ${new Date().getMonth()}`}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <RequestOverview />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <TotalRequests />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <EffectivenessReport />
      </Grid>
      <Grid item xs={12} md={6}>
        <WeeklyRequests />
      </Grid>
      <Grid item xs={12} md={6}>
        <RequestResponsibles />
      </Grid>
      <Grid item xs={12} md={12}>
        <RequestJobs />
      </Grid>
      <Grid item xs={12} md={12}>
        <RequestServiceProducts courseData={data?.courses} />
      </Grid>
    </Grid>
  )
}

export default DashboardRequest
