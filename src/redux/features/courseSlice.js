import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import * as CourseApi from '../../api/CourseApi';

export const fetchCourses = createAsyncThunk('course/fetchCourses'
    , async () => {
        try {
            return await CourseApi.getCourses();
        } catch (err) {
            throw new Error(err.message);
        }
    })

const initialState = {
    courses: []
};

export const courseSlice = createSlice({
    name: "course",
    initialState,
    extraReducers(builder){
        builder.addCase(fetchCourses.fulfilled, (state, action) => {
            state.courses = action.payload;
        })
    }
})

export const fetchAllPosts = (state) => state.courses.courses;
export default courseSlice.reducer;