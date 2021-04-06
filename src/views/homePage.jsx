import CardHomeOpt from '../components/cardHomeOpt'
import FooterComponent from '../components/footer'
import BannerImage from '../components/bannerImage'

import banner from '../assets/banner.jpeg'
import imageOne from '../assets/imageOne.jpeg'
import imageTwo from '../assets/imageTwo.jpeg'

import { makeStyles } from '@material-ui/styles'

const HomePage = () => {
    const classes = useStyle()

    return (
        <div className={classes.all}>
            <div className={classes.body}>
                {/* SEGUNDO SECTION */}
                <section className={classes.banner}>
                    <img src={banner} alt="banner" className={classes.fitBg}/>
                    <div className={classes.content}>
                        <h2>Arma tu equipo</h2>
                        <p>{lorem}</p>
                        <a href="#about" className={classes.btn}>Leer mas</a>
                    </div>
                </section>
                {/* TERCER SECTION */}
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
                {/* CUARTO SECTION */}
                <BannerImage image={imageOne} name="banner"/>
                {/* QUINTO SECTION */}
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
    /* SEGUNDO SECTION - texto sobre el header*/
    banner: {
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
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
        maxWidth: "900px",
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
    /* TERCER SECTION  - conocenos */
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

    /* QUINTO SECTION - cards */
    destination: {
        textAlign: "center",
    },
    conetnt: {
        textAlign: "center",
    },
})


const lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat accusantium, facilis molestias assumenda nesciunt commodi. Quae recusandae illo facilis! Mollitia omnis eaque rerum libero maiores quo cumque illo placeat dolores!"

export default HomePage
