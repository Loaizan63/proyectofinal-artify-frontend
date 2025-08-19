import Map, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import convertirCoords from "../services/geoCoding.js";
import { useEffect, useState } from "react"
import { fetchDb } from "../services/fetchDb"

export default function MapBoxGeneral() {
    //direcciones tal y como vienen de la bd
    const [direcciones, setDirecciones] = useState([])
    //coordenadas que el mapa va a renderizar como markers
    const [coords, setCoords] = useState([])
    const [categorias, setCategorias] = useState([])
    const [markerColor, setMarkerColor] = useState("yellow")
    //Configuraciones del mapa
    const ancho = "100%"
    const largo = 600

    //use efect para hacer el fetch de todos los huecos
    //pero solo se guarda las direcciones en el estado local de direcciones
    useEffect(() => {
        let mapInstance = null; // referencia para cleanup 
        async function traerHuecos() {
            try {
                const data = await fetchDb()
                if (data) {
                    setCategorias(data.map(hueco => hueco.categoria));
                    setDirecciones(data.map(hueco => hueco.direccion));
                } else {
                    console.log("No existen huecos que mostrar")
                }
            } catch (error) {
                console.log("Error haciendo fetch de hueco: ", error)
            }
        }
        traerHuecos()


    }, [])
    //use efect para convertir las direcciones guardadas
    //en coordenadas y guardarlas
    useEffect(() => {
        //se llama a la funcion convertirCoords: API de mapbox 
        const convertir = async () => {
            try {
                //array de las direcciones convertidas en coordenadas 
                const nuevaCoords = []
                //tipo de for llamado "for...of" que permite usar el await
                for (let direc of direcciones) {
                    const data = await convertirCoords(direc);
                    if (data) {
                        //se egraga cada coordenada al array si realmente se pudo convertir
                        nuevaCoords.push(data)
                    } else {
                        console.log("data está vacío desde mapbox Example");
                    }
                }
                //seteo local de las coordenadas
                setCoords(nuevaCoords);
            } catch (error) {
                console.log(error);
            }
        };
        convertir();
    }, [direcciones]);
    //use effect para los colores de los marcadores
    useEffect(() => {
        const colores = categorias.map((categoria) => {
            switch (categoria) {
                case "grande":
                    return "red"
                case "mediano":
                    return"yellow" //revisar colores
                case "pequeño":
                    return "blue"

                default:
                    return"blue"
            }
        })
        setMarkerColor(colores)

    }, [categorias])

    //console.log("desde mapBox General", coords)
    //se utiliza para el initial view del mapa 
    const [lng0, lat0] = coords[0] || [-76.53, 3.40];

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
            <div>
               <p>textoooo</p>
            </div>
            {/* Se utiliza un map para lograr recorrer todas las nuevas direcciones en forma de coordenadas
         y mostrar todos los markers. Cada marker tiene un indice propio
         */}

            {

            coords.map(([lng, lat], index) => (
                <Marker
                    key={index}
                    longitude={lng}
                    latitude={lat}
                    color={markerColor[index]} // Puedes cambiar el color del marker aquí
                />
                ))
            }
        </Map >
    );
}
