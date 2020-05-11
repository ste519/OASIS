import { GET_OVERALL } from './types';
import axios from 'axios';
// axios.defaults.withCredentials = true

export function getOverall() {
  return function(dispatch){
    console.log("hi")
    axios.get('https://covid19api.herokuapp.com/latest')
    .then((res) => {
      dispatch({
        type: GET_OVERALL,
        data:res.data
      })
    }
    ).catch((e) => {console.log(e)})
  }
}
