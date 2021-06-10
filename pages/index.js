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
                    <div className="logo">
                        <img src="/img/moves.svg" alt="Fitco Moves"/>
                    </div>
                    <div className="container">
                        <div className="mobile-img">
                            <img src="/img/moves-mobile.png" alt="moves-tablet" />
                        </div>
                        <div className="info-wrapper">
                            <p className="moves-target">PARA EMPRESAS</p>
                            <h1 className="title-normal">Asegura el<br/> bienestar de tus</h1>
                            <div className="highlighted">
                                <h1 className="title-bold">colaboradores</h1>
                                <div className="underline"></div>
                            </div>                            
                            <span className="text">
                                Implementamos y gestionamos <br className="break-mobile"/>tu programa de <br className="break-desktop"/>bienestar corporativo.
                            </span>
                            <a href="https://fitcolatam.com/moves">
                                <button className="btn-moves">¡Lo quiero en mi empresa!</button>
                            </a>                    
                        </div>                  
                    </div>
                    <div className="desktop-img">
                        <img src="/img/moves-desktop.png" alt="moves-tablet" />
                    </div>
                </div>

                <div className="software">
                    <div className="logo">
                        <img src="/img/software.svg" alt="Fitco Software"/>
                    </div>
                    <div className="container">
                        <div className="mobile-img">
                            <img src="/img/software-mobile.png" alt="moves-tablet" />
                        </div>
                        <div className="info-wrapper">
                            <p className="software-target">PARA CENTROS FITNESS Y ENTRENADORES</p>
                            <div className="highlighted">
                                <h1 className="title-bold">Transforma <span className="you-mobile">tu</span></h1>
                                <div className="underline"></div>
                            </div>
                            <h1 className="title-normal"><span className="you-desktop">tu</span> negocio fitness<br className="break-desktop"/> con nuestro software</h1>
                            <span className="text">Haz crecer tu negocio y posiciona tu marca con un canal<br className="break-desktop"/> de ventas online, tu propia página web, una gestión<br className="break-desktop"/> sencilla y ¡mucho más!</span>
                            <a href="https://fitcolatam.com/software">
                                <button className="btn-software">¡Conoce nuestro software!</button>
                            </a>
                        </div>
                    </div>
                    <div className="desktop-img">
                        <img src="/img/software-desktop.png" alt="moves-tablet" />
                    </div>
                </div>
            </div>
        </>
    )
}
