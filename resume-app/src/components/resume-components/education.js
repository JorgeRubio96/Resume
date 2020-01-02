import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Education extends Component {
    render() {
        return (
            <Grid>
                <Cell col={4}>
                    <p>{this.props.startYear} - {this.props.endYear}</p>
                    <p>Field of Study</p>
                    <p>GPA</p>                  
                </Cell>
                <Cell col={8}>
                    <h4 style={{marginTop:'0px'}}>{this.props.schoolName}</h4>
                    <p>{this.props.schoolDescription}</p>
                    <p>{this.props.gpa}/4 ({this.props.overAll}/100)</p>
                </Cell>
            </Grid>
        )
    }
}

export default Education;