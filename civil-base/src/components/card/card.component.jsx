import { Component } from 'react';

import './card.styles.css';

class Card extends Component{
    onClick = (name) =>{
        alert(name);
    }
    render(){
        const { name, id } = this.props.profesion;
        return(
            <div className='card-container' onClick={()=>this.onClick(name)} key={id}>
                <img alt={`profesion ${name}`}/>
                <h2>{name}</h2>
            </div>
        );
    }
}

export default Card;