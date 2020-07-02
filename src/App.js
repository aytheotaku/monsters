import React, {Component} from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list-component.js'
// import {Dummy} from './Dummy'
import {SearchBox} from './components/search-box/search-box-component.jsx'

class App extends Component{
  constructor(){
    super();
    
    this.state = {
      monsters : [],
      searchField: ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users') 
    .then(res=>res.json()).then(data=>this.setState({monsters:data}))
    .catch(err=>console.log(`there seems to be no network ${err}`));
  }

  render(){
    const {monsters, searchField} = this.state
    const filteredMonsters  = monsters.filter(monster=>monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="App">
          <h1>Monsters Rolodex</h1>
          <SearchBox placeholder = "search monster"
          handleChange = {event=>this.setState({searchField:event.target.value})}/>

          <CardList users={filteredMonsters}/>
      </div>
    )
  }
}

export default App;
