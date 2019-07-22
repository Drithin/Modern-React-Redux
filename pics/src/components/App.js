import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component
 {
     state = {images : []}

    onSearchSubmit = async (term) => {
        const response= await unsplash.get("/search/photos", {

            params: {
                client_id:"a51c84d65c38d7de1f4c06bb7b89788c68c9533aa82798a91fbd6c200b07fcb8",
                query: term
            }
            
            // header: {
            //     Authorization: "Client-ID a51c84d65c38d7de1f4c06bb7b89788c68c9533aa82798a91fbd6c200b07fcb8"
            // }
        })

        // console.log(response.data.results);

        this.setState({images: response.data.results})
        
        // .then((response) => {
        //     console.log(response.data.results);
        // })
    }
    render() {
        return (
    <div className="ui container" style={{marginTop : '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit}/>
        <ImageList images={this.state.images}/>
    </div>
        );
}
 }


export default App;