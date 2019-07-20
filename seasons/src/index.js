import React from 'react';
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner.js'

class App extends React.Component {

    // constructor(props){
    //     super(props);

    //     this.state = {lat: null, errorMessage: ''}
    // }

    state = {lat: null, errorMessage: ''}

    componentDidMount(){
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

    componentDidUpdate(){
        console.log('My component was updated - rerendered on screen');
    }

    renderContent(){
        if(this.state.errorMessage && !this.state.lat){
            return <div>Error: {this.state.errorMessage}</div>
        }
        else if(!this.state.errorMessage && this.state.lat){
            return <SeasonDisplay lat={this.state.lat}/>
        }
        else{
            return <Spinner message="Select a Location....."/>;
        }
    }
    //Reacts says we have to define render!!!
    render(){
       
        //return (
        // <div>
        // <div>Latitude: {this.state.lat}</div>
        // <div>Error: {this.state.errorMessage}</div>
        // </div>

        return(
            <div className = "border red">
              {this.renderContent()}
            </div>
        );
        //);
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)