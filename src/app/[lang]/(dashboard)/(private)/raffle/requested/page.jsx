// Data Imports
import { getRequestData } from '@/app/server/actions'
import RequestedRequestListTable from '@/views/apps/request/list/RequestedRequestListTable'
import { Typography } from '@mui/material'

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
const RequestedRequestListTablePage = async () => {
  // Vars
  const data = await getRequestData()

  return (
    <div>
      <div className='flex flex-col items-left gap-4'>
        <div className='flex flex-col items-left text-left'>
          <Typography variant='h4'>Solicitudes creadas</Typography>
        </div>
      </div>
      <RequestedRequestListTable requestData={data?.request} />
    </div>
  )
}

export default RequestedRequestListTablePage
