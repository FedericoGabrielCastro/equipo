import React from 'react'
import { connect } from 'react-redux'

const Players = ({jugadores, agregarTitular, agregarSuplente }) => {
    return (
        <section>
            <h2>Jugadores</h2>
            <div className="playerContent">
                {
                    jugadores.map( j => (
                        <article className="player">
                            <img src={j.foto} alt={j.nombre} key={j.id}/>
                            <h3>{j.nombre}</h3>
                            <div>
                                <button onClick={() => agregarTitular(j)}>Titular</button>
                                <button onClick={() => agregarSuplente(j)}>Suplente</button>
                            </div>
                        </article>
                    ))
                }
            </div>
        </section>
    )
}

// Recibe el estado de jugadores y permite pasarlo como props en el componente 
const mapStateToProps = state => ({
    jugadores: state.jugadores
})

const mapDispatchToProps = dispatch => ({
    
    agregarTitular(jugador) {
        dispatch ({
            type: "AGREGAR_TITULAR",
            jugador
        })
    },

    agregarSuplente(jugador) {
        dispatch ({
            type: "AGREGAR_SUPLENTE",
            jugador 
        })
    },
})

// Funcion conenect Conecta con el estado y recive 2 funciones
// mapStateToProps: Mapea lo que hay en el state y lo devuelve como props
// mapDispatchToProps: Mapea las funciones (dispatchs) y las convierte en propiedades
export default connect(mapStateToProps, mapDispatchToProps)(Players)
