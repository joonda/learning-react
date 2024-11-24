import { Container, Row, Col } from 'react-bootstrap';
import '../App.css';

function Main(props) {
    return (
        <>
            <div className='main-bg'></div>
            <Container>
                <Row>
                    {props.shoes.map(function (product, i) {
                        return (
                            <Card shoes={props.shoes} i={i}></Card>
                        )
                    })}
                </Row>
            </Container>
        </>

    )
}
function Card(props) {
    return (
        <Col xs={12} lg={4}>
            <img src={`https://codingapple1.github.io/shop/shoes${props.i + 1}.jpg`} alt={`shoes${props.i + 1}`} width="80%" />
            <h4>{props.shoes[props.i].title}</h4>
            <p>{props.shoes[props.i].content}</p>
            <p>{props.shoes[props.i].price}</p>
        </Col>
    )
}

export default Main;