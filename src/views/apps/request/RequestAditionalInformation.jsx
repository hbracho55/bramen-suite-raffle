'use client'

// React Imports
import { useState } from 'react'

// MUI Imports
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// Component Imports
import { Card, CardContent, CardHeader, FormControl, Select } from '../../../../node_modules/@mui/material/index'
import RequestWorkFlowTable from './list/RequestWorkFlowTable'

// Vars
const data = [
  {
    title: 'Standard 3-5 Days',
    meta: 'Free',
    content: 'Friday, 15 Nov - Monday, 18 Nov',
    isSelected: true,
    value: 'standard'
  },
  {
    title: 'Express',
    meta: '$5.00',
    content: 'Friday, 15 Nov - Sunday, 17 Nov',
    value: 'express'
  },
  {
    title: 'Overnight',
    meta: '$10.00',
    content: 'Friday, 15 Nov - Saturday, 16 Nov',
    value: 'overnight'
  }
]

const RequestAditionalInformation = ({ customerData }) => {
  // Vars
  const initialSelectedOption = data.filter(item => item.isSelected)[data.filter(item => item.isSelected).length - 1]
    .value

  // States
  const [expanded, setExpanded] = useState('panel1')
  const [paymentMethod, setPaymentMethod] = useState('credit')
  const [selectedOption, setSelectedOption] = useState(initialSelectedOption)

  const [cardData, setCardData] = useState({
    fullName: '',
    phone: '',
    address: '',
    zipCode: '',
    landmark: '',
    city: '',
    country: '',
    addressType: '',
    number: '',
    name: '',
    expiry: '',
    cvv: ''
  })

  const handleExpandChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }

  const handleOptionChange = prop => {
    if (typeof prop === 'string') {
      setSelectedOption(prop)
    } else {
      setSelectedOption(prop.target.value)
    }
  }

  const handleReset = () => {
    setCardData({
      fullName: '',
      phone: '',
      address: '',
      zipCode: '',
      landmark: '',
      city: '',
      country: '',
      addressType: '',
      number: '',
      name: '',
      expiry: '',
      cvv: ''
    })
  }

  return (
    <>
      <Card className='mb-6'>
        <CardHeader title='Información adicional' sx={{ padding: '6px' }} />
        <Divider />
        <CardContent className='p-6 bg-actionHover rounded'>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={12}>
              <Accordion expanded={expanded === 'panel1'} onChange={handleExpandChange('panel1')}>
                <AccordionSummary expandIcon={<i className='ri-arrow-down-s-line' />}>
                  <Typography color='text.primary'>Documentos adjuntos</Typography>
                </AccordionSummary>
                <Divider />
                <AccordionDetails className='!pbs-5'>
                  <Typography className='mbe-2 font-medium' color='text.primary'>
                    Documentos adjuntos
                  </Typography>
                  <FormControl fullWidth>
                    <Select native multiple label='' value='doc1' inputProps={{ id: 'select-multiple-native' }}>
                      <option key={'doc1'} value={'doc1'}>
                        documento1.jpg
                      </option>
                      <option key={'doc2'} value={'doc2'}>
                        documento2.doc
                      </option>
                    </Select>
                  </FormControl>
                </AccordionDetails>
              </Accordion>
              <Accordion expanded={expanded === 'panel2'} onChange={handleExpandChange('panel2')}>
                <AccordionSummary className='plb-0'>
                  <Typography color='text.primary'>Flujo de Trabajo</Typography>
                </AccordionSummary>
                <Divider />
                <AccordionDetails className='!pbs-5'>
                  <RequestWorkFlowTable customerData={customerData} />
                </AccordionDetails>
              </Accordion>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  )
}

export default RequestAditionalInformation
