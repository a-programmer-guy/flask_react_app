import React from 'react';
import { useHistory } from 'react-router-dom';
import history  from './History'


function Home(props) {
    let history = useHistory();
    return <h1>Welcome{this.props.location.state.user.first_name}</h1>
}

export default Home;