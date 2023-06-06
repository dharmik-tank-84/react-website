import React from 'react'
import { Col } from 'react-bootstrap'

const ProjectCards = ( {projects}) => {
    console.log(projects)
  return (
    <>
      <Col sm={6} ms={4}>
        <div className='proj-imgbx'>
            <img src={projects.imgUrl} />
            <div className='proj-txtx'>
                <h4>{projects.title}</h4>
                <span>{projects.description}</span>
            </div>
        </div>
      </Col>
    </>
  )
}

export default ProjectCards
