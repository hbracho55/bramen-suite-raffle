// MUI Imports
import Grid from '@mui/material/Grid'
import GroupListTable from './GroupListTable'

// Component Imports

const GroupList = ({ userData }) => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <GroupListTable tableData={userData} />
      </Grid>
    </Grid>
  )
}

export default GroupList
