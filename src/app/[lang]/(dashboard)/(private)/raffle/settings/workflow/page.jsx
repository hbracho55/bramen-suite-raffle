// Component Imports
import UnitOptions from '@/views/apps/request/settings/UnitOptions2'
import { Typography } from '@mui/material'

const WorkFlowPage = async () => {
  return (
    <div>
      <div className='flex flex-col items-left gap-4'>
        <div className='flex flex-col items-left text-left'>
          <Typography variant='h4'>Flujos de Trabajo</Typography>
        </div>
      </div>
      <UnitOptions />
    </div>
  )
}

export default WorkFlowPage
