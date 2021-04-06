import { makeStyles } from '@material-ui/core/styles';

import BannerImage from '../components/bannerImage'

import imageTwo from '../assets/imageTwo.jpeg'
import face from '../assets/face.png'
import insta from '../assets/insta.png'
import wasap from '../assets/wasap.png'

// Component default
const FooterComponent = () => {
    const classes = useStyle()

    return (
        <div>
            <BannerImage image={imageTwo} name="banner"/>
            {/* // section social Footer */}
            <section className={classes.footer}>
                <ul className={classes.social}>
                    <SocialIcon url="/" icon={face}/>
                    <SocialIcon url="/" icon={wasap}/>
                    <SocialIcon url="/" icon={insta}/>
                </ul>
                <h4 className={classes.copyrightText}> 
                    Copyright ©2021 <a href="/">Futbol</a> All rights reserved
                </h4>
            </section>
        </div>
    )
}

// Social icon/ref
const SocialIcon = (props) => {
    return(
        <li>
            <a href={props.url}>
                <img src={props.icon} alt="Icon"/>
            </a>
        </li>
    )
}
 
// Style
const useStyle = makeStyles({
    // Component default
    banner: {
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
    fitBg: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        opacity: 0.8,
    },
    // Section social Footer 
    footer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        paddingBottom: "30px",
    },
    social: {
        position: "relative",
        display: "flex",
        '& li': {
            listStyle: "none",
            '& a': {
                textDecoration: "none",
                margin: "0 20px",
                '& img': {
                    // filter: "invert(1)",
                    maxWidth: "40px",
                }
            }
        }
    },
    copyrightText: {
        marginTop: "20px",
        fontSize: "18px",
        fontWeight: 300,
        color: "#666",
        textAlign: "center",
        '& a': {
            color: "#fff",
            textDecoration: "none",
        }
    },
})

export default FooterComponent
