import React from 'react'
import { MapContainer, TileLayer, Marker, Tooltip } from 'react-leaflet'
import styles from './styles.module.css'

const GoogleMapLocation = () => {
  return (
    <>
      <MapContainer
        className={styles.mapLocation}
        center={[-6.188749993366775, 106.87747132606388]}
        zoom={17}
        scrollWheelZoom={true}
      >
        <TileLayer
          
          url="https://www.shutterstock.com/image-vector/pin-point-logo-can-be-600nw-1679653036.jpg"
        />
        <Marker position={[-6.188749993366775, 106.87747132606388]}>
          <Tooltip direction="top" offset={[0, -10]} opacity={1} permanent>
            Velpur, Tanuku
          </Tooltip>
        </Marker>
      </MapContainer>
    </>
  )
}

export default GoogleMapLocation
