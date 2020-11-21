import React, {Component} from 'react';
import './nav.css'

class Nav extends Component {
    render() {
        return (
            <div>
                <div className="header">
                    <div className="a1">
                        <img className="img1" src="http://miraclesoftsolutions.com/medical/images/logo.png"/>
                    </div>

                    <div className="login">
                        <br/>
                        <a href="">
                            domain@domain.com
                        </a>
                        <a href="">
                            cominfo@domain.
                        </a>
                        <a href="">
                            Служба поддержки
                        </a>
                        <hr/>
                        <p>

                        </p>
                        <button type="button" className="btn btn-success">
                            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-alarm-fill"
                                 fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                      d="M6 .5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H9v1.07a7.001 7.001 0 0 1 3.274 12.474l.601.602a.5.5 0 0 1-.707.708l-.746-.746A6.97 6.97 0 0 1 8 16a6.97 6.97 0 0 1-3.422-.892l-.746.746a.5.5 0 0 1-.707-.708l.602-.602A7.001 7.001 0 0 1 7 2.07V1h-.5A.5.5 0 0 1 6 .5zM.86 5.387A2.5 2.5 0 1 1 4.387 1.86 8.035 8.035 0 0 0 .86 5.387zM11.613 1.86a2.5 2.5 0 1 1 3.527 3.527 8.035 8.035 0 0 0-3.527-3.527zM8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5z"/>
                            </svg>

                        </button>
                    </div>

                </div>
            </div>
        );
    }
}

export default Nav;