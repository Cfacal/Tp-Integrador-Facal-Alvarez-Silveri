import React from "react";
import Tracks from "../../components/Tracks/Tracks";
import Albums from "../../components/Albums/Albums";

function Contenedor(props) {
    { console.log(props.info) }
    return (
        <>
            {props.info.length > 0 ?
                (props.esAlbum ?
                <section>
                    {props.info.map((album, i) => (
                        <Albums key={album.id + i} albumes={album} />
                    ))}
                </section>
                :
                <section>
                    {props.info.map((tracks, i) => (
                        <Tracks key={tracks.id + i} canciones={tracks} />
                    ))}
                </section>)
                :
                <h2>Cargando...</h2>
            }

        </>
    );
}

export default Contenedor;