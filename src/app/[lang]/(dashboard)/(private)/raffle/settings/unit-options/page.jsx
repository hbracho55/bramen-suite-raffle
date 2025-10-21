// Component Imports
import UnitOptions from '@/views/apps/request/settings/unit-options/index'
import { Typography } from '@mui/material'

const OptionsUnitPage = async () => {
  return (
    <div>
      <div className='flex flex-col items-left gap-4'>
        <div className='flex flex-col items-left text-left'>
          <Typography variant='h4'>Opciones de Unidad</Typography>
        </div>
      </div>
      <UnitOptions />
    </div>
  )
}

export default OptionsUnitPage
