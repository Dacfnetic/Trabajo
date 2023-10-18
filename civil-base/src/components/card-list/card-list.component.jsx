import { Component } from 'react';
import './card-list.style.css';

class CardList extends Component {
    onClick = (name) =>{
        alert(name);
    }
    render(){
        const { filteredProfesions } = this.props;
        const { onClick } = this;
        return(
            <div className='card-list'>
                {filteredProfesions.map((profesion)=>{
                    const { name, id } = profesion;
                    return(
                        <div className='card-container' onClick={()=>onClick(name)} key={id}>
                            <img alt={`profesion ${name}`}/>
                            <h2>{name}</h2>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default CardList;