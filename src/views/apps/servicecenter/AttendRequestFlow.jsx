'use client'

// React Imports
import { useState } from 'react'

// MUI Imports
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Divider from '@mui/material/Divider'
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormLabel from '@mui/material/FormLabel'
import Grid from '@mui/material/Grid'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import Select from '@mui/material/Select'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

// Component Imports
import CustomInputHorizontal from '@core/components/custom-inputs/Horizontal'
import { Card, CardContent, CardHeader } from '../../../../node_modules/@mui/material/index'

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

const AttendRequestFlow = () => {
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
        <CardHeader title='Próxima actividad a realizar' sx={{ padding: '6px' }} />
        <Divider />
        <CardContent sx={{ padding: '8px' }} className='p-6 bg-actionHover rounded'>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={12}>
              <Accordion expanded={expanded === 'panel1'} onChange={handleExpandChange('panel1')}>
                <AccordionSummary className='plb-0'>
                  <Typography color='text.primary'>Flujo de Trabajo</Typography>
                </AccordionSummary>
                <Divider />
                <AccordionDetails className='!pbs-5'>
                  <Grid container spacing={5}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label='Full Name'
                        placeholder='John Doe'
                        value={cardData.fullName}
                        onChange={e => setCardData({ ...cardData, fullName: e.target.value })}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label='Phone No.'
                        placeholder='123-456-7890'
                        value={cardData.phone}
                        onChange={e => setCardData({ ...cardData, phone: e.target.value })}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        rows={4}
                        multiline
                        label='Address'
                        placeholder='1456, Liberty Street'
                        value={cardData.address}
                        onChange={e => setCardData({ ...cardData, address: e.target.value })}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        type='number'
                        label='ZIP Code'
                        placeholder='10005'
                        value={cardData.zipCode}
                        onChange={e => setCardData({ ...cardData, zipCode: e.target.value })}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label='Landmark'
                        placeholder='Nr Wall Street'
                        value={cardData.landmark}
                        onChange={e => setCardData({ ...cardData, landmark: e.target.value })}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label='City'
                        placeholder='New York'
                        value={cardData.city}
                        onChange={e => setCardData({ ...cardData, city: e.target.value })}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <FormControl fullWidth>
                        <InputLabel>Country</InputLabel>
                        <Select
                          label='Country'
                          value={cardData.country}
                          onChange={e => setCardData({ ...cardData, country: e.target.value })}
                        >
                          <MenuItem value='UK'>UK</MenuItem>
                          <MenuItem value='USA'>USA</MenuItem>
                          <MenuItem value='Australia'>Australia</MenuItem>
                          <MenuItem value='Germany'>Germany</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                      <FormLabel>Address Type</FormLabel>
                      <RadioGroup
                        row
                        name='radio-buttons-group'
                        defaultValue='home'
                        onChange={e => setCardData({ ...cardData, addressType: e.target.value })}
                      >
                        <FormControlLabel value='home' control={<Radio />} label='Home (All day delivery)' />
                        <FormControlLabel
                          value='office'
                          control={<Radio />}
                          label='Office (Delivery between 10 AM - 5 PM)'
                        />
                      </RadioGroup>
                    </Grid>
                  </Grid>
                </AccordionDetails>
              </Accordion>

              <Accordion expanded={expanded === 'panel2'} onChange={handleExpandChange('panel2')}>
                <AccordionSummary expandIcon={<i className='ri-arrow-down-s-line' />}>
                  <Typography color='text.primary'>Actividad de la Unidad</Typography>
                </AccordionSummary>
                <Divider />
                <AccordionDetails className='!pbs-5'>
                  <Grid container>
                    {data.map((item, index) => (
                      <CustomInputHorizontal
                        type='radio'
                        key={index}
                        data={item}
                        gridProps={{
                          xs: 12,
                          className:
                            '[&:first-of-type>*]:rounded-be-none [&:last-of-type>*]:rounded-bs-none [&:nth-of-type(2)>*]:rounded-none'
                        }}
                        selected={selectedOption}
                        name='custom-radios-basic'
                        handleChange={handleOptionChange}
                      />
                    ))}
                  </Grid>
                </AccordionDetails>
              </Accordion>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  )
}

export default AttendRequestFlow
