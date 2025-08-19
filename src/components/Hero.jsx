import MyMap from "./MapBoxGeneral.jsx"
import Huecos from "./Huecos"
import { Link } from "react-router-dom";

export default function Hero() {

    return (
        <>
            <section class="">
                <div class="row shadow rounded-3 mb-4 bg-primary text-white">
                    <div class="col d-flex align-items-center px-4 py-5 my-5">
                        <div class="container m-2 text-center ">
                            <h2 className="p-2">¿Hay muchos huecos por tu cuadra, ve? </h2>
                            <div class="m-3 p-2 h6">
                                <h7>Reportalos y ayudemos a llevar un recuento de todos los craters que dañan nuestros vehiculos</h7>
                            </div>
                            <Link className="text-white text-decoration-none" to={"/reportar"}>
                                <button type="button" class="btn btn-light btn-lg text-primary font-weight-bold pe-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-plus ms-2 me-2 mb-1" viewBox="0 0 16 16">
                                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                                    </svg>
                                    Reportalo!!
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div id="carousel_dad" class="col m-3">
                        <div className="container ">
                            <div id="carouselExample" class="carousel slide ">
                                <div class="carousel-inner">
                                    <div class="carousel-item active rounded-3">
                                        <img src="https://www.laopinion.co/sites/default/files/2021-05/Invasi%C3%B3n-de-huecos-en-las-calles-de-Cucutaprados-del-este-prados-del-este-2.jpg" class="d-block w-100" alt="..." />
                                    </div>
                                    <div class="carousel-item rounded-3">
                                        <img src="https://personeriacali.gov.co/wp-content/uploads/2022/08/cali-huecos-768x462.jpg" class="d-block w-100" alt="..." />
                                    </div>
                                    <div class="carousel-item rounded-3">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_QkKQkNB8wRsnYMBcM2HOB0saTjihZ5xjew&s" class="d-block w-100" alt="..." />
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                        <div className="text-center">
                            <p>Si estás cansado de esto, reporta!</p>
                        </div>
                    </div>
                </div>
                <div className="text-center container">
                    <h2 class="m-5">MAPA AQUI</h2>
                    <div>
                        <MyMap />
                    </div>
                    {/* <img class="img-fluid img" src={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/pin-s+ff0000(-74.5,40),pin-l+0000ff(-75,39)/74.5,40,9/800x600?access_token=pk.eyJ1Ijoic2ViMTAxMSIsImEiOiJjbWUydDVxZnUwdHV4Mmtwa3Q0b2FmdWFiIn0.4-Hb5WmIe21pLf3-clWYnw`} alt="" /> */}
                </div>

            </section>
            <Huecos />
        </>
    )
}