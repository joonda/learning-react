import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import { Context1 } from "../App";
import { addCart } from "../store";
import { useDispatch } from "react-redux";

function Detail(props) {

    let [showAlert, setAlert] = useState(true)

    useEffect(() => {
        let a = setTimeout(() => { setAlert(false) }, 2000);
        return () => {
            clearTimeout(a);
        };
    }, []);

    let [num, setNum] = useState("");

    useEffect(() => {
        if (isNaN(num) == true) {
            alert("숫자만 입력해주세요")
        };
    }, [num]);

    let { id } = useParams();

    let product = props.shoes.find(function (x) {
        return x.id == id
    });

    let [tabBtn, setTabbtn] = useState(0);

    let [fade2, setFade2] = useState('');

    useEffect(() => {
        let a = setTimeout(() => { setFade2('end') }, 50)
        return () => {
            clearTimeout(a)
            setFade2('')
        }
    }, [])

    let dispatch = useDispatch()

    return (
        <div className={`container start ${fade2}`}>
            {
                showAlert === true
                    ? <div id="second" className="alert alert-warning">2초 이내 구매시 할인!</div> : null

            }
            <div className="row">
                <div className="col-md-6">
                    <img src={`https://codingapple1.github.io/shop/shoes${parseInt(product.id) + 1}.jpg`} width="100%" />
                </div>
                <div className="col-md-6">
                    <input onChange={(e) => { setNum(e.target.value) }}></input>
                    <h4 className="pt-5">{product.title}</h4>
                    <p>{product.content}</p>
                    <p>{product.price}원</p>
                    <button className="btn btn-danger" onClick={() => {
                        dispatch(addCart({id:product.id, name:product.title, count:1}))
                    }}>주문하기</button>
                </div>
            </div>

            <Nav variant="tabs" defaultActiveKey="link0">
                <Nav.Item>
                    <Nav.Link onClick={() => { setTabbtn(0) }} eventKey="link0">Option 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={() => { setTabbtn(1) }} eventKey="link1">Option 2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={() => { setTabbtn(2) }} eventKey="link2">Option 3</Nav.Link>
                </Nav.Item>
            </Nav>
            <TabContent tabBtn={tabBtn} product={product} />
        </div>
    )
}

function TabContent(props) {

    let { inventory } = useContext(Context1)

    let [fade, setFade] = useState('')

    useEffect(() => {
        // automatic batching
        let a = setTimeout(() => { setFade('end') }, 50)
        return () => {
            clearTimeout(a)
            setFade('')
        }
    }, [props.tabBtn])

    if (props.tabBtn == 0) {
        return <div className={`start ${fade}`}>{props.product.title}</div>
    }
    if (props.tabBtn == 1) {
        return <div className={`start ${fade}`}>{props.product.content}</div>
    }
    if (props.tabBtn == 2) {
        return <div className={`start ${fade}`}>{inventory[0]}</div>
    }
}



export default Detail;
