import React from "react";
import { Grid } from '@material-ui/core';

export const AbilityScores = () => {
    return (
        <Grid container justify="space-between" spacing={2}>
            <Grid item>
                Strength Modifier
            </Grid>
            <Grid item>
                Strength Score
            </Grid>
        </Grid>
    );
};