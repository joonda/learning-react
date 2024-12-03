import { configureStore, createSlice } from "@reduxjs/toolkit";

let user = createSlice({
    name: "user",
    initialState: { name: "kim", age: 20 },
    reducers: {
        changeName(state) {
            state.name = 'park'
        },
        plusnumber(state, a) {
            state.age = state.age + a.payload
        }
    }
})

export let { changeName, plusnumber } = user.actions

let cartStock = createSlice({
    name: "cartStock",
    initialState: [
        { id: 0, name: 'White and Black', count: 2 },
        { id: 2, name: 'Grey Yordan', count: 1 }
    ],
    reducers: {
        increase(state, action) {
            let number = state.findIndex((a) => { return a.id === action.payload })
            state[number].count++
        },

        addCart(state, action) {
            const itemNum = state.find((a) => {
                return action.payload.id === a.id;
            })

            if (itemNum === undefined) {
                state.push(action.payload)
            }
            else {
                alert("이미 상품이 담겨져 있습니다.")
            }
        },

        remove(state, action) {
            return state.filter((a) => {
                return a.id != action.payload;
            })
        }

    }
})

export let { increase, addCart, remove } = cartStock.actions

export default configureStore({
    reducer: {
        user: user.reducer,
        cartStock: cartStock.reducer
    }
})
