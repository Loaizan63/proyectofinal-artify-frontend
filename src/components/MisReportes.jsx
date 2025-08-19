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
                <section id="buscarHuecos_dad">
                    <div className="d-grid">
                        <div className="container mt-3">
                            {/* Barra de búsqueda */}
                            <form onSubmit={handleSearch}>
                                <div class="input-group mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Buscar por dirección"
                                        value={busqueda}
                                        onChange={(e) => setBusqueda(e.target.value)}
                                        aria-describedby="button-addon2"
                                    />
                                    <button class="btn btn-secondary" type="button" id="button-addon2">Buscar</button>
                                </div>
                            </form>
                            {/* Mostrar resultados */}
                            {resultados ? (
                                <div className="mt-4 ">
                                    <h3>Resultados de búsqueda:</h3>
                                    <div className="list-group">
                                        {resultados.map((hueco) => (
                                            <div className="d-flex row">
                                                <div key={hueco._id} className="list-group-item col">
                                                    <p ><strong>Dirección:</strong> {hueco.direccion}</p>
                                                    <p><strong>Categoría:</strong> {hueco.categoria}</p>
                                                    <p><strong>Observaciones:</strong> {hueco.observaciones}</p>
                                                </div>
                                                <div className="col me-4 ms-4 mt-3 mb-3 justify-items-center">
                                                    <Link to={`/misReportes/${hueco._id}`}>
                                                        <button className="btn btn-block btn-lg btn-success">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="10%" height="40%" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
                                                                <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z" />
                                                            </svg>
                                                        </button>
                                                    </Link>
                                                </div>
                                            </div>


                                        ))}
                                    </div>
                                </div>
                            ) : (
                                <>
                                    <div className="mt-4">
                                        <h3>Resultados de búsqueda:</h3>
                                        <h2>Que bacano. No tenemos ni un hueco reportado en {`${busqueda}`}</h2>
                                    </div>
                                </>
                            )}

                        </div>
                    </div>
                </section >
            </>
        )

    }
    //return para cuando se mete a buscar un hueco desde el modal del hueco
    else {
        return (
            <>
                <section id="misReportes_dad" className="">
                    <h1 className="text-center m-3">{direccion}</h1>
                    <div class="d-flex justify-content-center align-items-center">
                        <div id="form_dad" class="m-4">
                            <form class="p-4 border rounded-3 bg-light shadow-sm" onSubmit={handleUpdate}>
                                <h4 class="mb-4 text-primary text-center fw-bold">Editar crater</h4>
                                <div class="mb-3">
                                    <label for="nombre" class="form-label fw-semibold">Direccion</label>
                                    <input type="text" class="form-control" id="direccion" placeholder="Escribí la dirección del hueco" value={direccion} onChange={(e) => setDireccion(e.target.value)} required />
                                </div>

                                <div class="mb-3">
                                    <div class="mb-3">
                                        <label for="categoria" class="form-label fw-semibold">Categoría</label>
                                        <select class="form-select" id="categoria" name="categoria" value={categoria} onChange={(e) => setCategoria(e.target.value)} required>
                                            <option value="">Selecciona una categoría</option>
                                            <option value="grande">Grande</option>
                                            <option value="mediano">Mediano</option>
                                            <option value="pequeño">Pequeño</option>
                                        </select>
                                    </div>

                                </div>

                                <div class="mb-3">
                                    <label for="observaciones" class="form-label fw-semibold">Observaciones</label>
                                    <textarea class="form-control" id="observaciones" rows="3" placeholder="Danos detalles sobre ese crater..." value={observaciones} onChange={(e) => setObservaciones(e.target.value)} required></textarea>
                                </div>
                                <div className="bg-warning d-flex justify-content-center align-items-center">
                                    <button type="submit" class="btn btn-primary w-50 me-4 ms-4">Confirmar cambio</button>
                                    <button class="btn btn-danger w-50 me-4 ms-4" onClick={handleDelete} >Hueco ya no existe</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>




            </>
        )
    }

}