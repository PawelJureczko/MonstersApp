import React, {Component} from 'react';
import './App.css';
import {CardList} from './components/cardlist/cardlist.component';
import { Searchbar } from './components/searchbar/searchbar.component';

class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters:[],
      searchbar: ''
    }
  }


  componentDidMount=()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => this.setState({monsters: data}))
  }
  render(){
  const filteredMonsters = this.state.monsters.filter(item=>(
    item.name.toLowerCase().includes(this.state.searchbar.toLowerCase())
  ))

  return (
    <div className="App">
      <h1 className="headerFont">Monsters Application</h1>
      <Searchbar handleChange={e=>this.setState({searchbar: e.target.value})}/>
      <CardList monster={filteredMonsters}/>
    </div>
  );
  }
}

export default App;
