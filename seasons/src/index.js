import React from 'react';
import ReactDOM from 'react-dom'


class App extends React.Component {

    constructor(props){
        super(props);

        this.state = {lat: null, errorMessage: ''}

        window.navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({
                    lat: position.coords.latitude
                })
            },
            err => {
                this.setState({
                    errorMessage: err.message
                })
            }
        );

    }

    //Reacts says we have to define render!!!
    render(){
       
        //return (
        // <div>
        // <div>Latitude: {this.state.lat}</div>
        // <div>Error: {this.state.errorMessage}</div>
        // </div>

        if(this.state.errorMessage && !this.state.lat){
            return <div>Error: {this.state.errorMessage}</div>
        }
        else if(!this.state.errorMessage && this.state.lat){
            return <div>Latitude: {this.state.lat}</div>
        }
        else{
            return <div>Loading...</div>
        }
        //);
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)