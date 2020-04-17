import axios from 'axios'

export var getAxios = function(params){ return axios.get("https://cnodejs.org/api/v1/topics",{params:params})}