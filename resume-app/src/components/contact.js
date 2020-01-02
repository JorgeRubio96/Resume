import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Jorge Rubio</h2>
                        <img 
                            src="https://instagram.fzcl2-1.fna.fbcdn.net/v/t51.2885-19/s320x320/22280743_513884005615569_9002416654038073344_n.jpg?_nc_ht=instagram.fzcl2-1.fna.fbcdn.net&_nc_ohc=wV7hCagf5HkAX9fLc8u&oh=e4dea3f8b5e86ca31addca3b4afc3539&oe=5E9386D2"
                            alt="avatar"
                            style={{height: '250px'}}
                        />
                        <p style={{ width:'75%', margin:'auto', paddingTop: '1em' }}>Hey! If you liked my work or want to collab or just want to get in contact with me, here you can find all the places you can find me or get in touch with me.
I will be more than pleased to get in contact with you!
</p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact me</h2>
                        <hr/>
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{ fontSize: '25px', fontFamily: 'Anton' }}>
                                        <i className="fa fa-phone-square" aria-hidden='true'/>
                                        +52 492-101-1487
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{ fontSize: '25px', fontFamily: 'Anton' }}>
                                        <i className="fa fa-envelope" aria-hidden='true'/>
                                        jorge.rubiobarboza96@gmail.com
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{ fontSize: '25px', fontFamily: 'Anton' }}>
                                        <a href="https://www.instagram.com/jorge_rubiobrz"  style={{textDecoration:'none', color:'black'}} rel="noopener noreferrer"  target="_blank"><i className="fa fa-instagram" aria-hidden='true'/>@jorge_rubiobrz</a>
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{ fontSize: '25px', fontFamily: 'Anton' }}>
                                        <a href="https://www.linkedin.com/in/jorge-emilio-rubio-barboza-840211143/"  style={{textDecoration:'none', color:'black'}} rel="noopener noreferrer"  target="_blank"><i class="fa fa-linkedin-square" aria-hidden="true"/>Jorge Emilio Rubio Barboza</a>
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Contact;