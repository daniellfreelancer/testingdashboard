import { createSlice } from "@reduxjs/toolkit"

export const reloadSlice = createSlice({
    name: 'reload',
    initialState: {reloadState: false},
    reducers: {
        reload: (state, action) => {
            state.reloadState = !state.reloadState
        },
    }
})

export const { reload } = reloadSlice.actions

export const reloadValueState = (state)=>state.reload.reloadState

export default reloadSlice.reducer