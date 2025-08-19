import { Link } from "react-router-dom";

function Header() {
    /*
    <div class="container-fluid ">
                        <div class="navbar-brand mb-0 h1 mx-auto"><h1>Hueco founder</h1></div>
                    </div>
                    <div class=""> 
                        <div></div>
                    </div>
    <nav class="navbar navbar-expand-lg bg-dark p-3">
                    <div class="container">
                        <Link className=" text-decoration-none" to={"/"}>
                            <div className="navbar-brand m-1 h1 p-2 text-dark-emphasis mx-auto bg-danger">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt me-2" viewBox="0 0 16 16">
                                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                                </svg>
                                CaliReporta
                            </div>
                        </Link>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div className="pe-4 ps-4 collapse navbar-collapse  bg-info" id="navbarNavAltMarkup">
                            <div class="navbar-nav">
                                <Link className="text-white text-decoration-none" to={`/reportar`}>
                                    <button type="button" class="btn btn-primary p-2 me-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus m-1" viewBox="0 0 16 16">
                                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                                        </svg>
                                        Reportar
                                    </button>
                                </Link>
                                <Link className="text-white text-decoration-none" to={"/misReportes"}>
                                    <button type="button" class="btn btn-primary p-2 ms-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search m-1" viewBox="0 0 16 16">
                                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                                        </svg>
                                        Mis reportes
                                    </button>
                                </Link>
                            </div>
                        </div>

                    </div>
                </nav>
    */

    return (
        <>
            <header id="Header_dad" className="">
                <nav class="navbar navbar-expand-lg bg-body-tertiary p-3">
                    <div class="container d-flex justify-content-between ">
                        <Link className=" text-decoration-none" to={"/"}>
                            <a class="navbar-brand h1" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt me-2" viewBox="0 0 16 16">
                                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                                </svg>
                                CaliReporta
                            </a>
                        </Link>
                        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse justify-content-end">
                            <div class="navbar-nav d-flex align-items-center">
                                <Link className="text-white text-decoration-none" to={`/reportar`}>
                                    <button type="button" class="btn btn-primary p-2 me-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus m-1" viewBox="0 0 16 16">
                                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                                        </svg>
                                        Reportar
                                    </button>
                                </Link>
                                <Link className="text-white text-decoration-none" to={"/misReportes"}>
                                    <button type="button" class="btn btn-light p-2 ms-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search m-1" viewBox="0 0 16 16">
                                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                                        </svg>
                                        Mis reportes
                                    </button>
                                </Link>
                            </div>
                        </div>

                    </div>
                </nav>
                {/* Menú lateral offcanvas */}
                <div
                    className="offcanvas offcanvas-end bg-info"
                    tabIndex="-1"
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                >
                    <div className="offcanvas-header">
                        <h1 className="offcanvas-title text-white" id="offcanvasNavbarLabel">
                            Menú
                        </h1>
                        <button
                            type="button"
                            className="btn-close btn-close-white"
                            data-bs-dismiss="offcanvas"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="offcanvas-body d-flex flex-column">
                    
                            <Link className="text-white mb-2 text-decoration-none" to={`/reportar`}>
                                <div class="w-full bg-primary border-radius rounded-1 p-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-plus me-2" viewBox="0 0 16 16">
                                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                                    </svg>
                                    Reportar
                                </div>
                            </Link>
                            <Link className="text-white mb-2 text-decoration-none" to={`/misReportes`}>
                                <div  class="w-full bg-light-subtle border-radius text-dark rounded-1 p-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-search me-2" viewBox="0 0 16 16">
                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                                    </svg>
                                    Mis reportes
                                </div>
                            </Link>
                       
                    </div>
                </div>
            </header>
        </>
    )



}
export default Header