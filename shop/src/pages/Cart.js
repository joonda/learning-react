import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeName } from "../store";

function Cart() {

    let cartStock = useSelector((state) => {
        return state.cartStock
    })

    let user = useSelector((state) => {
        return state.user
    })

    let dispatch = useDispatch()

    return (
        <div>
            <h1>{user}의 장바구니</h1>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경하기</th>
                    </tr>
                </thead>
                <tbody>
                    {cartStock.map(function (array, index) {
                        return (
                            <tr key={index}>
                                <td>{array.id}</td>
                                <td>{array.name}</td>
                                <td>{array.count}</td>
                                <td>
                                    <button onClick={() => {
                                        dispatch(changeName())
                                    }}>+</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div>
    )
}

export default Cart;