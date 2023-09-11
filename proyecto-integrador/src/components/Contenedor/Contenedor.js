import React from "react";
import Tracks from "../../components/Tracks/Tracks";
import Albums from "../../components/Albums/Albums";
import "./Contenedor.css";

function Contenedor(props) {
    return (
        <>
            {props.info.length > 0 ?
                (props.esAlbum ?
                <section className="cardContainer">
                    {props.info.map((album, i) => (
                        <Albums key={album + i} albumes={album} />
                    ))}
                </section>
                :
                <section className="cardContainer">
                    {props.info.map((tracks, i) => (
                        <Tracks key={tracks + i} canciones={tracks} />
                    ))}
                </section>)
                :
                <h2>Cargando...</h2>
            }

        </>
    );
}

export default Contenedor;