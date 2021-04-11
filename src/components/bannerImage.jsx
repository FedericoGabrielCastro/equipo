import { makeStyles } from '@material-ui/styles'

// default component
const BannerImage = (props) => {
    const classes = useStyle()

    return (
        <section className={classes.imageBanner}>
            <img src={props.image} alt={props.name} className={classes.fitBg}/>
        </section>
    )
}

// styles
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
    imageBanner: {
        position: "relative",
        width: "100%",
        minHeight: "50vh",
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
            background: "linear-gradient(to top, #111, transparent)",
        },
        '&:after': {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "400px",
            zIndex: 1,
            background: "linear-gradient(to bottom, #111, transparent)",
        }
    },
})

export default BannerImage
