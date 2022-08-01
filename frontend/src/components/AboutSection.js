import React from 'react'

import {About, Description, Image} from '../styles';



const AboutSection = () => {
    return(
        <About>
            
            <Description>
            <h2> Davi Maia :)</h2>
            <h2> Estudante - Programador FullStack Jr.</h2>


            <p>Viva com orgulho. Se sua fraqueza o dominar, aqueça seu coração, cerre os dentes e siga em frente. 
                Mesmo que sua covardia o retarde, não impedirá a passagem do tempo.</p>

                <button> Botão para Contato</button>
                </Description>

                <Image>
                <img src= 'https://i0.wp.com/oxentesensei.com.br/wp-content/uploads/2021/10/20201026-demon-slayer-kimetsu-no-yaiba-movie-mugen-train-kyojuro-rengoku-1241212-1280x0-1.jpeg?resize=768%2C402&ssl=1'/>
                </Image>    
        </About>
    )
}



export default AboutSection