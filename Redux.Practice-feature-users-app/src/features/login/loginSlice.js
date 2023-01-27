import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_BASE_URL } from "../../utils/API";

const initialData = {
    status: "idle",
    error: null,
};

export const fetchLogin = createAsyncThunk(
    "login/fetchLogin",
    async () => {
        try {
            const response = await axios.get(API_BASE_URL + "login");
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
);

const loginSlice = createSlice({
    name: "login",
    initialState: initialData,
    reducers: {
        changeTab: (state, action) => {
            state.activeTab = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchLogin.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchLogin.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.login = action.payload;
            })
            .addCase(fetchLogin.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});

export const { changeTab } = loginSlice.actions;

export default loginSlice.reducer;
