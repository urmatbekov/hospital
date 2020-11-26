import React, {Component} from 'react';
import Service from "../../service";

const initialState = {
    username: "",
    password: "",
    password2: "",
    email: ""
}

class Register extends Component {

    service = new Service()

    state = initialState

    onChange = (e) => {
        const elem = e.currentTarget
        this.setState({
            [elem.name]: elem.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        const state = this.state
        if (state.password !== state.password2) {
            this.setState({error: "Password not same"})
            return;
        }
        this.service.createUser(this.state).then((data) => {
                console.log(data)
                this.setState(initialState)
            }
        ).catch(async ({res}) => {
            // ошибканы кармоо
            const data = await res.json()
            for (let index in data) {
                const error = data[index]
                this.setState({error: error[0]})
            }
        })


    }

    render() {
        return (
            <div className="col-md-4 offset-md-4 mt-4">
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="UserName">Username</label>
                        <input onChange={this.onChange} className="form-control" name="username" type="text"
                               id="UserName"
                               value={this.state.username}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="Email">Email</label>
                        <input onChange={this.onChange} className="form-control" name="email" type="email"
                               id="Email"
                               value={this.state.email}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="Password">Password</label>
                        <input onChange={this.onChange} className="form-control" name="password" type="password"
                               id="Password"
                               value={this.state.password}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="Password2">Password2</label>
                        <input onChange={this.onChange} className="form-control" name="password2" type="password"
                               id="Password2"
                               value={this.state.password2}/>
                    </div>
                    <button type="submit" className="btn btn-primary">Register</button>
                </form>
            </div>
        );
    }
}

export default Register;