// MUI Imports
import Grid from '@mui/material/Grid'
import NodeListTable from './NodeListTable'

// Component Imports

const NodeList = ({ userData }) => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <NodeListTable tableData={userData} />
      </Grid>
    </Grid>
  )
}

export default NodeList
