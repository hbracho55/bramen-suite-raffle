'use client'

// Component Imports
import SearchRequest from '@/views/apps/request/SearchRequest'
import { Typography } from '@mui/material'

const RegisterRequestPage = async () => {
  return (
    <div>
      <div className='flex flex-col items-left gap-4'>
        <div className='flex flex-col items-left text-left'>
          <Typography variant='h4'>Buscar solicitudes</Typography>
        </div>
      </div>
      <SearchRequest />
    </div>
  )
}

export default RegisterRequestPage
