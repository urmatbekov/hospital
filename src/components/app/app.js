import React, {Component} from 'react';
import Best from "../best/best";
import Header from "../header/header";
import Swiper from "../carousels/carousels";
// import Parallax from "../parallax/parallax";




class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Swiper/>
                <Best/>
                {/*<Parallax/>*/}
            </div>
        );
    }
}

export default App;