import React from 'react'
import {Container, Modal, Image} from 'semantic-ui-react'
import axios from 'axios';


class Planet extends React.Component {
  state={modalOpen: false}

  handleOpen =() => {
    this.setState({modalOpen: true})
  }

  handleClose =() => {
    this.setState({modalOpen: false})
  }

  render () {
    return(
      <>
        <div
        onClick={()=> this.handleOpen()}
        style={{
            fontFamily: 'Copperplate', 
            color: '#f2e148', 
            fontWeight: 'bold',
            cursor: 'pointer',
            fontSize: '.8em',
            paddingRight: '15px',
            
                }}>
        Home Planet - {this.props.planet && this.props.planet.name}
        </div>
        <Modal
        
        style={{background: 'black', width: '50%'}}
          open={this.state.modalOpen}
          onClose={() => this.handleClose()}
        >
            <Modal.Content  
            onClick={()=> this.handleClose()}
            style={{background: 'black', color: '#f2e148', fontFamily: 'Copperplate', opacity: '1'}}>
              <span style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <span>
                <Image size='medium' inline src="https://media.giphy.com/media/idfTXpF7jdkVW/giphy.gif" rounded/>  
                <br />
                </span>
                <span>
              <div style={{marginLeft: '20px', fontSize: '1.1em'}}>   
                {this.props.planet && this.props.planet.name}:
              </div>
                <div inline style={{marginLeft: '20px'}}>Climate - { this.props.planet && this.props.planet.climate} </div>
                <div style={{marginLeft: '20px'}}>Diameter - { this.props.planet && this.props.planet.diameter} kilometers, </div>
                <div style={{marginLeft: '20px'}}>Gravity - { this.props.planet && this.props.planet.gravity} gravitational unit(s),</div>
                <div style={{marginLeft: '20px'}}>Orbital Period - { this.props.planet && this.props.planet.orbital_period} days, </div>
                <div style={{marginLeft: '20px'}}>Population - { this.props.planet && this.props.planet.population}, </div>
                <div style={{marginLeft: '20px'}}>Rotation Period - {this.props.planet && this.props.planet.rotation_period} hours, </div>
                <div style={{marginLeft: '20px'}}>Bodies of Water - {this.props.planet && this.props.planet.surface_water}, </div>
                <div style={{marginLeft: '20px'}}>Terrain - {this.props.planet && this.props.planet.terrain} </div>
                </span>
                </span>
            </Modal.Content>
        </Modal>

      </>
    )
  }
}

export default Planet 

