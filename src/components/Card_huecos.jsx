import Modal from "./Modal_Hueco"
import { useEffect, useState } from "react"
export default function Card_huecos({ hueco }) {
    const [bgColor, setBgColor] = useState("")
    let url_staticIMG = `https://api.mapbox.com/styles/v1/mapbox/light-v11/static/-87.0186,32.4055,14/500x300?access_token=pk.eyJ1Ijoic2ViMTAxMSIsImEiOiJjbWUydDVxZnUwdHV4Mmtwa3Q0b2FmdWFiIn0.4-Hb5WmIe21pLf3-clWYnw
`
    useEffect(() => {
        switch (hueco.categoria) {
            case "pequeño":
                setBgColor("bg-info")
                break;
            case "mediano":
                setBgColor("bg-warning")
                break;
            case "grande":
                setBgColor("bg-danger")
                break;

            default:
                break;
        }
    }, [])

    function obtenerParteFinal(direccion) {
        if (!direccion) return "";
        const partes = direccion.split("#");
        return partes.length > 1 ? partes[1].trim() : "";
    }


    return (
        <>
            <div class="card m-3" style={{ width: "18rem" }}>
                <div class="justify-content-around mt-3 d-flex">
                    <div className="">
                        <h5>Hueco</h5>
                    </div>
                    <div className="align-items-center">
                        <span class={`badge ${bgColor}`}>{hueco.categoria}</span>
                    </div>
                </div>
                <div class="card-body ">
                    <div className="row">
                        <div>
                            <img class="img-fluid" src="https://img.freepik.com/foto-gratis/fondo-hormigon-textura-negra-grunge_53876-124541.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
                        </div>
                        <div className="d-flex flex-column text-secundary">
                            <p className="">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                                </svg>
                                {hueco.direccion}
                                {/* {libro.titulo.replaceAll("_", " ")} */}
                            </p>
                            {/*Pensarlo como una capsula con color*/}
                            <p className="">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar-date-fill" viewBox="0 0 16 16">
                                    <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4zm5.402 9.746c.625 0 1.184-.484 1.184-1.18 0-.832-.527-1.23-1.16-1.23-.586 0-1.168.387-1.168 1.21 0 .817.543 1.2 1.144 1.2" />
                                    <path d="M16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2m-6.664-1.21c-1.11 0-1.656-.767-1.703-1.407h.683c.043.37.387.82 1.051.82.844 0 1.301-.848 1.305-2.164h-.027c-.153.414-.637.79-1.383.79-.852 0-1.676-.61-1.676-1.77 0-1.137.871-1.809 1.797-1.809 1.172 0 1.953.734 1.953 2.668 0 1.805-.742 2.871-2 2.871zm-2.89-5.435v5.332H5.77V8.079h-.012c-.29.156-.883.52-1.258.777V8.16a13 13 0 0 1 1.313-.805h.632z" />
                                </svg>
                                reportado el {hueco.createdAt}
                                {/* {libro.generos.join(", ")} */}
                            </p>
                        </div>
                    </div>
                    <div className="bg-secondary row rounded mt-2">
                        <Modal
                            _id={hueco._id}
                            direccion={hueco.direccion}
                            categoria={hueco.categoria}
                            comentarios={hueco.observaciones}
                            modalID={`modal-${obtenerParteFinal(hueco.direccion)}`}

                        //  direccion={libro.portada}
                        // categoria={libro.autor.replaceAll("_", " ")}
                        // comentarios={5555}
                        // modalID={`modal-${libro.titulo}`}
                        />
                    </div>

                </div>
            </div>

        </>
    )
}