import {configureStore} from "@reduxjs/toolkit";
import courses from './features/courseSlice'

export const store = configureStore(({
    reducer: {
        courses
    }
}))