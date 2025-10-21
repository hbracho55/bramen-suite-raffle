// React Imports
import { useEffect, useState } from 'react'

// MUI Imports
import LinearProgress from '@mui/material/LinearProgress'
import Typography from '@mui/material/Typography'

const ProgressBar = () => {
  // States
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(oldProgress => {
        if (oldProgress === 100) {
          return 0
        }
        const diff = Math.random() * 10

        return Math.min(oldProgress + diff, 100)
      })
    }, 500)

    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <>
      <div className='mbe-4'>
        <Typography className='font-medium mbe-1.5' color='text.primary'>
          SLA 40%
        </Typography>
        <LinearProgress variant='determinate' color='error' value={40} />{' '}
      </div>
    </>
  )
}

export default ProgressBar
