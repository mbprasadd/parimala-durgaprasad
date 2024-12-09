import React from 'react'
import { Button, EventDetailCard, GoogleMapLocation } from '../../components'
import styles from './styles.module.css'

const EventDetails = () => {
  const venueUrl =
    'https://www.google.com/maps/place/Velpur+Rd,+Tanuku,+Andhra+Pradesh/@16.744639,81.6773544,1243m/data=!3m1!1e3!4m6!3m5!1s0x3a37b7e2ab620641:0xfd8d32ce2cdd175c!8m2!3d16.7454594!4d81.6791569!16s%2Fg%2F1vd3t69l?entry=ttu&g_ep=EgoyMDI0MTIwNC4wIKXMDSoASAFQAw%3D%3D'
  const eventDetails = [
    {
      name: 'Engagement',
      date: 'Wednesdat, 11th December 2024',
      time: '09:00 - 1:00',
      venue: 'Velpur, Tanuku',
      address:
        'velipur, Tanuku, West Godawari, AP 534211',
    },
    {
      name: 'Lunch',
      date: 'Wednesdat, 11th December 2024',
      time: '01:00 - 03:00',
      venue: 'At Our Home',
      address:
        'velipur, Tanuku, West Godawari, AP 534211',
    },
  ]

  return (
    <div>
      <div className={styles.container}>
        <div>
          <p className={styles.youThere}>WE WANT YOU THERE!</p>
          <p className={styles.joinUs}>Join our happy moment</p>
          <div className={styles.eventContainer}>
            {eventDetails.map((item, idx) => {
              return (
                <EventDetailCard
                  eventName={item.name}
                  eventDate={item.date}
                  eventTime={item.time}
                  eventVenue={item.venue}
                  venueAddress={item.address}
                  key={idx}
                />
              )
            })}
          </div>
        </div>
      </div>
      <div className={styles.location}>
        <div>
          <GoogleMapLocation />
        </div>
        <Button text="Location" onClick={() => window.open(venueUrl)} />
      </div>
    </div>
  )
}

export default EventDetails
