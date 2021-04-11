import Players from '../components/jugadores'
import TeamSelected from '../components/teamSelected'
import '../styles/styles.scss'

const MakeTeam = () => {

    return (
        <main>
            <h1>Equipo</h1>
            <Players/>
            <TeamSelected/>
        </main>
    )
}

export default MakeTeam
