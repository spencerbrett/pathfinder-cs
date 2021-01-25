import { createSelector, createSlice } from '@reduxjs/toolkit';
import { ATTR } from '../constants';
import { getModifier } from '../utils';

const mainSlice = createSlice({
    name: 'main',
    initialState: {
        characterSummary: {
            characterName: "",
            heroPoints: 0,
            level: 1,
            ancestry: "",
            background: "",
            playerClass: "",
            traits: ""
        },
        attributes: [
            {
                key: ATTR.Strength,
                name: "Strength",
                score: 10
            },
            {
                key: ATTR.Dexterity,
                name: "Dexterity",
                score: 10
            },
            {
                key: ATTR.Constitution,
                name: "Constitution",
                score: 10
            },
            {
                key: ATTR.Intelligence,
                name: "Intelligence",
                score: 10
            },
            {
                key: ATTR.Wisdom,
                name: "Wisdom",
                score: 10
            },
            {
                key: ATTR.Charisma,
                name: "Charisma",
                score: 10
            }
        ]
    },
    reducers: {
        updateCharacterSummary(state, action) {
            state.characterSummary = action.payload;
            return state;
        },
        updateAttributes(state, action) {
            Object.entries(action.payload).forEach(([key, attr]) => {
                state.attributes[key].score = Number(attr.score);
            });
            return state;
        }
    }
});

// Create and export selectors
export const selectCharacterSummary = state => state.main.characterSummary;
export const selectAttributes = state => state.main.attributes;
export const selectAttrModifiers = createSelector(selectAttributes, attributes => attributes.reduce((acc, attr) => {
    acc[attr.key] = getModifier(attr.score);
    return acc;
}, {}))

// Extract the action creators object and the reducer
const { actions, reducer } = mainSlice;
// Extract and export each action creator by name
export const { updateCharacterSummary, updateAttributes } = actions;
// Export the reducer, either as a default or named export
export default reducer;