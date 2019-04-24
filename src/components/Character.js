import React from 'react'
import {Container, Modal} from 'semantic-ui-react'
import axios from 'axios';


class Character extends React.Component {
  state={character: {}, modalOpen: false}

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
            fontSize: '1em',
            paddingRight: '15px',
            
                }}>
        {this.props.character.name}
        </div>
        <Modal
        
        style={{background: 'black', width: '50%'}}
          open={this.state.modalOpen}
          onClose={() => this.handleClose()}
        >
        
            <Modal.Content  
            onClick={()=> this.handleClose()}
            style={{background: 'black', color: '#f2e148', fontFamily: 'Copperplate', opacity: '1'}}>
              <div>{this.props.character.name}: </div>
              <div style={{marginLeft: '20px'}}>Height - {this.props.character.height} centimeters, </div>
              <div style={{marginLeft: '20px'}}>Mass - {this.props.character.mass} kilos, </div>
              <div style={{marginLeft: '20px'}}>Gender - {this.props.character.gender},</div>
              <div style={{marginLeft: '20px'}}>Skin Color - {this.props.character.skin_color}, </div>
              <div style={{marginLeft: '20px'}}>Hair Color - {this.props.character.hair_color}, </div>
              <div style={{marginLeft: '20px'}}>Birth Year - {this.props.character.birth_year} </div>
            </Modal.Content>
         
        </Modal>

      </>
    )
  }
}

export default Character 

