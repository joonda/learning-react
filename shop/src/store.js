import { configureStore, createSlice } from "@reduxjs/toolkit";

let user = createSlice({
    name: "user",
    initialState: "kim",
    reducers: {
        changeName() {
            return 'john kim'
        }
    }
})

export let { changeName } = user.actions

let cartStock = createSlice({
    name: "cartStock",
    initialState: [
        { id: 0, name: 'White and Black', count: 2 },
        { id: 2, name: 'Grey Yordan', count: 1 }
    ]
})

export default configureStore({
    reducer: {
        user: user.reducer,
        cartStock: cartStock.reducer
    }
})
