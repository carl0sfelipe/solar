import React from 'react';
import servicoImg from '../images/plano.webp'



class Servico extends React.Component {

    render() {
        return (
        
        <div class="servico">
                    <img src={this.props.imagem}/>
                    <h3>{this.props.titulo}</h3>
                    <p>
                    {this.props.texto}
                    </p>
                </div>

)
}
}



export default Servico