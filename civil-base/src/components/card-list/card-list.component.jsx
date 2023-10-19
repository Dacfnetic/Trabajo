import { Component } from 'react';
import './card-list.style.css';
import Card from '../card/card.component';

class CardList extends Component {
    render(){
        const { filteredProfesions } = this.props;
        return(
            <div className='card-list'>
                {filteredProfesions.map((profesion)=>{
                    return(<Card key={profesion.id} profesion={profesion}/>);
                })}
            </div>
        );
    }
}

export default CardList;