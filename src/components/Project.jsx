import React from 'react'
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap';
import ProjectCards from './ProjectCards';
import colorSharp2 from '../assets/img/color-sharp2.png'
import proImg1 from '../assets/img/project-img1.png'
import proImg2 from '../assets/img/project-img2.png'
import proImg3 from '../assets/img/project-img3.png'
import 'animate.css'
import TrackVisibility from 'react-on-screen'

const Project = () => {
    const projects = [
        {
            id: 1,
            title: 'Business startup',
            description: 'Design & Davelopment',
            imgUrl: proImg1,
        },
        {
            id: 2,
            title: 'Business startup',
            description: 'Design & Davelopment',
            imgUrl: proImg2,
        },
        {
            id: 3,
            title: 'Business startup',
            description: 'Design & Davelopment',
            imgUrl: proImg3,
        },
        {
            id: 4,
            title: 'Business startup',
            description: 'Design & Davelopment',
            imgUrl: proImg1,
        },
        {
            id: 5,
            title: 'Business startup',
            description: 'Design & Davelopment',
            imgUrl: proImg2,
        },
        {
            id: 6,
            title: 'Business startup',
            description: 'Design & Davelopment',
            imgUrl: proImg3,
        },
    ];
    return (
        <>
            <section className='project' id='project'>
                <Container>
                    <Row>
                        <Col>
                            <TrackVisibility>
                                {({ isVisible }) =>
                                    <div className={isVisible ? "animate__animated animate__bounce" : ""}>
                                        <h2>Projects</h2>
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, dolore beatae minus iusto natus necessitatibus aliquam perspiciatis, quas accusantium dolorem quidem id ipsum aspernatur velit doloremque, facere nobis. Veniam provident ut fuga nam ducimus minus officia. Pariatur ab repellat accusamus.</p>
                                    </div>}
                            </TrackVisibility>
                            <Tab.Container id='projects-tabs' defaultActiveKey='first'>
                                <Nav variant='pills' defaultActiveKey="/home" className='nav-pills mb-5 justify-content-center align-items-center' id='pills-tab'>
                                    <Nav.Item>
                                        <Nav.Link className='nav-link' id='projects-tabs-tab-first' eventKey='first'>Tab One</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link className='nav-link' id='projects-tabs-tab-second' eventKey='second'>Tab Two</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link className='nav-link' id='projects-tabs-tab-third' eventKey='third'>Tab Three</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content>
                                    <Tab.Pane eventKey='first'>
                                        <Row>
                                            {
                                                projects.map((item, index) => {
                                                    return (
                                                        <ProjectCards
                                                            Key={index}
                                                            projects={item}
                                                        />
                                                    )
                                                })
                                            }
                                        </Row>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey='second' className='extra-word' >
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur alias laboriosam excepturi sit placeat quo repellat. Nostrum quaerat harum maiores minus eius, odio unde quos corporis excepturi eligendi culpa, laboriosam esse ipsum quibusdam? Ipsa maiores quisquam saepe cum? Quas enim aliquid animi corrupti deserunt quod ipsam quae magni soluta repellat?</p>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey='third' className='extra-word' >
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, architecto nihil magni provident saepe quibusdam excepturi sunt asperiores aperiam eos?</p>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </Col>
                    </Row>
                </Container>
                <img src={colorSharp2} className='background-image-right' />
            </section>
        </>
    )
}

export default Project
