import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getByID, update, borrar, searchByCloseDir } from "../services/fetchDb";
import { Link } from "react-router-dom";
export default function MisReportes() {
    const { _id } = useParams()
    const [direccion, setDireccion] = useState("");
    const [categoria, setCategoria] = useState("");
    const [observaciones, setObservaciones] = useState("");
    const [busqueda, setBusqueda] = useState("")
    const [resultados, setResultados] = useState([])
    useEffect(() => {
        async function traerPorID() {
            try {
                let hueco = await getByID(_id)
                setDireccion(hueco.direccion)
                setCategoria(hueco.categoria)
                setObservaciones(hueco.observaciones)
            } catch (error) {
                console.error(error)
            }
        }
        traerPorID()
    }, [])
    async function handleUpdate(e) {
        e.preventDefault();
        let huecoNuevo = { _id, direccion, categoria, observaciones }
        let res = await update(huecoNuevo)
        console.log(res)
    }
    async function handleDelete(e) {
        e.preventDefault();
        let res = await borrar(_id)
    }

    async function handleSearch(e) {
        e.preventDefault();
        try {
            let res = await searchByCloseDir(busqueda)
            let data = await res.json()
            if (data.length < 0) {
                setResultados(null)
            } else {
                setResultados(data)
            }
        } catch (error) {
            console.log(error)
            return false
        }
    }
    handleSearch

    console.log(resultados)
    //return para cuando se mete a buscar un hueco en particular
    if (!_id) {
        return (
            <>
                <section id="buscarHuecos_dad" className="section-shell">
                    <div className="search-shell">
                        <h2>Buscar mis reportes</h2>
                        <p className="text-muted">Encuentra un hueco por dirección y edítalo si ya lo repararon.</p>
                        <form onSubmit={handleSearch} className="search-bar">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Buscar por dirección"
                                value={busqueda}
                                onChange={(e) => setBusqueda(e.target.value)}
                                aria-describedby="button-addon2"
                            />
                            <button className="btn btn-pill btn-contrast" type="submit" id="button-addon2">Buscar</button>
                        </form>

                        {resultados ? (
                            <div className="search-results">
                                {resultados.map((hueco) => (
                                    <div key={hueco._id} className="result-card">
                                        <div>
                                            <p className="mb-1"><strong>Dirección:</strong> {hueco.direccion}</p>
                                            <p className="mb-1 text-muted"><strong>Categoría:</strong> {hueco.categoria}</p>
                                            <p className="mb-0 text-muted"><strong>Observaciones:</strong> {hueco.observaciones}</p>
                                        </div>
                                        <div className="text-end">
                                            <Link to={`/misReportes/${hueco._id}`}>
                                                <button className="btn btn-pill btn-quiet">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-pencil-fill" viewBox="0 0 16 16">
                                                        <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z" />
                                                    </svg>
                                                    Editar
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="search-results">
                                <div className="result-card">
                                    <div>
                                        <h4 className="mb-1">Sin huecos en {`${busqueda}`}</h4>
                                        <p className="text-muted mb-0">¡Bacano! Esa zona no tiene reportes activos.</p>
                                    </div>
                                </div>
                            </div>
                        )}

                    </div>
                </section >
            </>
        )

    }
    //return para cuando se mete a buscar un hueco desde el modal del hueco
    else {
        return (
            <>
                <section id="misReportes_dad" className="section-shell">
                    <div className="form-shell">
                        <div id="form_dad" className="form-card">
                            <form onSubmit={handleUpdate}>
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <div>
                                        <span className="pill-label">Editar reporte</span>
                                        <h4 className="mb-1">{direccion}</h4>
                                        <p className="text-muted mb-0">Actualiza la dirección, categoría u observaciones.</p>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="direccion" className="form-label fw-semibold">Dirección</label>
                                    <input type="text" className="form-control" id="direccion" placeholder="Escribí la dirección del hueco" value={direccion} onChange={(e) => setDireccion(e.target.value)} required />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="categoria" className="form-label fw-semibold">Categoría</label>
                                    <select className="form-select" id="categoria" name="categoria" value={categoria} onChange={(e) => setCategoria(e.target.value)} required>
                                        <option value="">Selecciona una categoría</option>
                                        <option value="grande">Grande</option>
                                        <option value="mediano">Mediano</option>
                                        <option value="pequeño">Pequeño</option>
                                    </select>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="observaciones" className="form-label fw-semibold">Observaciones</label>
                                    <textarea className="form-control" id="observaciones" rows="3" placeholder="Danos detalles sobre ese cráter..." value={observaciones} onChange={(e) => setObservaciones(e.target.value)} required></textarea>
                                </div>
                                <div className="d-flex gap-2">
                                    <button type="submit" className="btn btn-pill btn-contrast w-50">Confirmar cambio</button>
                                    <button type="button" className="btn btn-pill btn-danger w-50" onClick={handleDelete} >Hueco ya no existe</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>




            </>
        )
    }

}