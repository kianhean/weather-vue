import axios from 'axios';
const API_URL = 'https://api.data.gov.sg';
export class APIService{

constructor(){
}

getData() {
    const url = `${API_URL}/v1/environment/rainfall?date=2018-12-11`;
    return axios.get(url).then(response => response.data);
}

}