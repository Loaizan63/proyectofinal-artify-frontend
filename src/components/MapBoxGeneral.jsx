import Map, { Marker, Popup } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import convertirCoords from "../services/geoCoding.js";
import { useEffect, useState } from "react"
import { fetchDb } from "../services/fetchDb"

export default function MapBoxGeneral() {
    //direcciones tal y como vienen de la bd
    const [huecos, setHuecos] = useState([])
    const [coords, setCoords] = useState([])
    const [selectedHueco, setSelectedHueco] = useState(null)
    //Configuraciones del mapa
    const ancho = "100%"
    const largo = 600

    //use efect para hacer el fetch de todos los huecos
    useEffect(() => {
        async function traerHuecos() {
            try {
                const data = await fetchDb()
                if (data) {
                    setHuecos(data)
                } else {
                    console.log("No existen huecos que mostrar")
                }
            } catch (error) {
                console.log("Error haciendo fetch de hueco: ", error)
            }
        }
        traerHuecos()

    }, [])
    
    //use efect para convertir las direcciones guardadas en coordenadas
    useEffect(() => {
        const convertir = async () => {
            try {
                const nuevaCoords = []
                for (let hueco of huecos) {
                    const data = await convertirCoords(hueco.direccion);
                    if (data) {
                        nuevaCoords.push({
                            ...hueco,
                            coords: data
                        })
                    }
                }
                setCoords(nuevaCoords);
            } catch (error) {
                console.log(error);
            }
        };
        if (huecos.length > 0) {
            convertir();
        }
    }, [huecos]);

    const getMarkerColor = (categoria) => {
        switch (categoria) {
            case "grande":
                return "red"
            case "mediano":
                return "orange"
            case "pequeño":
                return "blue"
            default:
                return "gray"
        }
    }

    const [lng0, lat0] = coords[0]?.coords || [-76.53, 3.40];

    return (
        <Map
            initialViewState={{
                longitude: lng0,
                latitude: lat0,
                zoom: 13
            }}
            style={{ width: ancho, height: largo }}
            mapStyle="mapbox://styles/mapbox/streets-v11"
            mapboxAccessToken="pk.eyJ1Ijoic2ViMTAxMSIsImEiOiJjbWUydDVxZnUwdHV4Mmtwa3Q0b2FmdWFiIn0.4-Hb5WmIe21pLf3-clWYnw"
        >
            {coords.map((hueco, index) => (
                <Marker
                    key={index}
                    longitude={hueco.coords[0]}
                    latitude={hueco.coords[1]}
                    color={getMarkerColor(hueco.categoria)}
                    onClick={() => setSelectedHueco(hueco)}
                    style={{ cursor: 'pointer' }}
                />
            ))}

            {selectedHueco && (
                <Popup
                    longitude={selectedHueco.coords[0]}
                    latitude={selectedHueco.coords[1]}
                    onClose={() => setSelectedHueco(null)}
                    closeButton={true}
                    closeOnClick={false}
                    anchor="bottom"
                >
                    <div style={{ padding: '0.75rem', minWidth: '250px' }}>
                        <h6 style={{ margin: '0 0 0.5rem 0', color: '#e8edf5' }}>
                            {selectedHueco.direccion}
                        </h6>
                        <p style={{ margin: '0.25rem 0', fontSize: '0.9rem', color: '#9fb3d1' }}>
                            <strong>Categoría:</strong> {selectedHueco.categoria}
                        </p>
                        <p style={{ margin: '0.25rem 0', fontSize: '0.9rem', color: '#9fb3d1' }}>
                            <strong>Observaciones:</strong> {selectedHueco.observaciones}
                        </p>
                        <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.85rem', color: '#9fb3d1' }}>
                            Reportado: {selectedHueco.createdAt}
                        </p>
                    </div>
                </Popup>
            )}
        </Map >
    );
}
