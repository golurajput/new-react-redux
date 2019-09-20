import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { 
  Button,
  Icon
} from 'semantic-ui-react';

class Headers extends Component {
  constructor(props){
    super(props)
    this.state={}
  }
  handleLogout(){
    localStorage.removeItem('Authorization');
    this.props.history.push('/login');
  }

  handleDashboard = () =>{
    this.props.history.push('/dashboard');
  }
  render() {
    return (
      <React.Fragment>
        <Button 
          icon
          floated='left'
          onClick={()=>this.handleDashboard()}
          className='dashboard-button'
        >
          <Icon name='home'/>
        </Button>
        <Button 
          color='red'
          icon
          floated='right'
          onClick={()=>this.handleLogout()}
          className='logout-button'
        >
          Logout
          <Icon name='sign out alternate'/>
        </Button>
      </React.Fragment>
    )
  }
}
export default withRouter(Headers);