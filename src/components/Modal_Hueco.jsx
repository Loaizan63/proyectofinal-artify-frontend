import { useState, useEffect } from "react";
import MyMap from "./MapboxModal";
import { Link } from "react-router-dom";

export default function Modal({ _id, direccion, categoria, comentarios, modalID, tone }) {
    const [toneStyle, setToneStyle] = useState({ badge: "tone-green", marker: "#6cf5c2" })

    useEffect(() => {
        if (tone) {
            setToneStyle(tone)
            return
        }
        if (!categoria) return;

        switch (categoria) {
            case "grande":
                setToneStyle({ badge: "tone-red", marker: "#ff5f6d" })
                break;
            case "mediano":
                setToneStyle({ badge: "tone-yellow", marker: "#ffcb6b" })
                break;
            case "pequeño":
                setToneStyle({ badge: "tone-blue", marker: "#7fd0ff" })
                break;
            default:
                setToneStyle({ badge: "tone-green", marker: "#6cf5c2" })
        }

    }, [categoria, tone])

    return (


        <>
            <button type="button" className="btn btn-quiet btn-pill" data-bs-toggle="modal" data-bs-target={`#${modalID}`} >
                Ver más
            </button>

            <div className="modal fade" id={modalID} tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-lg">
                    <div className="modal-content">
                        <div className="modal-header border-bottom border-secondary">
                            <div className="w-100">
                                <h5 className="modal-title mb-2" style={{ wordBreak: 'break-word' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-geo-alt-fill me-2" viewBox="0 0 16 16">
                                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                                    </svg>
                                    {direccion}
                                </h5>
                                <span className={`badge-soft ${toneStyle.badge}`}>{categoria}</span>
                            </div>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
                        </div>
                        <div className="modal-body">
                            <div className="mb-3">
                                <h6 className="fw-bold mb-2">Observaciones:</h6>
                                <p className="text-muted" style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>{comentarios}</p>
                            </div>

                            <div className="mb-3">
                                <h6 className="fw-bold mb-2">Ubicación en el mapa:</h6>
                                <div style={{ borderRadius: '8px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                    <MyMap
                                        corde={direccion}
                                        color={toneStyle.marker}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer border-top border-secondary">
                            <Link to={`/misReportes/${_id}`} className="w-100" style={{ textDecoration: 'none' }}>
                                <button type="button" className="btn btn-pill btn-quiet w-100" data-bs-dismiss="modal">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle me-2" viewBox="0 0 16 16">
                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                                        <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
                                    </svg>
                                    ¿Hueco tapado?
                                </button>
                            </Link>
                            <button className="btn btn-pill btn-contrast w-100" data-bs-dismiss="modal">Cerrar</button>
                        </div>

                    </div>
                </div>
            </div >

        </>
    )
}