import { Component } from 'react';
import './search-box.style.css';
class SearchBox extends Component{
    render(){
        const { onSearchChange } = this.props;
        return(
            <input className='search-box' type='search' placeholder='search' onChange={onSearchChange}/>
        );
    }
}

export default SearchBox;