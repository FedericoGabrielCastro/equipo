import { makeStyles } from '@material-ui/styles'

import imageTwo from '../assets/imageTwo.jpeg'

// Component default
const DescriptionHomePage = () => {
    const classes = useStyle()

    return (
        <section className={classes.about} id="about">
        <div className={classes.contentBx}>
            <h2 className={classes.titleText}>Conoce un poco de nosotros</h2>
            <p className={classes.text}>{lorem}{lorem}</p>
            <a href="#destination" className={classes.btn}>Leer Mas</a>
        </div>
        <div className={classes.imgBx}>
            <img src={imageTwo} alt="imagen descriptiva" className={classes.fitBg}/>
        </div>
    </section>
    )
}

// style 
const useStyle = makeStyles({
    fitBg: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        opacity: 0.8,
    },
    btn: {
        position: "relative",
        display: "inlineBlock",
        marginTop: "30px",
        padding: "10px 30px",
        background: "#fff",
        color: "#333",
        textDecoration: "none",
    },
    about: {
        position: "relative",
        width:  "90%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
    },
    contentBx: {
        minWidth: "50%",
        width: "50%",
        textAlign: "center",
        padding: "40px",
    },
    imgBx: {
        position: "relative",
        minWidth: "50%",
        width: "50%",
        minHeight: "500px",
    },
    titleText: {
        fontWeight: 600,
        color: "#fff",
        fontSize: "2em",
        marginBottom: "10px",
    },
    text: {
        color: "#fff",
        fontSize: "1em",
    },
})

const lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat accusantium, facilis molestias assumenda nesciunt commodi. Quae recusandae illo facilis! Mollitia omnis eaque rerum libero maiores quo cumque illo placeat dolores!"

export default DescriptionHomePage
