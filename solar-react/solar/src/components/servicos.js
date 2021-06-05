import React from 'react';
import Servico from './servico.js'
import servicoImg from '../images/plano.webp'


class Servicos extends React.Component {

    render() {





        return (
            <main>
            <h1>NOSSOS SERVIÇOS</h1>

            <div class="servicos">

       <Servico 
       imagem={
           servicoImg} 
       titulo={
           'PLANEJAMENTO E HOMOLOGAÇÃOs'
        } 
       texto={
           'Cada projeto é personalizado, de acordo com as características do cliente. cuidamos também da homologação obrigatoria.'
        } 
       >

       </Servico>
       <Servico 
       imagem={
           servicoImg
        } 
       titulo={
           'INSTALAÇÃO'
        } 
       texto={
           'Realizamos a entrega dos equipamentos e os serviços de instalação, com profissionais técnicos qualificados.'
        } 
       >

       </Servico>
       <Servico 
       imagem={
           servicoImg
        } 
       titulo={
           'MANUTENÇÃO E GARANTIA'
        } 
       texto={
           'Trabalhamos com os melhores fornecedores do mercado, oferecermos garantia de 15 anos.'
        } 
       >

       </Servico>
</div>
</main>
)
}
}



export default Servicos