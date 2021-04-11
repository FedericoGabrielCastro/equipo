import { createStore } from 'redux'

// Estado incial
const initialState = {
    jugadores: [{
        id: 1,
        nombre: "Federico Castro",
        foto: 'https://static.thenounproject.com/png/363640-200.png'
    }],
    titulares: [],
    suplentes: []
}
 
// Funcion reductora para realizar cambios 
const reducerEntrenador = (state = initialState, action) => {

    // reducer
    if (action.type === 'AGREGAR_TITULAR') {
        return {
            // tomar estado incial 
            ...state,
            // concatenarlo con los Array
            titulares: state.titulares.concat(action.jugador),
            // verificar que el jugador agragado tenga un id distinto a los que hay en el array.
            jugadores: state.jugadores.filter(j =>  j.id !== action.jugador.id)
        }
    }

    if (action.type === 'AGREGAR_SUPLENTE') {
        return {
            ...state,
            suplentes: state.suplentes.concat(action.jugador),
            jugadores: state.jugadores.filter(j => j.id !== action.jugador.id)
        }
    }

    if (action.type === "QUITAR_TITULAR") {
        return {
            ...state,
            titulares: state.titulares.filter(j => j.id !== action.jugador.id),
            jugadores: state.jugadores.concat(action.jugador)
        }
    }

    if (action.type === "QUITAR_SUPLENTE") {
        return {
            ...state,
            suplentes: state.suplentes.filter(j => j.id !== action.jugador.id),
            jugadores: state.jugadores.concat(action.jugador)
        }
    }

    return state
}

// Recive como parametro la funcion reductora.
export default createStore(reducerEntrenador)  