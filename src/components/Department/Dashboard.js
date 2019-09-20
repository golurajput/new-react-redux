import React, { Component } from 'react';
import { ActionCreators } from '../../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { 
  Table,
  Container,
  Icon,
  Button
} from 'semantic-ui-react';

class Dashboard extends Component {
  constructor(props){
    super(props)
    this.state={
      departments: [],
      editMode: false,
      id: 1
    }
  }

  componentWillMount(){
    this.getDepart();
  }

  getDepart(){
    this.props.getDepartments();
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.departments){
      this.setState({
        departments: nextProps.departments
      })
    }
    if(nextProps.deletedData){
      debugger
      this.getDepart();
    }
  }

  handleCreate=()=>{
    this.props.history.push('/department/form');
  }

  handleDelete=(id)=>{
      this.props.deleteDepartment(id)
  }

  handleEdit=(id)=>{
    this.props.history.push({ pathname: '/department/form/'+id, state: {id: id}});
  }
  
  render(){
    const { departments } = this.state;
  	return(
      <Container>
        <Table 
          key={this.state.id}
          inverted
          selectable
          size='small'
        >
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>
                Status
              </Table.HeaderCell>
              <Table.HeaderCell>
                Title
              </Table.HeaderCell>
              <Table.HeaderCell>
                Description
              </Table.HeaderCell>
              <Table.HeaderCell>
              </Table.HeaderCell>
              <Table.HeaderCell>
                <Button
                  onClick={()=>this.handleCreate()}
                    floated='right'
                    icon
                    labelPosition='left'
                    primary
                    size='small'
                  >
                  <Icon name='user' />
                   Create
                </Button>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            { departments && departments.map((department,index)=>
              <Table.Row 
                key={index}
              >
                <Table.Cell>
                  {department.active === 1?
                    <Icon name='lock open'/>
                    :<Icon name='lock'/>
                  }
                </Table.Cell>
                <Table.Cell>
                  {department.title}
                </Table.Cell>
                <Table.Cell>
                  {department.description}
                </Table.Cell>
                <Table.Cell>
                  <Button 
                    color={'grey'}
                    onClick={()=>this.handleDelete(department.uuid)}
                  >
                    <Icon name='trash' />
                  </Button>
                </Table.Cell>
                <Table.Cell>
                  <Button 
                    color={'green'}
                    icon
                    onClick={()=>this.handleEdit(department.uuid)}
                  >
                    <Icon name='edit outline' />
                  </Button>
                </Table.Cell>
              </Table.Row>
            )}
          </Table.Body>
        </Table>
      </Container>	
  	);
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
  return {
    departments: state.department.data,
    deletedData: state.department.deletedData
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(Dashboard);
