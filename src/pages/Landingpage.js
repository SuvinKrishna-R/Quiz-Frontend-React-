import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Question from './Question'


function Landingpage() {
  return (
    <div>
        <Container>
            <p style={{marginTop:'200px',fontFamily:'Rammetto One',fontSize:'100px'}}>QUIZ-COCONUT</p>
            <h4 style={{fontFamily: 'Kaushan Script'}}>IN-PERSON & VIRTUAL EVENT</h4>

            <Link to={'/question'}>
            <button type='button' className='btn btn-primary'><b>Start Quiz</b></button>
            </Link>
        
        
        </Container>

    </div>
  )
}

export default Landingpage