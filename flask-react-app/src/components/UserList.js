import React, { Component } from 'react'

export class UserList extends Component {
    constructor(props){
        super(props);
        this.state = {
        user_list:['one', 'two', 'three']
        }
    }
    componentDidMount() {
        fetch('/users')
        .then(res => res.json())
        .then(data => {
            this.setState({
                user_list: data
            })
        })
    }

    render() {
        const users  = this.state.user_list;
        return (
            <div>
                <h1>User List</h1>
                <ul>
                    {users.map((user, index) => {
                        return <li key={index}>{user.last_name}</li>
                    })}
                </ul>
            </div>
        )
    }
}

export default UserList
