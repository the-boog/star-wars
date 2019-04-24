import React from 'react'
import axios from 'axios'
import { Image, Container } from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import Character from './Character'
import Planet from './Planet'

class Characters extends React.Component {
  state={allCharacters: '', allPlanets: '', results: ''}

  componentDidMount = () => {
    axios.get("https://swapi.co/api/people/?page=1")
      .then( res => this.setState({allCharacters: [...this.state.allCharacters, res.data.results]}))
      axios.get("https://swapi.co/api/people/?page=2")
      .then( res => this.setState({allCharacters: [...this.state.allCharacters, res.data.results]}))
      axios.get("https://swapi.co/api/people/?page=3")
      .then( res => this.setState({allCharacters: [...this.state.allCharacters, res.data.results]}))
      axios.get("https://swapi.co/api/people/?page=4")
      .then( res => this.setState({allCharacters: [...this.state.allCharacters, res.data.results]}))
      axios.get("https://swapi.co/api/people/?page=5")
      .then( res => this.setState({allCharacters: [...this.state.allCharacters, res.data.results]}))
      axios.get("https://swapi.co/api/people/?page=6")
      .then( res => this.setState({allCharacters: [...this.state.allCharacters, res.data.results]}))
      axios.get("https://swapi.co/api/people/?page=7")
      .then( res => this.setState({allCharacters: [...this.state.allCharacters, res.data.results]}))
      axios.get("https://swapi.co/api/people/?page=8")
      .then( res => this.setState({allCharacters: [...this.state.allCharacters, res.data.results]}))
      axios.get("https://swapi.co/api/people/?page=9")
      .then( res => this.setState({allCharacters: [...this.state.allCharacters, res.data.results]}))
      axios.get("https://swapi.co/api/planets/?page=1")
      .then( res => this.setState({allPlanets: [...this.state.allPlanets, res.data.results]}))
      axios.get("https://swapi.co/api/planets/?page=2")
      .then( res => this.setState({allPlanets: [...this.state.allPlanets, res.data.results]}))
      axios.get("https://swapi.co/api/planets/?page=3")
      .then( res => this.setState({allPlanets: [...this.state.allPlanets, res.data.results]}))
      axios.get("https://swapi.co/api/planets/?page=4")
      .then( res => this.setState({allPlanets: [...this.state.allPlanets, res.data.results]}))
      axios.get("https://swapi.co/api/planets/?page=5")
      .then( res => this.setState({allPlanets: [...this.state.allPlanets, res.data.results]}))
      axios.get("https://swapi.co/api/planets/?page=6")
      .then( res => this.setState({allPlanets: [...this.state.allPlanets, res.data.results]}))
      axios.get("https://swapi.co/api/planets/?page=7")
      .then( res => this.setState({allPlanets: [...this.state.allPlanets, res.data.results]}), ()=> this.mergeCharacters())
  }

  getCharPlanet = (homeworld) => { 
    const planets = [];
    for (var i = 0; i < this.state.allPlanets.length; ++i) {
      for (var j = 0; j < this.state.allPlanets[i].length; ++j)
    planets.push(this.state.allPlanets[i][j]);
      }
    const planet = planets.map(planet => {
      if (homeworld === planet.url)
      return planet.name 
    })
      return planet
    }

  getPlanetName = (homeworld) => {
    const planets = [];
    for (var i = 0; i < this.state.allPlanets.length; ++i) {
      for (var j = 0; j < this.state.allPlanets[i].length; ++j)
    planets.push(this.state.allPlanets[i][j]);
      }
      const planet = planets.filter(planet => 
        (homeworld === planet.url)
      )
       const planetName = planet[0]
      return planetName 
  }
  
  render () {
  const characters = [];
  for (var i = 0; i < this.state.allCharacters.length; ++i) {
    for (var j = 0; j < this.state.allCharacters[i].length; ++j)
  characters.push(this.state.allCharacters[i][j]);
    }

  const planets = [];
  for (var i = 0; i < this.state.allPlanets.length; ++i) {
    for (var j = 0; j < this.state.allPlanets[i].length; ++j)
  planets.push(this.state.allPlanets[i][j]);
    }

    return(
      <>

      <Container style={{background: 'green', height: '80%', opacity: '.5', width: "80%", display: 'flex', flexWrap: 'wrap' }}>
      {characters.map( char =>
        
      <div key={char.name} style={{padding: '5px', }}>
        <Character 
          character={char}
          // onClick ={()=>this.props.history.push(`/character/${char.name}`)} 
          />
        <Planet 
          planet={this.getPlanetName(char.homeworld)}
        />
       </div>
        )}
       
      </Container>
      </>
    )
  }
}

export default Characters