import React from 'react';
import axios from 'axios';


class App extends React.Component {

    constructor(){
        super()
        this.state = {
        }
      }
    
      componentDidMount() {
          console.log('in CDM')
          axios.get('/api/clients')
            .then(clients => {
                console.log('in axios in CDM')
                this.setState({clients: clients.data})
            })
            .catch(err => {
                this.setState({ error: err })
            })    
      }

    render() {
        return(<h1>This is my App</h1>) 
    }
}

export default App
