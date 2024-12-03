import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { plusnumber, increase, remove } from "../store";

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
            <h1>{user.name} {user.age}의 장바구니</h1>
            <button
                onClick={() => {
                    dispatch(plusnumber(20))
                }}
            >버튼</button>
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
                    {cartStock.map(function (arr, i) {
                        return (
                            <tr key={i}>
                                <td>{arr.id}</td>
                                <td>{arr.name}</td>
                                <td>{arr.count}</td>
                                <td>
                                    <button onClick={() => {
                                        dispatch(increase(arr.id))
                                    }}>+</button>
                                </td>
                                <td>
                                    <button onClick={() => {
                                        dispatch(remove(arr.id))
                                    }}>삭제</button>
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