import React from 'react';
import youtubeSvg from '../images/youtube.svg'
import whatsSvg from '../images/whatsapp.svg'
import linkedinSvg from '../images/linkedin.svg'
import facebookSvg from '../images/facebook.svg'
import twitterSvg from '../images/twitter.svg'

import styled from 'styled-components'
const Icones = styled.div`
display: flex;
justify-content:space-evenly;
align-items: center;

`
const Icones1 = styled.div`
display: flex;
flex-direction: row-reverse;
justify-content:space-evenly;
align-items: center;

`



const Icone = styled.img`
width: 40px;

:hover {

}
`


class Footer extends React.Component {

    render() {
        return (
            <footer class="rodape">
            <div id="linha1" ></div>

           <div class="rodape-links" >
              <ul>
                  <h4>INSTALAÇÃO</h4>

                  <li> <a id="rodape-link" href="#"> Trabalhamos </a> </li>
                  <li> <a id="rodape-link" href="#"> Melhores </a> </li>
                  <li> <a id="rodape-link" href="#">  Fornecedores </a> </li>
                  <li> <a id="rodape-link" href="#"> Realizamos </a> </li>
              </ul>
          </div>

          <div class="rodape-links" >
              <ul>
                  <h4>GARANTIA</h4>

                  <li> <a id="rodape-link" href="#"> Trabalhamos </a> </li>
                  <li> <a id="rodape-link" href="#"> Melhores </a> </li>
                  <li> <a id="rodape-link" href="#">  Fornecedores </a> </li>
                  <li> <a id="rodape-link" href="#"> Realizamos </a> </li>
              </ul>

          </div>            
              <div id="linha1" ></div>
              <Icones1>
              <h5>Siga-nos</h5>
                  <h5>Todos os direiros reservados</h5>
                  
                  
                  </Icones1>
                  <Icones>
              <Icone  
        src={youtubeSvg} >
       </Icone>

       <Icone src={whatsSvg}></Icone>
<Icone src={linkedinSvg}></Icone>
<Icone src={facebookSvg}></Icone>
<Icone src={twitterSvg}></Icone>
</Icones>
      </footer>
)
}
}



export default Footer



