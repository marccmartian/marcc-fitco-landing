import React from "react";

const linksEmpresas = [
    {
        text: "Nosotros",
        link: "https://fitcolatam.com/moves/nuestra-historia"
    },
    {
        text: "Postula tu centro",
        link: "https://business.fitcomoves.com/postulacion-centro-fitness/"
    },
    {
        text: "Planes",
        link: "https://fitcolatam.com/moves/planes-corporativos"
    },
    {
        text: "Nuestros expertos",
        link: "https://fitcolatam.com/moves/nuestros-expertos"
    },
    {
        text: "Blog",
        link: "https://blog.fitcomoves.com/"
    },
    {
        text: "Términos y condiciones",
        link: "https://fitcolatam.com/moves/legal/terminos-condiciones/"
    },
    {
        text: "Política de Privacidad",
        link: "https://fitcolatam.com/moves/legal/politica-privacidad"
    },
];

const linksCentros = [
    {
        text: "Nosotros",
        link: "https://www.fitcolatam.com/software/sobre-nosotros/"
    },
    {
        text: "Partners",
        link: "https://fitcolatam.com/software/partners"
    },
    {
        text: "Trabaja con nosotros",
        link: "https://www.getonbrd.com.pe/companies/fitco/"
    },
    {
        text: "Blog",
        link: "https://blog.fitcolatam.com/"
    },
    {
        text: "Webinars",
        link: "https://business.fitcolatam.com/webinars-fitco/"
    },
    {
        text: "Términos y condiciones",
        link: "https://business.fitcolatam.com/terminos-y-condiciones/"
    },
    {
        text: "Política de Privacidad",
        link: "https://business.fitcolatam.com/politica-de-privacidad/"
    },
];

const socialLinks = [
    {
        title: "Fitco Moves",
        email: "moves@fitcolatam.com",
        fb: "https://www.facebook.com/fitcomoves",
        ig: "https://www.instagram.com/fitcomoves/"
    },
    {
        title: "Fitco Software",
        email: "ventas@fitcolatam.com",
        fb: "https://www.facebook.com/fitco.community",
        ig: "https://www.instagram.com/fitcolatam/"
    }
]

const List = ({list, title}) => {
    return (
        <div>
            <h2>{title}</h2>
            <ul>{list.map(item => (
                    <li>
                        <a href={item.link} target="_blank">{item.text}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

const Social = ({socialList}) => {
    return (
        <>
            { 
                socialList.map((item, index) => (
                    <div>
                        {index == 0 
                            ? <h2>Contacto</h2> 
                            : <h2 className="space">&nbsp;</h2>}
                        <h3 className="social-title">{item.title}</h3>
                        <a className="social-email" href={`mailto:${item.email}`}>{item.email}</a>
                        <div className="social-icons-wrap">
                            <a className="fb-icon" target="_blank" href={item.fb}>
                                <img src="/img/facebook.svg" />
                            </a>
                            <a className="ig-icon" target="_blank" href={item.ig}>
                                <img src="/img/instagram.svg" />
                            </a>
                        </div>
                    </div>
                )) 
            }
        </>
    )
}

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer-wrapper">
                <div className="footer-wrapper__links">
                    <div className="logo">
                        <img src="/img/software.svg" alt="Fitco Moves"/>
                    </div>
                    <List list={linksEmpresas} title="Para Empresas" />
                    <List list={linksCentros} title="Para centros fitness" />    
                    <Social socialList={socialLinks} />                    
                </div>
                <div className="copyright">© Fitco 2021</div>
            </div>
        </div>
    )
}
