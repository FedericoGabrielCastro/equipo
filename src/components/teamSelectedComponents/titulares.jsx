import React from 'react'
import { connect } from 'react-redux'

import cancha from '../../assets/cancha.svg'

// Todos los Jugadores En lista 
const Titulares = ({titulares, quitarTitular}) => {
    return (
        <section>
            <h2>Titulares</h2>
            <div className="cancha">
                {
                    titulares.map ( j => ( 
                        <article className="titular" key={j.id}>
                            <div>
                                <img src={j.foto} alt={j.name} />
                                <button onClick={() => quitarTitular(j)}>Quitar titular</button>
                            </div>
                            <p>{j.name}</p>
                        </article>
                    ))
                }
                <img src={cancha} alt="cancha"/>
            </div>
        </section>
    )
}

const mapStateToProps = state => ({
    titulares: state.titulares
})

const mapDispatchToProps = dispatch => ({
    
    quitarTitular(jugador){
        dispatch({
            type: "QUITAR_TITULAR",
            jugador
        })
    }
})


export default connect(mapStateToProps, mapDispatchToProps )(Titulares)