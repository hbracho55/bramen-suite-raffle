'use client'

// React Imports
import { useState } from 'react'
import React from 'react'

// Next Imports
import { useParams } from 'next/navigation'

// MUI Imports
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'

// Hook Imports
import { useImageVariant } from '@core/hooks/useImageVariant'
import { useSettings } from '@core/hooks/useSettings'

// Style Imports
import tableStyles from '@core/styles/table.module.css'

const Tickets = ({ raffleData, refreshData }) => {
  // States
  const [ticketId, setTicketId] = React.useState('');
  const [ticketNumber, setTicketNumber] = React.useState(0);

  // Vars
  const darkImg = '/images/pages/auth-v2-mask-dark.png'
  const lightImg = '/images/pages/auth-v2-mask-light.png'

  // Verifica si los datos están disponibles
  if (!raffleData || !raffleData.tickets || !Array.isArray(raffleData.tickets)) {
    return <Typography>Cargando datos...</Typography>; // Muestra un mensaje de carga
  }

  const handleUpdateTicket = async (ticketId, newStatus, playerData) => {
    try {
      const res = await fetch(`http://rifabramen.ddns.net:4200/api/manage-raffle-orq/tickets/${ticketId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          status: newStatus, // Estado dinámico seleccionado
          player: {
            personalId: playerData.personalId,
            name: playerData.name,
            email: playerData.email,
            phone: playerData.phone,
          },
          raffle: {
            id: '12d179fc-ab9b-43c3-928e-9dc064bdd98e', // ID de la rifa
          },
        }),
      });

      if (!res.ok) {
        throw new Error('Error al actualizar el ticket');
      }

      const data = await res.json();
      console.log('Ticket actualizado:', data);

      // Refresca los datos después de la actualización
      refreshData();
    } catch (error) {
      console.error('Error al actualizar el ticket:', error);
    }
  };

  const handleUpdateWinner = async (ticketId, winnerField, isWinner, playerData) => {
    try {
      const res = await fetch(`http://rifabramen.ddns.net:4200/api/manage-raffle-orq/tickets/${ticketId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          [winnerField]: isWinner,
          player: {
            personalId: playerData.personalId,
            name: playerData.name,
            email: playerData.email,
            phone: playerData.phone,
          },
          raffle: {
            id: '12d179fc-ab9b-43c3-928e-9dc064bdd98e', // ID de la rifa
          },
        }),
      });

      if (!res.ok) {
        throw new Error('Error al actualizar el ganador del ticket');
      }

      const data = await res.json();
      refreshData();
    } catch (error) {
      console.error(`Error al actualizar ${winnerField} del ticket:`, error);
    }
  };

  return (
    <Grid container>
      <Grid container spacing={6}>
        <Grid item xs={12} md={2} className='self-end'>
          <img
            alt='Rifa'
            src='/images/logos/logo_bramen_sin_fondo.png'
            width='130' height='80'
          />
        </Grid>
        <Grid item xs={12} md={10} className='self-end'>
          <Typography variant='h3'><span className='font-bold'>Tickets</span>
          </Typography>
        </Grid>
        <Grid item xs={12} md={12} className='self-end'>
          <Card className='relative overflow-visible sm:mt-6 md:mt-0'>
            <CardContent className='!pbe-0 sm:!pbe-5'>
              <div className='overflow-x-auto'>
                <table className={tableStyles.table}>
                  <thead>
                      <tr >
                          <th>
                            Nro
                          </th>
                          <th>
                            Jugador
                          </th>
                          <th>
                            Email
                          </th>
                          <th>
                            Telefono
                          </th>
                          <th>
                            Estado
                          </th>
                          <th>
                            1er Ganador
                          </th>
                          <th>
                            2do Ganador
                          </th>
                          <th>
                            3er Ganador
                          </th>
                          <th>
                            Cambiar Estado
                          </th>
                          <th>1er Premio</th>
                          <th>2do Premio</th>
                          <th>3er Premio</th>
                      </tr>
                  </thead>
                    <tbody>
                      {raffleData.tickets
                      .slice() // Crea una copia para no modificar el arreglo original
                      .sort((a, b) => {
                        // Ordena por player.number en orden ascendente
                        const numberA = a.number || 0; // Si player o number es null, usa 0
                        const numberB = b.number || 0;
                        return numberA - numberB;
                      })
                      .map((ticket, ticketIndex) => (
                        <tr key={ticketIndex}>
                                <td>{ticket.number}</td>
                                <td>{ticket.player?.name ?? ''}</td>
                                <td>{ticket.player?.email ?? ''}</td>
                                <td>{ticket.player?.phone ?? ''}</td>
                                <td>
                                  <Typography
                                    sx={{
                                      color:
                                        ticket.status === 'Activo'
                                          ? 'green'
                                          : ticket.status === 'Reservado'
                                          ? 'orange'
                                          : 'red',
                                    }}
                                  >
                                    {ticket.status}
                                  </Typography>
                                </td>
                                <td>
                                  <Typography
                                    sx={{
                                      color:
                                        ticket.winner1 === true
                                          ? 'green'
                                          : null,
                                    }}
                                  >
                                    {ticket.winner1 === true ? 'Ganador' : ''}
                                  </Typography>
                                </td>
                                <td>
                                  <Typography
                                    sx={{
                                      color:
                                        ticket.winner2 === true
                                          ? 'green'
                                          : null,
                                    }}
                                  >
                                    {ticket.winner2 === true ? 'Ganador' : ''}
                                  </Typography>
                                </td>
                                <td>
                                  <Typography
                                    sx={{
                                      color:
                                        ticket.winner3 === true
                                          ? 'green'
                                          : null,
                                    }}
                                  >
                                    {ticket.winner3 === true ? 'Ganador' : ''}
                                  </Typography>
                                </td>
                                <td>
                                  <select
                                    defaultValue={ticket.status}
                                    onChange={(e) =>
                                      handleUpdateTicket(ticket.id, e.target.value, {
                                        personalId: ticket.player?.personalId ?? '',
                                        name: ticket.player?.name ?? '',
                                        email: ticket.player?.email ?? '',
                                        phone: ticket.player?.phone ?? '',
                                      })
                                    }
                                    style={{
                                      padding: '5px',
                                      borderRadius: '4px',
                                      border: '1px solid #ccc',
                                      cursor: 'pointer',
                                    }}
                                  >
                                    <option value="Activo">Activo</option>
                                    <option value="Reservado">Reservado</option>
                                    <option value="Pagado">Pagado</option>
                                  </select>
                                </td>
                                <td>
                                  <select
                                    defaultValue={ticket.winner1}
                                    onChange={(e) =>
                                      handleUpdateWinner(ticket.id, 'winner1', e.target.value === 'true', {
                                        personalId: ticket.player?.personalId ?? '',
                                        name: ticket.player?.name ?? '',
                                        email: ticket.player?.email ?? '',
                                        phone: ticket.player?.phone ?? '',
                                      })
                                    }
                                    style={{
                                      padding: '5px',
                                      borderRadius: '4px',
                                      border: '1px solid #ccc',
                                      cursor: 'pointer',
                                    }}
                                  >
                                    <option value={true}>Sí</option>
                                    <option value={false}>No</option>
                                  </select>
                                </td>
                                <td>
                                  <select
                                    defaultValue={ticket.winner2 ? true : false}
                                    onChange={(e) =>
                                      handleUpdateWinner(ticket.id, 'winner2', e.target.value === 'true', {
                                        personalId: ticket.player?.personalId ?? '',
                                        name: ticket.player?.name ?? '',
                                        email: ticket.player?.email ?? '',
                                        phone: ticket.player?.phone ?? '',
                                      })
                                    }
                                    style={{
                                      padding: '5px',
                                      borderRadius: '4px',
                                      border: '1px solid #ccc',
                                      cursor: 'pointer',
                                    }}
                                  >
                                    <option value={true}>Sí</option>
                                    <option value={false}>No</option>
                                  </select>
                                </td>
                                <td>
                                  <select
                                    defaultValue={ticket.winner3 ? true : false}
                                    onChange={(e) =>
                                      handleUpdateWinner(ticket.id, 'winner3', e.target.value === 'true', {
                                        personalId: ticket.player?.personalId ?? '',
                                        name: ticket.player?.name ?? '',
                                        email: ticket.player?.email ?? '',
                                        phone: ticket.player?.phone ?? '',
                                      })
                                    }
                                    style={{
                                      padding: '5px',
                                      borderRadius: '4px',
                                      border: '1px solid #ccc',
                                      cursor: 'pointer',
                                    }}
                                  >
                                    <option value={true}>Sí</option>
                                    <option value={false}>No</option>
                                  </select>
                                </td>
                            </tr>
                      ))}
                    </tbody>
                </table>
              </div>

          </CardContent>
        </Card>
      </Grid>
    </Grid>
</Grid>
)
}

export default Tickets
