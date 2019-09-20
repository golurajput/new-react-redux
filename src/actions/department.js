import * as types from './types';
import axios from 'axios';
//gets
export function getDepartments()
{
  let token = localStorage.getItem('Authorization');
  let headers ={
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': token

  }
  return dispatch =>{
    return axios.get('https://staging.core.pokital.com/api/v1/admin/department',
      {headers: headers}
    )
    .then((response) => {
      if (response.status === 200)
      {
        dispatch(getSuccess(response.data.details.departments));
      }
      else{
        debugger
        dispatch(getError(response.data.error));
      }
    }).catch((error)=>{
      console.log(error);
    })
  }

  function getSuccess(res){
    return{
      type: types.GETS_DEPARTMENTS_SUCCESS,
      payload: res
    }
  }

  function getError(res){
    debugger
    return{
      type: types.GETS_DEPARTMENTS_ERROR,
      payload: res
    }
  }
}
//create
export function createDepartment(department)
{
  let token = localStorage.getItem('Authorization');
  let headers ={
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': token
  }
  const _that = this;
  return dispatch =>{
    return axios.post('https://staging.core.pokital.com/api/v1/admin/department',
      department,
      {headers: headers}
    )
    .then((response) => {   
      if (response.status === 200)
      {
        dispatch(createSuccess(response.data.details));
        history.push('/dashboard');
      }
      else{
        debugger
        dispatch(createError(response.data.error));
      }
    }).catch((error)=>{debugger
      console.log(error);
    })
  }

  function createSuccess(res){
    return{
      type: types.CREATE_DEPARTMENT_SUCCESS,
      payload: res
    }
  }

  function createError(res){
    debugger
    return{
      type: types.CREATE_DEPARTMENT_ERROR,
      payload: res
    }
  }
}
//delete
export function deleteDepartment(id){
  let token = localStorage.getItem('Authorization');
  const _that = this;
  let headers ={
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': token
  }
  return dispatch =>{
    return axios.delete('https://staging.core.pokital.com/api/v1/admin/department/'+id,
      {headers: headers}
    )
    .then((response) => {
      if (response.status === 200)
      {
        dispatch(deleteSuccess(response.data.details));
        alert(response.data.details.success_message);
      }
      else{
        debugger
        dispatch(deleteError(response.data.error));
      }
    }).catch((error)=>{
      console.log(error);
    })
  }

  function deleteSuccess(res){
    return{
      type: types.DELETE_DEPARTMENT_SUCCESS,
      payload: res
    }
  }

  function deleteError(res){
    debugger
    return{
      type: types.DELETE_DEPARTMENT_ERROR,
      payload: res
    }
  }
}
//update
export function updateDepartment(id,department){
  let token = localStorage.getItem('Authorization');
  let headers ={
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': token
  }
  return dispatch =>{
    return axios.put('https://staging.core.pokital.com/api/v1/admin/department/'+id,
      department,
      {headers: headers}
    )
    .then((response) => {
      if (response.status === 200)
      {
        dispatch(updateSuccess(response.data.details.department));
        alert(response.data.details.success_message);
      }
      else{
        debugger
        dispatch(updateError(response.data.error));
      }
    }).catch((error)=>{
      console.log(error);
    })
  }

  function updateSuccess(res){
    return{
      type: types.UPDATE_DEPARTMENT_SUCCESS,
      payload: res
    }
  }

  function updateError(res){
    debugger
    return{
      type: types.UPDATE_DEPARTMENT_ERROR,
      payload: res
    }
  }
}
//get
// export function getDepartment(id){
//   let token = localStorage.getItem('Authorization');
//   let headers ={
//     'Accept': 'application/json',
//     'Content-Type': 'application/json',
//     'Authorization': token
//   }
//   debugger
//   return dispatch =>{
//     return axios.get('https://staging.core.pokital.com/api/v1/admin/department/'+id,
//       {headers: headers}
//     )
//     .then((response) => {
//       debugger
//       if (response.status === 200)
//       {
//         dispatch(get_department_Success(response.data.details.department));
//       }
//       else{
//         debugger
//         dispatch(get_department_Error(response.data.error));
//       }
//     }).catch((error)=>{
//       console.log(error);
//     })
//   }}

  export function getDepartment(id) {
    debugger
    let token = localStorage.getItem('Authorization');
    return function (dispatch) {
      // dispatch(getInitialState)
    let headers = {
        'Content-Type' : 'application/json',
        'Authorization' : token,
        'Accept' : 'application/json'
      }
      axios.get('https://staging.core.pokital.com/api/v1/admin/department/'+id,{headers: headers})
        .then(function (response) {
          debugger
          if(response.status === 200){
            dispatch(get_department_Success(response.data.details.department))
          }else{
            dispatch(get_department_Error(response.data.error))
          }
        }).catch(error => { 
        
      })
    }
  }

  export function get_department_Success(res){
    return{
      type: types.GET_DEPARTMENT_SUCCESS,
      payload: res
    }
  }

  // export function getInitialState(){
  //   return{
  //     type: types.GET_INITIAL_STATE
  //   }
  // }

  export function get_department_Error(res){
    return{
      type: types.GET_DEPARTMENT_ERROR,
      payload: res
    }
  }
