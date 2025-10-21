// Data Imports
import { getEcommerceData } from '@/app/server/actions'
import PendingRequestListTable from '@/views/apps/request/list/PendingRequestListTable'
import { Typography } from '../../../../../../../node_modules/@mui/material/index'

/**
 * ! If you need data using an API call, uncomment the below API code, update the `process.env.API_URL` variable in the
 * ! `.env` file found at root of your project and also update the API endpoints like `/apps/ecommerce` in below example.
 * ! Also, remove the above server action import and the action itself from the `src/app/server/actions.ts` file to clean up unused code
 * ! because we've used the server action for getting our static data.
 */
/* const getEcommerceData = async () => {
  // Vars
  const res = await fetch(`${process.env.API_URL}/apps/ecommerce`)

  if (!res.ok) {
    throw new Error('Failed to fetch ecommerce data')
  }

  return res.json()
} */
const PendingRequestListTablePage = async () => {
  // Vars
  const data = await getEcommerceData()

  return (
    <div>
      <div className='flex flex-col items-left gap-4'>
        <div className='flex flex-col items-left text-left'>
          <Typography variant='h4'>Solicitudes pendientes</Typography>
        </div>
      </div>
      <PendingRequestListTable customerData={data?.customerData} />
    </div>
  )
}

export default PendingRequestListTablePage
