// Component Imports
import RegisterRequest from '@/views/apps/request/RegisterRequest'
import { Typography } from '../../../../../../../node_modules/@mui/material/index'

const RegisterRequestPage = async () => {
  return (
    <div>
      <div className='flex flex-col items-left gap-4'>
        <div className='flex flex-col items-left text-left'>
          <Typography variant='h4'>Registrar Solicitud</Typography>
        </div>
      </div>
      <RegisterRequest />
    </div>
  )
}

export default RegisterRequestPage
