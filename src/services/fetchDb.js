// API root can be configured via env var VITE_API_ROOT, e.g., https://srv1710.hstgr.io/path/backend-php/index.php
const API_ROOT = (import.meta?.env?.VITE_API_ROOT || `${window.location.origin}/Proyecto_final-front/backend-php/index.php`).replace(/\/$/, '')
const URL_API = `${API_ROOT}/api/huecos/`

export async function fetchDb() {
    let huecos = []
    try {
        const data = await fetch(`${URL_API}`)
        const hueco = await data.json()
        if (!data.ok) throw new Error(`Error HTTP: ${data.status}`)
        huecos.push(hueco)
        return huecos[0]
    } catch (error) {
        console.error(error.message)
        console.log(error)
        return false
    }
}

export async function getByID(_id) {
    let hueco
    try {
        const data = await fetch(`${URL_API}${_id}`)
        const hueco = await data.json()
        if (!data.ok) throw new Error(`Error HTTP: ${data.status}`)
        return hueco
    } catch (error) {
        console.error(error.message)
        return false
    }
}
export async function update(hueco) {
    let direccion= hueco.direccion
    let categoria=hueco.categoria
    let observaciones = hueco.observaciones

    const huecoData = { direccion, categoria, observaciones };
    try {
         const res = await fetch(`${URL_API}${hueco._id}`,{
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(huecoData)
         })
         return res
    } catch (error) {
        console.log(error)
        return false
    }
    
}

export async function borrar(_id) {
    try {
        const res = await fetch(`${URL_API}${_id}`,{
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
        })
        return res
    } catch (error) {
        console.log(error)
        return false
        
    }
}

export async function searchByCloseDir(busqueda) {
    try {
        const res = await fetch(`${URL_API}direcSearch/${busqueda}`)
        return res
    } catch (error) {
        console.log(error)
        return false
    }
    
}