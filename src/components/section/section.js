import React, {Component} from 'react';
import './section.css'

class Section extends Component {
    render() {
        return (
            <section className='th-sectionSpace th-hasLayout'>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-10 col-sm-offset-1 col-xs-12">
                            <div className='th-sectionHead'>
                                <div className="th-sectionTitle">
                                    <h2>The Services
                                        <span>We Offer</span>
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Section;