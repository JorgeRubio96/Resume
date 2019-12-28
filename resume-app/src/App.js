import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl'; 
import Main from './components/main';
import { Link } from 'react-router-dom';
class App extends Component{
  render() {
    return (
      <div className="demo-big-content">
          <Layout>
              <Header className="header-color" title="Title" scroll>
                  <Navigation>
                      <Link to="/Resume/resume">Resume</Link>
                      <Link to="/Resume/projects">Projects</Link>
                      <Link to="/Resume/aboutme">About Me</Link>
                      <Link to="/Resume/contact">Contact</Link>
                  </Navigation>
              </Header>
              <Drawer title="Title">
                  <Navigation>
                    <Link to="/Resume/resume">Resume</Link>
                    <Link to="/Resume/projects">Projects</Link>
                    <Link to="/Resume/aboutme">About Me</Link>
                    <Link to="/Resume/contact">Contact</Link>
                  </Navigation>
              </Drawer>
              <Content>
                  <div className="page-content" />
                  <Main/>
              </Content>
          </Layout>
      </div>
    );
  }
}

export default App;
