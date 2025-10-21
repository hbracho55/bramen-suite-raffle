// Component Imports
import RegisterRequest from '@/views/apps/request/RegisterRequest'
import { Typography } from '@mui/material'

const RegisterRequestPage = async () => {
  return (
    <div>
      <div className='flex flex-col items-left gap-4'>
        <div className='flex flex-col items-left text-left'>
          <Typography variant='h4'>Registrar solicitud</Typography>
        </div>
      </div>
      <RegisterRequest />
    </div>
  )
}

export default RegisterRequestPage
