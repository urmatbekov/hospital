import React, {Component} from 'react';
import Service from "../../service";

const initialState = {
    username: "",
    password: ""
}

class Login extends Component {
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
        this.service.createLogin(this.state).then((data) => {
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
                        <label htmlFor="UserName">Login</label>
                        <input onChange={this.onChange} className="form-control" name="username" type="text"
                               id="UserName"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="Password">Password</label>
                        <input onChange={this.onChange} className="form-control" name="password" type="password"
                               id="Password"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Войти</button>
                </form>
            </div>
        );
    }
}

export default Login;