import Map, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import convertirCoords from "../services/geoCoding.js";
import { useEffect, useState } from "react"

export default function MyMap({ corde, color}) {
  if (!corde) return null;
  const ancho = "100%"
  const largo = 300
  const [coords, setCoords] = useState(null)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    let mapInstance = null; // referencia para cleanup
    const fetchData = async () => {
      try {
        setLoading(true)
        const data = await convertirCoords(corde)
        if (data) {
          setCoords(data)
        } else {
          console.log("data esta vacio desde mapbox Example")
        }
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
    return () => {
      // 🔹 Buscar el canvas WebGL de react-map-gl y destruir el contexto
      const canvas = document.querySelector('canvas.mapboxgl-canvas');
      if (canvas) {
        const gl = canvas.getContext('webgl');
        if (gl) gl.getExtension('WEBGL_lose_context')?.loseContext();
      }
    };
  }, [corde]);
  if (loading) {
    return (
      <div style={{ width: ancho, height: largo, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(255,255,255,0.03)', borderRadius: '8px' }}>
        <div className="spinner-border text-light" role="status">
          <span className="visually-hidden">Cargando mapa...</span>
        </div>
      </div>
    );
  }

  return (
    <Map
      initialViewState={{
        longitude: coords?.[0] || -76.53,
        latitude: coords?.[1] || 3.40,
        zoom: 15
      }}
      style={{ width: ancho, height: largo }}
      mapStyle="mapbox://styles/mapbox/streets-v11"
      mapboxAccessToken="pk.eyJ1Ijoic2ViMTAxMSIsImEiOiJjbWUydDVxZnUwdHV4Mmtwa3Q0b2FmdWFiIn0.4-Hb5WmIe21pLf3-clWYnw"
      attributionControl={false}
    >
      {coords && (
        <Marker longitude={coords[0]} latitude={coords[1]} color={color} />
      )}
    </Map>
  );
}
