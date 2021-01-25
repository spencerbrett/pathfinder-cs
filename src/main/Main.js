import React from 'react';
import { CharacterSummary } from './CharacterSummary';
import { Grid } from '@material-ui/core';
import { Attributes } from './Attributes';

export const Main = () => {

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <CharacterSummary />
            </Grid>
            <Grid item xs={12} md={8}>
                <Attributes />
            </Grid>
        </Grid>
    );
};