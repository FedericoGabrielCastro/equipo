import { connect } from 'react-redux'

// Todos los Jugadores En lista 
const Suplentes = ({suplentes, quitarSuplentes}) => {
    return (
        <section>
            <h2>Suplentes</h2>
            <div className="suplentes">
                {
                    suplentes.map ( j => (
                        <article className="suplente" key={j.id}>
                            <div>
                                <img src={j.foto} alt={j.name} />
                                <button onClick={() => quitarSuplentes(j)}>X</button>
                            </div>
                            <p>{j.name}</p>
                        </article>
                    ))
                }
            </div>
        </section>
    )
}

const mapStateToProps = state => ({
    suplentes: state.suplentes
})

const mapDispatchToProps = dispatch => ({

    quitarSuplentes(jugador) {
        dispatch ({
            type: "QUITAR_SUPLENTE",
            jugador
        })
    } 
})


export default connect(mapStateToProps, mapDispatchToProps )(Suplentes)