import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import { ActionCreators } from '../../actions';
import {connect} from 'react-redux';
import { 
  Form,
  Container,
  TextArea,
 } from 'semantic-ui-react';

class Forms extends Component {
  constructor(props){
    super(props)
    this.state={
      title: '',
      active:'1',
      description: '',
      id:false,
      titleError: false,
      activeError: false,
      descriptionError: false,
    }
  }

  componentDidMount(){
    debugger
    this.getDepartmentData();
  }

  getDepartmentData(){
    let id = this.props.history.location.state && this.props.history.location.state.id;
    if(id){
      this.props.getDepartment(id);
    }
    
  }

  componentWillReceiveProps(nextProps){
    debugger
    if(nextProps.department_data){
      this.setState({
        title: nextProps.department_data.title,
        active: nextProps.department_data.active,
        description: nextProps.department_data.description,
        id: nextProps.department_data.uuid
      })
    }
  }

  handleSumit=()=>{
    if(this.handleValiadtion())
    {
      if(this.state.id){
        this.props.updateDepartment(this.state.id,{
          title: this.state.title,
          description: this.state.description,
          active: this.state.active
        })
      }
      else{
        this.props.createDepartment({
          title: this.state.title,
          description: this.state.description,
          active: this.state.active
        })
      }
    }
  }

  handleValiadtion()
  {
    if(this.state.active && this.state.description && this.state.title){
      return true;
    }
    else{
      return false;
    }
  }

  render() {
    return (
      <Container className="container-form">
          <h1>Create Department</h1>
        <Form>
          <Form.Group widths='equal'>
            <Form.Input
              label='Title'
              value={this.state.title}
              error={this.state.titleError}
              onChange={(e)=>this.setState({
                  title: e.target.value
              })}
              placeholder='title'
            />
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.Field label='Status'
              control='select'
              value={this.state.active}
              onChange={(e)=>this.setState({
                  active: e.target.value
                  })
              }
            >
              <option value='1'>Active</option>
              <option value='0'>De-Active</option>
            </Form.Field>
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.Field
              control={TextArea}
              label='Description'
              value={this.state.description}
              error={this.state.descriptionError}
              onChange={(e)=>this.setState({
                  description: e.target.value
              })}
              placeholder='Description........'
            />
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.Button
              primary 
              onClick={()=>this.handleSumit()}
            >
              {this.state.id ?
                <span>Update</span>
                :<span>Submit</span>
              }
            </Form.Button>
          </Form.Group>
        </Form>
      </Container>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    ActionCreators,
    dispatch
  );
}
  
  function mapStateToProps(state) {
    debugger
    return {
      department_data: state.department.department_data
    };
  }
  
export default connect(mapStateToProps,mapDispatchToProps)(Forms);