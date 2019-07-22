import React from 'react';


class SearchBar extends React.Component {

    state = {term : ''}
    // onInputChange(event){
    //     console.log(event.target.value)
    // } * we remove this func and call a state here *

    // onChange={(e) => console.log(e.target.value)}
    //Inside input tag is an alternate way of calling a function

    // onFormSubmit(event){
    //     event.preventDefault();
    //     console.log(this.state.term);
    // }

    onFormSubmit = (event) => {
        event.preventDefault();
       
        this.props.onSubmit(this.state.term)
    };
   
    render(){
        return (
        <div className="ui segment">
           <form onSubmit={this.onFormSubmit} className = "ui form">
              <div className="field">
              <label>Image Search</label>
               <input type='text' 
               placeholder='Enter your search term'
               value = {this.state.term}
               onChange = {e => this.setState({term: e.target.value})}/>
               </div>
           </form>
            </div>
        )
    }
}

export default SearchBar;