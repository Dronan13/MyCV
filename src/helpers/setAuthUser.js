import axios from 'axios';

const setAuthUser = user => {
    if(user) {
        axios.defaults.headers.common['user'] = JSON.stringify(user);
    }
    else {
        delete axios.defaults.headers.common['user'];
    }
}

export default setAuthUser;