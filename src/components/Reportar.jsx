import { useState } from "react";

export default function Reportar() {
    const [direccion, setDireccion] = useState("");
    const [categoria, setCategoria] = useState("");
    const [observaciones, setObservaciones] = useState("");
    const [title_Mensaje, setTitulo] = useState("");
    const [mensaje_Mensaje, setMensaje] = useState("");
    const [confirmar, setConfirmar] = useState("");


    async function handleSubmit(e) {
        e.preventDefault();

        const huecoData = { direccion, categoria, observaciones };
        try {
            const res = await fetch("http://localhost:3005/api/huecos/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(huecoData)
            
        });
        if(res.status==201){
            setTitulo(`Muchas gracias, oís!`)
            setConfirmar(`Hueco ${categoria} en ${direccion} reportado correctamente`)
            setMensaje(`Con tu aporte estamos mejorando cada vez más nuestra Cali bella!!`)
        }
        const data = await res.json();
        } catch (error) {
            setTitulo(`Esperate ve!`)
            setConfirmar(`Tuvimos un problema reportando ese crater`)
            setMensaje(`Haceme el favor de reportarlo de nuevo, ve`)
            console.log(error)
        }
        
    }
    return (
        <>
            <section id="reportar_dad">
                <div class="d-flex justify-content-center align-items-center m-4 ps-4 pe-4 ">
                    <div id="form_dad" class="col m-4">
                        <form class="p-4 border rounded-3 bg-light shadow-sm" onSubmit={handleSubmit}>
                            <h4 class="mb-4 text-primary text-center fw-bold">Reporta ese crater, ve!</h4>
                            <div class="mb-3">
                                <label for="nombre" class="form-label fw-semibold">Direccion</label>
                                <input type="text" class="form-control" id="direccion" placeholder="Escribí la dirección del hueco" value={direccion} onChange={(e) => setDireccion(e.target.value)} required/>
                            </div>

                            <div class="mb-3">
                                <div class="mb-3">
                                    <label for="categoria" class="form-label fw-semibold">Categoría</label>
                                    <select class="form-select" id="categoria" name="categoria" value={categoria} onChange={(e)=>setCategoria(e.target.value)}required>
                                        <option value="">Selecciona una categoría</option>
                                        <option value="grande">Grande</option>
                                        <option value="mediano">Mediano</option>
                                        <option value="pequeño">Pequeño</option>
                                    </select>
                                </div>

                            </div>

                            <div class="mb-3">
                                <label for="observaciones" class="form-label fw-semibold">Observaciones</label>
                                <textarea class="form-control" id="observaciones" rows="3" placeholder="Danos detalles sobre ese crater..." value={observaciones} onChange={(e)=> setObservaciones(e.target.value)} required></textarea>
                            </div>

                            <button type="submit" class="btn btn-primary w-100">Enviar reporte</button>

                        </form>
                    </div>
                    <div class="col m-4 text-center">
                        <div class="container">
                            <h1>{title_Mensaje}</h1>
                            <h4>{confirmar}</h4>
                            <p>{mensaje_Mensaje}</p>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}