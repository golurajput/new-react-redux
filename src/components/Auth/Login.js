import React, { Component } from 'react'
import {bindActionCreators} from 'redux';
import { ActionCreators } from '../../actions';
import {connect} from 'react-redux';
import validation from '../../helpers/validation';
import '../../stylesheet/style.css';
import {
  Form,
  Icon,
  Container,
  Button
} from 'semantic-ui-react'

class Login extends Component {

  constructor(props){
    super(props)
    this.state={
      email: '',
      password: '',
      emailError: false,
      passwordError: false,
    }
  }

  handleSubmit(){
    this.handleValidation();
      
  }

  handleValidation(){
    let emailError = validation.emailValidation(this.state.email);
    let passwordError = validation.passwordValidation(this.state.password);
    if(emailError === 'success' && passwordError === 'success')
    {
      this.props.loginUser({
        email: this.state.email,
        password: this.state.password,
        timezone: 'Asia/Calcutta',
        type: 'admin'
      })
    }
    else{
      if(emailError !== 'success' && passwordError !== 'success'){
        this.setState({
          emailError: emailError,
          passwordError: passwordError
        })
      }
      else if(emailError !== 'success'){
        this.setState({
          emailError: emailError,
        })
      }
      else{
        this.setState({
          passwordError: passwordError,
        })
      }
    }
  }

  componentWillMount(){
    this.checkAuthorization()
  }
  
  checkAuthorization(){
    let auth = localStorage.getItem('Authorization');
    if(auth){
      this.props.history.push('/dashboard');
    }
  }

  render() {
    return (
      <React.Fragment>
        <Container className="login-container">
          <div>
            
          </div>
          <Form>
            <h1>Login</h1>
              <Form.Input 
                label='Email'
                placeholder='Email'
                error={this.state.emailError}
                value={this.state.email}
                onChange={(e)=>this.setState({
                  email: e.target.value,
                  emailError: false
                  })
                }  
              />
              <Form.Input 
                label='Password'
                type='password'
                error={this.state.passwordError}
                value={this.state.password}
                onChange={(e)=>this.setState({
                  password: e.target.value,
                  passwordError: false,
                  })
                } 
                placeholder='Password'
              />
            <Button
              type='submit'
              floated='left'
              icon
              labelPosition='left'
              size='small'
              onClick={()=>this.handleSubmit()}
            >
              <Icon name='sign in alternate'/>
              Login
            </Button>
            <Button 
              type='submit'
              icon
              floated='right'
              labelPosition='left'
              size='small'
            >
              <Icon name="user plus"/>
              SingUp
            </Button>
          </Form>
        </Container>
      </React.Fragment>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
  return {
  	messages: null,
  	errorMessage: null
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);