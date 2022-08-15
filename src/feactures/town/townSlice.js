import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../../app/shared/baseUrl ";
import { mapImageURL } from "../../utils/mapImageURL";

export const fetchTown = createAsyncThunk(
    "town/fetchTown",
    async () => {
        const response = await fetch(baseUrl + "town");
        if (!response.ok) {
            return Promise.reject(
                "Unable to fetch, status: " + response.status
            );
        }
        const data = await response.json();
        return data;
    }
);

const initialState = {
    townArray: [],
    isLoading: true,
    errMsg: "",
};

const townSlice = createSlice({
    name:"town",
    initialState,
    reducers: {}, 
    extraReducers: {
        [fetchTown.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchTown.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.errMsg = "";
            state.townArray = mapImageURL(action.payload);
        },
        [fetchTown.rejected]: (state, action) => {
            state.isLoading = false;
            state.errMsg = action.error ? action.error.message : "Fetch failed";
        },
    },
});

export const townReducer = townSlice.reducer;

export const selectAllOfTown = (state) => {
    return state.town.townArray;
};

export const selectTownById = (id) => (state) => {
    return state.town.townArray.find(
        (t) => campsite.id === parseInt(id)
    );
};
