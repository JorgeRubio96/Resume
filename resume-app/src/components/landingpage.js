import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class LandingPage extends Component {
    render() {
        return (
            <div sytle={{width: '100%', margin: 'auto'}}>
                <Grid className="landingGrid">
                    <Cell col={12}>
                        <img 
                            src="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png"
                            alt="avatar"
                            className="avatar-img"
                        />
                        <div className="banner-text">
                            <h1>Full Stack Software Engineer</h1>
                            <hr/>
                            <p>Angular | NodeJS | React | Javascript | Java | C/C++ | Python | R</p>
                            <div className="social-links">
                                {/* GitHub */}
                                <a href="https://github.com/JorgeRubio96"  rel="noopener noreferrer"  target="_blank">
                                    <i class="fa fa-github-square" aria-hidden="true"/>
                                </a>
                                {/* Linkedin */}
                                <a href="https://www.linkedin.com/in/jorge-emilio-rubio-barboza-840211143/"  rel="noopener noreferrer"  target="_blank">
                                 <i class="fa fa-linkedin-square" aria-hidden="true"/>
                                </a>
                                {/* GitHub */}
                                <a href="https://github.com/JorgeRubio96"  rel="noopener noreferrer"  target="_blank">
                                    <i class="fa fa-github-square" aria-hidden="true"/>
                                </a>
                                {/* Linkedin */}
                                <a href="https://www.linkedin.com/in/jorge-emilio-rubio-barboza-840211143/"  rel="noopener noreferrer"  target="_blank">
                                 <i class="fa fa-linkedin-square" aria-hidden="true"/>
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default LandingPage;