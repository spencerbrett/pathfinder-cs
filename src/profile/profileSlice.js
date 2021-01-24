import { createSlice } from '@reduxjs/toolkit';

const profileSlice = createSlice({
    name: 'profile',
    initialState: {
        characterName: "",
        playerName: "",
        experience: "",
        ancestryHeritage: "",
        background: "",
        playerClass: "",
        size: "",
        alignment: "",
        traits: "",
        deity: ""
    },
    reducers: {
        updateProfile(state, action) {
            state = action.payload;
            return state;
        }
    }
});

// Create and export selectors
export const selectProfile = state => state.profile;

// Extract the action creators object and the reducer
const { actions, reducer } = profileSlice;
// Extract and export each action creator by name
export const { updateProfile } = actions;
// Export the reducer, either as a default or named export
export default reducer;