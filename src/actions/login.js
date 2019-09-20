import * as types from './types';
import axios from 'axios';
import { history } from '../routers/AppRouter';

export function loginUser(user_data)
{
    debugger
    const _that = this;
    let headers ={
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
    return dispatch =>{
        return axios.post('https://staging.core.pokital.com/api/v1/login', user_data,{headers: headers})
        .then((response) => {
            if (response.status === 200)
            {
                localStorage.setItem('Authorization','Bearer '+response.data.details.token);
                dispatch(loginSuccess(response.data.details.user));
                history.push('/dashboard');

            }
            else{
                dispatch(loginError(response.data.error));
            }
        }).catch((error)=>{
        })
    }

    function loginSuccess(res){
        return{
          type: types.LOGIN_SUCCESS,
          payload: res
        }
    }

    function loginError(res){
        return{
          type: types.LOGIN_ERROR,
          payload: res
        }
      }
}