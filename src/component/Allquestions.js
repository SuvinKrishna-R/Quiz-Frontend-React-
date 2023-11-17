import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { getDatas } from '../service/allApis'




function Allquestions({ setStatus, setFinalScore }) {


    const [datas, setDatas] = useState([])
    const [index, setIndex] = useState(0)
    const [score, setScore] = useState(0)
    const [singleClick, setSingleClick] = useState(true)
    const [answerColor, setAnswerColor] = useState(false)


    const alldata = async () => {
        const result = await getDatas()
        setDatas(result.data);
        // console.log(result);

    }
    useEffect(() => {
        alldata()
    }, [])

    console.log(datas);



    const indexes = () => {
        if (datas.length - 1 > index) {
            setIndex(index + 1)
            setSingleClick(true)
            setAnswerColor(false)
        } else {
            setFinalScore(score)
            setStatus(false)
        }


    }

    const answerClick = (a) => {

        console.log(a);
        if (singleClick == true) {


            if (a == datas[index].answer) {


                // console.log('true');
                setAnswerColor(true)

                setScore(score + 1)



                setSingleClick(false)
              const s=datas[index].options.indexOf(a)




            }
            else {
                // console.log('false');
                setAnswerColor(false)
                setSingleClick(false)

            }
        }

        console.log(score);




    }

    return (
        <div>
            {datas.length > 0 ? (<div>
                <Container className=' square border border-secondary border-2 w-50 mt-5 p-3 ' style={{ boxShadow: '10px 10px black', borderRadius: '10px', height: '100%' }}>

                    <Row >
                        <Col>
                            <h4 style={{ borderRadius: '20px', height: '100%', cursor: 'pointer' }} className='square border border-primary border-2 p-1 bg-primary text-white'>
                                {datas[index].question}
                            </h4>
                        </Col>
                    </Row>

                    <Row className='ms-5' >
                        <Col >
                            <h5 className='w-75 mt-3 square border border-primary border-2 p-1   text-black'
                                onClick={() => answerClick(datas[index].options[0])} style={{ backgroundColor: answerColor == true && s==datas[index].options[0] ? 'green' : 'blue', borderRadius: '10px', height: '100%', cursor: 'pointer', }}
                            >
                                {datas[index].options[0]}
                            </h5>
                        </Col>
                    </Row>

                    <Row className='ms-5'>
                        <Col>
                            <h5 className=' w-75 mt-3 square border border-primary border-2 p-1  text-black'
                                onClick={() => answerClick(datas[index].options[1])} style={{ backgroundColor: answerColor == true ? 'green' : 'blue', borderRadius: '10px', height: '100%', cursor: 'pointer' }}>
                                {datas[index].options[1]}</h5>
                        </Col>
                    </Row>
                    <Row className='ms-5'>
                        <Col>
                            <h5 className='w-75 mt-3 square border border-primary border-2 p-1 text-black'
                                onClick={() => answerClick(datas[index].options[2])} style={{ backgroundColor: answerColor == true ? 'green' : 'blue', borderRadius: '10px', height: '100%', cursor: 'pointer' }} >
                                {datas[index].options[2]}
                            </h5>
                        </Col>
                    </Row>
                    <Row className='ms-5'>
                        <Col>

                            <h5 className=' w-75 mt-3 square border border-primary border-2 p-1  text-black'
                                onClick={() => answerClick(datas[index].options[3])} style={{ backgroundColor: answerColor == true ? 'green' : 'blue', borderRadius: '10px', height: '100%', cursor: 'pointer' }}>
                                {datas[index].options[3]}
                            </h5>

                        </Col>

                    </Row>

                    <Row >
                        <Col className='text-end mt-3'>
                            <Button type='button' className='btn btn-primary' onClick={indexes}>Next</Button>
                        </Col>
                    </Row>

                    <Row >
                        <Col className='text-end mt-3'>
                            <Button type='button' className='btn btn-primary'>{score}</Button>
                        </Col>
                    </Row>
                </Container>

            </div>) : ('no data')

            }
        </div>

    )
}


export default Allquestions
