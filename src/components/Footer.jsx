export default function Footer(){
    return(
        <>
        <footer className="footer-shell">
            <div className="footer-grid">
                <div>
                    <span className="pill-label">seguvia</span>
                    <h3 style={{ marginTop: "0.75rem", marginBottom: "0.35rem" }}>Calles cuidadas por todos</h3>
                    <p className="footer-note">Reporta huecos, sigue el mapa en vivo y ayuda a priorizar arreglos en tu barrio.</p>
                </div>
                <div>
                    <h5>Acciones rápidas</h5>
                    <div className="d-flex flex-column gap-2 mt-2">
                        <a href="/reportar" className="btn btn-pill btn-contrast">Reportar hueco</a>
                        <a href="/misReportes" className="btn btn-pill btn-quiet">Mis reportes</a>
                    </div>
                </div>
                <div>
                    <h5>Contacto</h5>
                    <p className="footer-note">¿Ideas para mejorar? Escríbenos y seguimos ajustando.</p>
                    <a className="text-muted" href="mailto:hola@seguvia.co">hola@seguvia.co</a>
                </div>
            </div>
        </footer>
        </>
    )
}