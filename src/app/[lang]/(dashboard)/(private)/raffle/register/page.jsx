
const getTicketsData = async () => {
  // Vars
  try {
    const res = await fetch(`localhost:4200/api/tickets?limit=100&offset=0`, {
      headers: {
        Accept: 'application/json'
      }
    })
    if (!res.ok) throw new Error('Failed to fetch request data')
    const data = await res.json()
    return data
  } catch (error) {
    console.error('Failed to fetch tickets data: ', error)
    return []
  }
}

const RaffleDetailPage = async () => {
  // Vars
  const data = await getTicketsData();
  const data2 = [{nombre: 'Hector'}]
 console.log('en page: ', data)
  return (
    <div>
      <Register data={data2} />
    </div>
  )
}

export default RaffleDetailPage
