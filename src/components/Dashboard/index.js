import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"


function Dashboard(){
    return (
        <>
            <Container>
                <Row>
                    <Col style={{background : "yellow", height : "150px",border:"solid 2px white"}}>1 of 1</Col>
                    <Col style={{background : "green", height : "150px",border:"solid 2px white"}}>1 of 2</Col>
                    <Col style={{background : "red", height : "150px",border:"solid 2px white"}}>1 of 3</Col>
                </Row>
            </Container>
        </>
    )
}

export default Dashboard;