import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './resume-components/education';
import Experience from './resume-components/experience';
import ProgrammingLang from './resume-components/programming-lang';

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
                        <p>Software engineer with experience in diverse computer science related fields with a demonstrated history of working in the information technology and service industry. Skilled in Front-end, Data Science, Social media technologies and technologies related to music. </p>
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
                            schoolDescription="Bachelor in Computer Science"
                            gpa={3.4}
                            overAll={89}
                        />
                        <hr style={{borderTop: '3px solid #e22947'}}/>
                        <h2>Work Experience</h2>
                        <Experience
                            company="Verato / Veramex"
                            startYear={2019}
                            endYear="Current Job"
                            location="Merida, Yucatan, Mexico"
                            jobName="Senior Engineer, Software Developer (Front-end/Gateway)"
                            jobDescription="*** Collaborate in the design and development of Verato’s SaaS offering. Help improve the development processes as well as the automation and operational procedures required to deliver a world-class, industrial-strength, commercial Cloud Service.
                            *** Working at Front-end, based on AngularJS/Angular 6, node.js and Java, of a web app that helps users to have a visual reference and workspace from previous solutions (API’s mainly) related to patient/record matching. This new app improved 10-15% (compared to times before the web app) the time spent doing the normal tasks made by the users of the previous solutions.
                            *** Designing diverse components across the web app for patient/record matching, not only on code but working as a UX designer for the product, each design later was translated into a new component or a new function for the product.
                            *** Worked with diverse Amazon Web Services to propose and produce architecture for the diverse services of the department.
                            *** Proposed architecture to provide True HA on the servers that contain the services, all this in Amazon Web Services (AWS).
                            "
                        />
                         <Experience
                            company="Tecnologico de Monterrey (ITESM)"
                            startYear={2017}
                            endYear={2018}
                            location="Monterrey, N.L., Mexico"
                            jobName="Business Intelligence/Software Engineer Intern"
                            jobDescription="*** Worked at Back-end, based on node.js and PHP, of a web app that monitors and controls the activities of workers inside a company, department or system; this system increments projects efficiency and helps managers to get a better workplan, it improved 20-35% (compared to times before the web app) the administration and planning of projects/daily work.
                            *** Data Mining using Oracle Endeca Integrator, Colver ETL and AZURE; working with diverse projects based on the extraction of the sentiment, text analysis, key words, intentions, etc. We work in mining 15 hours (out of 20 hours of work) a week, so later we can work in getting the visualizations based in the information obtained, for the visualizations we use Tableau/MS Power Bi.
                            "
                        />
                        <hr style={{borderTop: '3px solid #e22947'}}/>
                        <h2>Major Projects</h2>
                        <Experience
                            company="Grease - Lang"
                            startYear={2018}
                            endYear={2018}
                            location="Monterrey, N.L., Mexico"
                            jobName="Software Developer"
                            jobDescription="*** Project of a language/compiler who allows write code at low level in an expressive manner.
                            *** Project elaborated in python with a virtual machine in C, the virtual machine follows the von Neumann model.
                            *** Co-developed/worked on the project, I focused on the virtual machine part and the semantic of the language.
                            "
                        />
                        <Experience
                            company="Women in Tech (WIT, social project)"
                            startYear={2018}
                            endYear={2018}
                            location="Monterrey, N.L., Mexico"
                            jobName="Coordinator / Mentor"
                            jobDescription="*** Project focused in bringing an express, complete course of technologies and coding, where the main focus was to give a push to the participation of the women in technology, that is why the course was 100% women oriented, no matter their coding background, economic or scholar background.
                            *** Inside the project I worked as a coordinator, helping the beneficiaries in the tutoring of diverse topics related to coding and technologies; also facilitating the material and space for the right development of the course.
                            *** I administrated the resources and material which were presented in the diverse sessions who where held during the period of the course.
                            "
                        />
                        <hr style={{borderTop: '3px solid #e22947'}}/>
                        <h2>Programming Languages</h2>
                        <ProgrammingLang
                            programingLang="JavaScript"
                            progress = {70}
                        />
                        <ProgrammingLang
                            programingLang="C++"
                            progress = {65}
                        />
                        <ProgrammingLang
                            programingLang="Java"
                            progress = {60}
                        />
                        <ProgrammingLang
                            programingLang="Python"
                            progress = {65}
                        />
                        <ProgrammingLang
                            programingLang="R"
                            progress = {70}
                        />

                    </Cell>
                    
                </Grid>
            </div>
        );
    }
}

export default Resume;