import { makeStyles } from '@material-ui/core/styles';

import imageTwo from '../assets/imageTwo.jpeg'

// Component default
const CardHomeOpt = () => {
    const classes = useStyle()

    return (
        <div className={classes.destinationList}>
            <Card image={imageTwo} nameTitle="opt 1" nameDescription="Cancha de 5"/>
            <Card image={imageTwo} nameTitle="opt 2" nameDescription="Cancha de 9"/>
            <Card image={imageTwo} nameTitle="opt 3" nameDescription="Cancha de 11"/>
        </div>          
    )
}

// Individual card
const Card = (props) => {
    const classes = useStyle()

    return(
        <div className={classes.box}>
            <div className={classes.imgBxOpt}>
                <img src={props.image} alt="card" className={classes.fitBg}/>
            </div>
            <div className={classes.content}>
                <h2>{props.nameTitle}<br/><span>{props.nameDescription}</span></h2>
            </div>
        </div>
    )
}

// style 
const useStyle = makeStyles({
    // Conteiner Card
    destinationList: {
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        marginTop: "40px",
        '& $box': {
            opacity: .2,
        }
    },
    // Individual Card
    box: {
        position: "relative",
        minWidth: "350px",
        height: "480px",
        background: "#fff",
        transition: ".5s",
        margin: "10px",
        '&:hover': {
            opacity: 1,
        },
    },
    fitBg: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        opacity: 0.8,
    },
    imgBxOpt: {
        position: "relative",
        width: "100%",
        height: "400px",
    },
    contentOpt: {
        width: "100%",
        height: "80px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        '& h2': {
            color: "#fff",
            fontWeight: 500,
            lineHeight: "1.2em",
            '& span': {
                fontSize: ".8rem",
                fontWeight: 300,
                opacity: .5,
            }
        }
    },
})

export default CardHomeOpt
