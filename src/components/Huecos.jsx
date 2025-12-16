import Card_huecos from "./Card_huecos"
import { useEffect,useState } from "react"
import { fetchDb } from "../services/fetchDb"

export default function Huecos(){
    const [huecos,setHuecos] = useState([])
    useEffect(()=>{
        async function fetchData() {
            try {
                const data = await fetchDb()
                if(data){
                    setHuecos(data)
                }else{
                    console.log("No existen huecos que mostrar")
                }
            } catch (error) {
                console.log("Error haciendo fetch de hueco: ",error)
            }   
        }
        fetchData()
    },[])
    console.log(huecos)
    return(
        <>
        <section id="Huecos_dad" className="section-shell">
            <div className="huecos-wrap">
                <h2>Reportes ciudadanos</h2>
                <p className="section-lead">Explora los últimos huecos reportados, filtra por categoría y abre el detalle con el mapa.</p>
                <div className="hueco-grid">
                    {huecos.map((hueco,i)=>(
                        <Card_huecos
                        key={i}
                        hueco={hueco}
                        />
                    ))}
                </div>
            </div>
        </section>
        </>
    )
}