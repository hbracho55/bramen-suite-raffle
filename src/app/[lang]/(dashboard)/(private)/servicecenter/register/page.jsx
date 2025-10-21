// Component Imports

// Data Imports
import { getUserData } from '@/app/server/actions'
import ServiceCenterListTable from '@/views/apps/servicecenter/list/ServiceCenterListTable'
import { Typography } from '../../../../../../../node_modules/@mui/material/index'

/**
 * ! If you need data using an API call, uncomment the below API code, update the `process.env.API_URL` variable in the
 * ! `.env` file found at root of your project and also update the API endpoints like `/apps/user-list` in below example.
 * ! Also, remove the above server action import and the action itself from the `src/app/server/actions.ts` file to clean up unused code
 * ! because we've used the server action for getting our static data.
 */
/* const getUserData = async () => {
  // Vars
  const res = await fetch(`${process.env.API_URL}/apps/user-list`)

  if (!res.ok) {
    throw new Error('Failed to fetch userData')
  }

  return res.json()
} */
const ServiceCenterRegisterPage = async () => {
  // Vars
  const data = await getUserData()

  return (
    <div>
      <div className='flex flex-col items-left gap-4'>
        <div className='flex flex-col items-left text-left'>
          <Typography variant='h4'>Registrar Centro de Servicios</Typography>
        </div>
      </div>
      <ServiceCenterListTable tableData={data} />
    </div>
  )
}

export default ServiceCenterRegisterPage
