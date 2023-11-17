// import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Allquestions from '../component/Allquestions'
import { useState } from 'react'
import Score from '../component/Score'


function Question() {

        // const[allData,setAllData]=useState([])

        const[status,setStatus]=useState(true)
        const [finalscore,setFinalScore]=useState()


        // const getAllDatas=async()=>{
        //     const result= await getDatas()
        //     setAllData(result.data);
        // }

        // useEffect(()=>{
        //     getAllDatas()
        // },[])

        // console.log(allData);
  return (
    <div>
        <Container>
            <Row>
                {status?
                    <Col>
                    <h3><Allquestions setFinalScore={setFinalScore} setStatus={setStatus}></Allquestions></h3>
                </Col>
                :<Col>
                <h3><Score finalscore={finalscore}></Score></h3>
            </Col>
                }
            </Row>
        </Container>

    </div>
  )
}

export default Question