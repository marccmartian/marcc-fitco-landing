import Head from 'next/head'
import React from "react";

export default function Home() {
    return (
        <>
            <Head>
                <title>Fitco | Software de gestión para gimnasios y plataforma de entrenamiento online</title>
                <meta name="description" content="Fitco Software | sistema de gestión para centros fitness y gimnasios. Fitco Moves | plataforma de entrenamiento y bienestar online." />
                <meta
                    property='og:title'
                    content='Fitco | Software de gestión para gimnasios y plataforma de entrenamiento online'
                    key='og:title'
                />
                <meta
                    property='og:image'
                    content="https://fitcolatam.com/software/media/images/home/hero-benefits.png"
                    key='og:image'
                />
                <meta
                    property='og:description'
                    content='Fitco Software | sistema de gestión para centros fitness y gimnasios. Fitco Moves | plataforma de entrenamiento y bienestar online.'
                    key='og:description'
                />
                <meta property='og:type' content='website' key='og:type' />
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <div className="home">
                <div className="moves">
                    <div className="container">
                        <div className="logo">
                            <img src="/img/moves.svg" alt="Fitco Moves"/>
                        </div>
                        <h1>
                            <span className="highlighted">Entrena</span> desde<br/> cualquier lugar
                        </h1>
                        <span>Accede a +200 clases de los mejores centros fitness de Latam, mejora tu alimentación y cuida tu salud mental y emocional de nuestra mano.</span>
                        <a href="https://fitcolatam.com/moves">
                            <button>¡Empecemos a movernos!</button>
                        </a>
                    </div>
                </div>
                <div className="software">
                    <div className="container">
                        <div className="logo">
                            <img src="/img/software.svg" alt="Fitco Software"/>
                        </div>
                        <h1>
                            <span className="highlighted">Transforma</span> tu<br/> centro fitness
                        </h1>
                        <span>Ahorra tiempo administrando tu centro, posiciona tu marca y genera nuevos clientes e ingresos ¡Todo en un mismo lugar!</span>
                        <a href="https://fitcolatam.com/software">
                            <button>¡Conoce nuestro software!</button>
                        </a>
                    </div>
                </div>
            </div>
        </>

    )
}
