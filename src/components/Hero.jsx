import MyMap from "./MapBoxGeneral.jsx"
import Huecos from "./Huecos"
import { Link } from "react-router-dom";

export default function Hero() {

    return (
        <>
            <section className="hero-shell">
                <div className="hero-grid">
                    <div className="hero-copy fade-up">
                        <span className="pill-label">#VíasSinHuecos</span>
                        <h1>Reporta huecos y cuidemos las calles, ve</h1>
                        <p className="lead">
                            Súmate al monitoreo ciudadano: señalemos cráteres, prioricemos arreglos y protejamos nuestros vehículos.
                        </p>
                        <div className="cta-row">
                            <Link to={"/reportar"}>
                                <button type="button" className="btn btn-pill btn-contrast">
                                    Reportalo ya
                                </button>
                            </Link>
                            <Link to={"/misReportes"}>
                                <button type="button" className="btn btn-pill btn-quiet">
                                    Ver mis reportes
                                </button>
                            </Link>
                        </div>
                        <div className="stat-row">
                            <div className="stat-card">
                                <strong>+100</strong>
                                <span className="text-muted">Reportes ciudadanos activos</span>
                            </div>
                            <div className="stat-card">
                                <strong>24h</strong>
                                <span className="text-muted">Respuesta promedio</span>
                            </div>
                            <div className="stat-card">
                                <strong>Mapa en vivo</strong>
                                <span className="text-muted">Ubicación y categoría</span>
                            </div>
                        </div>
                    </div>

                    <div className="hero-visual fade-up">
                        <div className="floating-card">
                            <div id="carouselExample" className="carousel slide">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src="https://www.laopinion.co/sites/default/files/2021-05/Invasi%C3%B3n-de-huecos-en-las-calles-de-Cucutaprados-del-este-prados-del-este-2.jpg" className="d-block w-100" alt="Calle con huecos" />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="https://personeriacali.gov.co/wp-content/uploads/2022/08/cali-huecos-768x462.jpg" className="d-block w-100" alt="Vehículos esquivando baches" />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_QkKQkNB8wRsnYMBcM2HOB0saTjihZ5xjew&s" className="d-block w-100" alt="Ciudad con crater" />
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Anterior</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Siguiente</span>
                                </button>
                            </div>
                        </div>
                        <div className="text-muted text-center mt-3">Si estás cansado de esquivar huecos, reporta.</div>
                    </div>
                </div>

                <div className="map-panel fade-up">
                    <div className="panel-header">
                        <div>
                            <span className="pill-label">Mapa en vivo</span>
                            <h3 style={{ marginTop: "0.5rem", marginBottom: 0 }}>Revisa dónde están los huecos</h3>
                            <p className="text-muted" style={{ margin: 0 }}>Ubica reportes en tiempo real con su categoría de riesgo.</p>
                        </div>
                        <div className="pill-soft">Mapbox conectado</div>
                    </div>
                    <div className="map-frame">
                        <MyMap />
                    </div>
                </div>

            </section>
            <Huecos />
        </>
    )
}