import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './resume-components/education';

class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{ textAlign: 'center'}}>
                            <img
                                src="https://scontent.fzcl2-1.fna.fbcdn.net/v/t1.0-9/10314022_10203772568660556_3349126809494533953_n.jpg?_nc_cat=101&_nc_oc=AQmQI-0LPBxEp79H7I17v3ypnvXGR0Wvr03hnyjCLmAY9Tfjhd6kqklL10cZGECflOg&_nc_ht=scontent.fzcl2-1.fna&oh=8170c6679cbb5f2145737d23f6ad3e62&oe=5E96EAA8"
                                alt="avatar"
                                style={{ height: '300px' }}
                            />
                        </div>
                        <h2 style={{paddingTop: '2em'}}>Jorge Rubio</h2>
                        <h4 style={{color: 'grey'}}>Software Engineer</h4>
                        <hr style={{borderTop: '3px solid #833fb2', width:'50%' }}/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sodales vel enim vitae aliquam. Vivamus dignissim finibus tortor, a malesuada sapien mollis non. Nam vel volutpat dolor. In hac habitasse platea dictumst. Suspendisse varius turpis in nulla eleifend, at fringilla lectus ullamcorper. Pellentesque pharetra vitae libero in aliquet. Morbi sodales a metus eu gravida. Donec ut maximus ligula. Ut vitae ipsum tortor.

Phasellus vestibulum tellus volutpat, luctus tellus ac, dictum velit. Nunc tristique tortor ac eleifend iaculis. Fusce eleifend velit at lacus ornare venenatis. Etiam in convallis lacus. Vivamus a augue libero. Proin egestas fermentum purus, sit amet bibendum diam commodo in. Sed quis blandit lectus, sed auctor nibh. Phasellus in mauris quis nisi mollis euismod. Suspendisse potenti. Etiam aliquam, nisi eu accumsan laoreet, neque leo ultrices tellus, non vehicula risus massa vel est.</p>
                        <hr style={{borderTop: '3px solid #833fb2', width:'50%' }}/>
                        <h5>Address</h5>
                        <p>Cerrada Cumbre Mallorca #102, 64349, Monterrey, N.L., Mexico</p>
                        <h5>Phone</h5>
                        <p>+52 (492)-101-1487</p>
                        <h5>Email</h5>
                        <p>jorge.rubiobarboza96@gmail.com</p>
                        <h5>Web</h5>
                        <p><a href="http://jorgerubio96.github.io/Resume/" rel="noopener noreferrer"  target="_blank">https://jorgerubio96.github.io/Resume/</a></p>
                        <hr style={{borderTop: '3px solid #833fb2', width:'50%' }}/>
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>

                        <Education
                            startYear={2014}
                            endYear={2018}
                            schoolName="Tecnologico de Monterrey (ITESM)"
                            schoolDescription="Computer Science"
                        />
                        <hr style={{borderTop: '3px solid #e22947'}}/>
                        <h2>Experience</h2>

                    </Cell>
                    
                </Grid>
            </div>
        );
    }
}

export default Resume;