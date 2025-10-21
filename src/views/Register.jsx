'use client'

// React Imports
import React, { useEffect, useState } from 'react'

//import { db as ticketsData } from '@/fake-db/apps/raffle'
import Book from './Book'

const getRaffleData = async () => {
  // Vars
  try {
    const res = await fetch(`http://rifabramen.ddns.net:4200/api/raffles/12d179fc-ab9b-43c3-928e-9dc064bdd98e`, {
      headers: {
        Accept: 'application/json'
      }
    })
    if (!res.ok) throw new Error('Failed to fetch tickets data')
    const data = await res.json()
    return data
  } catch (error) {
    console.error('Failed to fetch tickets data: ', error)
    return []
  }
}

const RegisterV2 = () => {

  const [raffleData, setRaffleData] = useState([])

  const fetchRaffleData = async () => {
    const data = await getRaffleData();
    setRaffleData(data);
  };

  useEffect(() => {
    fetchRaffleData();
  }, []);

  return (
    <Book raffleData={raffleData} refreshData={fetchRaffleData}/>
)
}

export default RegisterV2
