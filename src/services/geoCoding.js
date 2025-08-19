async function convertirCoords(direccion) {
    const coords=[]
    const accessToken = "pk.eyJ1Ijoic2ViMTAxMSIsImEiOiJjbWUydDVxZnUwdHV4Mmtwa3Q0b2FmdWFiIn0.4-Hb5WmIe21pLf3-clWYnw";
    // const direccion = "cra56 #15-56;
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(direccion)}.json?country=co&proximity=ip&types=address&language=es&access_token=${accessToken}`;

    await fetch(url)
        .then(res => res.json())
        .then(data => {
            if (data.features && data.features.length > 0) {
                const [lng, lat] = data.features[0].center;
                coords.push(lng,lat)
                console.log("Coordenadas desde services:", { lat, lng });
            } else {
                console.log("No se encontraron resultados.");
            }
        })
        .catch(err => console.error(err));
        return coords
}

export default convertirCoords;