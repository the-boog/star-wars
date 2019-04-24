import React from 'react'
import {Menu} from 'semantic-ui-react'
import {withRouter} from 'react-router-dom'

class Navbar extends React.Component {
  state={highlighted: false}

  render() {
    return (
<>
  <div style={{display: 'flex', justifyContent: 'center'}}>
    <Menu style={{background: '#f2e148', width: '186.75px', marginTop: '20px'}}>
      <Menu.Item style={styles.normal} onClick={() => this.props.history.push('/')} >
        Home
      </Menu.Item>
      <Menu.Item style={styles.normal} onClick={() => this.props.history.push('/characters')} >
        Characters
      </Menu.Item>
    </Menu>
    </div>
    <div style={{padding: '20px'}} />
  </>
    )
  }
}  

export default withRouter(Navbar);

const styles = {

  normal: {
    textAlign: "center",
    background: 'black',
    color: '#f2e148',
    fontFamily: 'Copperplate',
    cursor: 'pointer'
  }
};
