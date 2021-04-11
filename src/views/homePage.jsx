import { makeStyles } from '@material-ui/styles'

import CardHomeOpt from '../components/cardHomeOpt'
import FooterComponent from '../components/footer'
import BannerImage from '../components/bannerImage'
import DescriptionHomePage from '../components/descriptionHomePage'

import banner from '../assets/banner.jpeg'
import imageOne from '../assets/imageOne.jpeg'

const HomePage = () => {
    const classes = useStyle()

    return (
        <div className={classes.all}>
            <div className={classes.body}>
                <section className={classes.banner}>
                    <img src={banner} alt="banner" className={classes.fitBg}/>
                    <div className={classes.content}>
                        <h2>Arma tu equipo</h2>
                        <p>{lorem}</p>
                        <a href="#about" className={classes.btn}>Leer mas</a>
                    </div>
                </section>
                <DescriptionHomePage/>
                <BannerImage image={imageOne} name="banner"/>
                <section className={classes.destination} id="destination">
                    <div className={classes.conetnt}>
                        <h2 className={classes.titleText}>Elije el tamaño de la cancha</h2>
                        <p className={classes.text}>{lorem}</p>
                    </div>
                    <CardHomeOpt/>
                </section>
                <FooterComponent/>
            </div>
        </div>
    )
}

const useStyle = makeStyles ({
    all: {
    margiBlockEnd: 0,
    padding: 0,
    boxSizing: "border-box",
    fontFamily: "'Courier New', Courier, monospace, sans-serif",
    scrollBehavior: "smooth"
    },
    body: {
        background: "#111",
    },
    banner: {
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "top",
        '&:before': {
            content: '""',
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: "400px",
            zIndex: 1,
            background: "linear-gradient(to top, #111, transparent)"
        },
    },
    content: {
        position: "relative",
        maxWidth: "800px",
        textAlign: "center",
        zIndex: 1,
        '& h2': {
            color: "#fff",
            fontSize: "5em",
        },
        "& p": {
            color: "#fff",
            fontSize: "1.2em",
        }
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
    fitBg: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        opacity: 0.8,
    },
    titleText: {
        fontWeight: 600,
        color: "#fff",
        fontSize: "2em",
        marginBottom: "10px"
    },
    text: {
        color: "#fff",
        fontSize: "1em",
        margin: "10px"
    },
    destination: {
        textAlign: "center",
    },
    conetnt: {
        textAlign: "center",
    },
})


const lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat accusantium, facilis molestias assumenda nesciunt commodi. Quae recusandae illo facilis! Mollitia omnis eaque rerum libero maiores quo cumque illo placeat dolores!"

export default HomePage
