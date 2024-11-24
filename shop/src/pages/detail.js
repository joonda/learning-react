import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
    
    return (
        <div className="container">
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
                    <button className="btn btn-danger">주문하기</button>
                </div>
            </div>

        </div>
    )
}

export default Detail;
