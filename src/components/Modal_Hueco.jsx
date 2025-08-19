import { useState, useEffect } from "react";
import MyMap from "./MapboxModal";
import { Link } from "react-router-dom";

export default function Modal({ _id, direccion, categoria, comentarios, modalID }) {
    const [bgColor, setBgColor] = useState("")

    useEffect(() => {

        if (!categoria) return;

        switch (categoria) {
            case "grande":
                setBgColor("bg-danger")
                break;
            case "mediano":
                setBgColor("bg-warning") //revisar colores
                break;
            case "pequeño":
                setBgColor("bg-info")
                break;
            default:
                setBgColor("bg-secondary");
        }

    }, [categoria])

    return (


        <>
            <button type="button" className="btn rounded btn-primary" data-bs-toggle="modal" data-bs-target={`#${modalID}`} >
                Ver más
            </button>

            <div className="modal fade" id={modalID} tabIndex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">
                        {/*<div className="modal-header">*/}
                        <div className=" d-flex justify-content-between align-items-center ps-5 pt-4 ">
                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                            <div class="flex-grow-1 d-flex justify-content-center">
                                <h3 class="modal-title text-center">
                                    {direccion}
                                    <span className={`ms-4 me-4 badge ${bgColor}`}>{categoria}</span>
                                </h3>
                            </div>
                        </div>
                        <div className="modal-body">
                            <div className="row align-items-stretch">
                                {/* Columna con mapa y botón */}
                                <div className="col d-flex flex-column">
                                    <p><b>Observaciones: </b>{comentarios}</p>

                                    <MyMap
                                        corde={direccion}
                                        color={bgColor}
                                    />
                                    <div className="text-center mt-3">
                                        <Link to={`/misReportes/${_id}`} >
                                            <button type="button" className="btn btn-secondary btn-sm" data-bs-dismiss="modal">
                                                ¿Hueco tapado?
                                            </button>
                                        </Link>
                                    </div>
                                </div>

                            </div>
                            <div class="text-center mt-4">
                                <button className="btn btn-primary btn-lg" data-bs-dismiss="modal">Cerrar</button>
                            </div>
                        </div>


                        {/*<div className="modal-footer">*/}

                    </div>
                </div>
            </div >

        </>
    )
}