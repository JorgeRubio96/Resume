import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText } from 'react-mdl';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab:0 };
    }

    toggleCategories() {
        if(this.state.activeTab === 0) {
            return(
                <div className="projects-grid">
                    {/* Project 1*/}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height:'176px', background: 'url(https://www.trishanatechnologies.com/images/course24.jpg) center / cover' }}>Grease Lang</CardTitle>
                        <CardText>
                            Grease programming language, little compiler project based in python, with C based Virtual Machine
                        </CardText>
                        <CardActions border>
                            <Button href="https://github.com/JorgeRubio96/grease-lang/tree/master/vm" rel="noopener noreferrer"  target="_blank" colored>GitHub</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>
                </div>
            )
        } else if(this.state.activeTab === 1) {
            return(
                <div className="projects-grid">
                    {/* Project 1*/}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height:'176px', background: 'url(https://rosolutions.com.mx/blog/wp-content/uploads/2019/06/1-y6C4nSvy2Woe0m7bWEn4BA.png) center / cover' }}>Resume App</CardTitle>
                        <CardText>
                            This is a little project to display my information to employers in a more dynamic and fun way
                        </CardText>
                        <CardActions border>
                            <Button href="https://github.com/JorgeRubio96/Resume" rel="noopener noreferrer"  target="_blank" colored>GitHub</Button>
                            <Button href="http://jorgerubio96.github.io/Resume/" rel="noopener noreferrer"  target="_blank" colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>
                </div>
            )
        } else if(this.state.activeTab === 2) {
            return(
                <div className="projects-grid">
                    {/* Project 1*/}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height:'176px', background: 'url(http://www.ingenioteka.com/wp-content/uploads/2018/04/python-logo.png) center / cover' }}>Grease Lang</CardTitle>
                        <CardText>
                            Grease programming language, little compiler project based in python
                        </CardText>
                        <CardActions border>
                            <Button href="https://github.com/JorgeRubio96/grease-lang" rel="noopener noreferrer"  target="_blank" colored>GitHub</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>
                </div>
            )
        }
    }
    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId })} ripple>
                    <Tab>C/C++</Tab>
                    <Tab>React</Tab>
                    <Tab>Python</Tab>
                </Tabs>
                <Grid>
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}
export default Projects;
