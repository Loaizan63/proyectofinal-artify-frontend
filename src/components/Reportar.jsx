import { useState } from "react";
import Map, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import convertirCoords from "../services/geoCoding.js";

export default function Reportar() {
    const [direccion, setDireccion] = useState("");
    const [categoria, setCategoria] = useState("");
    const [observaciones, setObservaciones] = useState("");
    const [title_Mensaje, setTitulo] = useState("");
    const [mensaje_Mensaje, setMensaje] = useState("");
    const [confirmar, setConfirmar] = useState("");
    const [coords, setCoords] = useState(null);
    const [buscandoUbicacion, setBuscandoUbicacion] = useState(false);

    async function buscarUbicacion() {
        if (!direccion) return;
        
        setBuscandoUbicacion(true);
        try {
            const coordenadas = await convertirCoords(direccion);
            if (coordenadas && coordenadas.length === 2) {
                setCoords({
                    longitude: coordenadas[0],
                    latitude: coordenadas[1]
                });
            } else {
                setTitulo("Dirección no encontrada");
                setMensaje("Por favor, verifique que la dirección esté escrita correctamente.");
            }
        } catch (error) {
            console.log("Error buscando ubicación:", error);
        }
        setBuscandoUbicacion(false);
    }

    async function handleSubmit(e) {
        e.preventDefault();

        const huecoData = { direccion, categoria, observaciones };
        try {
            const API_ROOT = (import.meta?.env?.VITE_API_ROOT || 'https://loaiza.cloud/secuvia/backend-php/index.php').replace(/\/$/, '')
            const res = await fetch(`${API_ROOT}/api/huecos/`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(huecoData)
            });
            
            if(res.status==201){
                setTitulo(`Reporte enviado exitosamente`)
                setConfirmar(`El reporte de hueco ${categoria} en ${direccion} ha sido registrado`)
                setMensaje(`Gracias por contribuir a mejorar las vías de nuestra ciudad.`)
                setCoords(null);
                setDireccion("");
                setCategoria("");
                setObservaciones("");
            }
            const data = await res.json();
        } catch (error) {
            setTitulo(`Error en el envío`)
            setConfirmar(`No se pudo procesar el reporte en este momento`)
            setMensaje(`Por favor, intente nuevamente más tarde.`)
            console.log(error)
        }
    }

    return (
        <>
            <section id="reportar_dad" className="section-shell">
                <div className="form-shell">
                    <div id="form_dad" className="form-card">
                        <form onSubmit={handleSubmit}>
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <div>
                                    <span className="pill-label">Nuevo reporte</span>
                                    <h4 className="mb-1">Reportar un hueco</h4>
                                    <p className="text-muted mb-0">Por favor, proporcione la dirección exacta, categoría y observaciones para ayudarnos a priorizar.</p>
                                </div>
                            </div>
                            
                            <div className="mb-3">
                                <label htmlFor="direccion" className="form-label fw-semibold">Dirección</label>
                                <div className="d-flex gap-2">
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        id="direccion" 
                                        placeholder="Ingrese la dirección del hueco" 
                                        value={direccion} 
                                        onChange={(e) => setDireccion(e.target.value)} 
                                        required
                                    />
                                    <button 
                                        type="button" 
                                        className="btn btn-outline-secondary" 
                                        onClick={buscarUbicacion}
                                        disabled={!direccion || buscandoUbicacion}
                                    >
                                        {buscandoUbicacion ? "Buscando..." : "Ver en mapa"}
                                    </button>
                                </div>
                            </div>

                            {coords && (
                                <div className="mb-3">
                                    <label className="form-label fw-semibold">Vista previa de ubicación</label>
                                    <div style={{ height: '300px', borderRadius: '8px', overflow: 'hidden' }}>
                                        <Map
                                            mapboxAccessToken="pk.eyJ1Ijoic2ViMTAxMSIsImEiOiJjbWUydDVxZnUwdHV4Mmtwa3Q0b2FmdWFiIn0.4-Hb5WmIe21pLf3-clWYnw"
                                            initialViewState={{
                                                longitude: coords.longitude,
                                                latitude: coords.latitude,
                                                zoom: 16
                                            }}
                                            style={{ width: '100%', height: '100%' }}
                                            mapStyle="mapbox://styles/mapbox/streets-v12"
                                        >
                                            <Marker
                                                longitude={coords.longitude}
                                                latitude={coords.latitude}
                                                color={categoria === 'grande' ? 'red' : categoria === 'mediano' ? 'orange' : 'yellow'}
                                            />
                                        </Map>
                                    </div>
                                </div>
                            )}

                            <div className="mb-3">
                                <label htmlFor="categoria" className="form-label fw-semibold">Categoría</label>
                                <select className="form-select" id="categoria" name="categoria" value={categoria} onChange={(e)=>setCategoria(e.target.value)} required>
                                    <option value="">Selecciona una categoría</option>
                                    <option value="grande">Grande</option>
                                    <option value="mediano">Mediano</option>
                                    <option value="pequeño">Pequeño</option>
                                </select>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="observaciones" className="form-label fw-semibold">Observaciones</label>
                                <textarea className="form-control" id="observaciones" rows="3" placeholder="Proporcione detalles sobre el hueco reportado..." value={observaciones} onChange={(e)=> setObservaciones(e.target.value)} required></textarea>
                            </div>

                            <button type="submit" className="btn btn-pill btn-contrast w-100">Enviar reporte</button>

                        </form>
                    </div>
                    <div className="feedback-card">
                        <p className="pill-label" style={{ marginBottom: "1rem" }}>Estado del envío</p>
                        <h2 style={{ margin: 0 }}>{title_Mensaje}</h2>
                        <h4 style={{ margin: "0.25rem 0" }}>{confirmar}</h4>
                        <p style={{ marginTop: "0.5rem" }}>{mensaje_Mensaje}</p>
                    </div>
                </div>

            </section>
        </>
    )
}