import React from "react";
import { useForm } from 'react-hook-form';
import { Grid, makeStyles, Paper, TextField } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { selectCharacterSummary, updateCharacterSummary } from './mainSlice';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(1),
        flexGrow: 1
    },
    level: {
        width: theme.spacing(6)
    },
    heroPoints: {
        width: theme.spacing(11)
    }
}));
export const CharacterSummary = () => {
    const dispatch = useDispatch();
    const characterSummary = useSelector(selectCharacterSummary);
    const { handleSubmit, register } = useForm({
        defaultValues: characterSummary
    });
    const classes = useStyles();

    const onSubmit = (data) => {
        dispatch(updateCharacterSummary(data));
    };
    return (
        <Paper className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={10} sm={6}>
                    <TextField id="characterName" name="characterName" label="Name" size="small" margin="dense" fullWidth
                               onBlur={handleSubmit(onSubmit)}
                               inputRef={register}/>
                </Grid>
                <Grid item xs={2} md={1}>
                    <TextField id="level" name="level" label="Level" className={classes.level} margin="dense" size="small"
                               variant="outlined"
                               onBlur={handleSubmit(onSubmit)}
                               inputRef={register}/>
                </Grid>
                <Grid item xs={4}>
                    <TextField id="heroPoints" name="heroPoints" label="Hero Points" className={classes.heroPoints} margin="dense"
                               size="small" variant="outlined"
                               onBlur={handleSubmit(onSubmit)}
                               inputRef={register}/>
                </Grid>

                <Grid item xs={4} sm={5}>
                    <TextField id="ancestry" name="ancestry" label="Ancestry" margin="dense" size="small" fullWidth
                               onBlur={handleSubmit(onSubmit)}
                               inputRef={register}/>
                </Grid>
                <Grid item xs={4} sm={5}>
                    <TextField id="background" name="background" label="Background" margin="dense" size="small" fullWidth
                               onBlur={handleSubmit(onSubmit)}
                               inputRef={register}/>
                </Grid>
                <Grid item xs={5}>
                    <TextField id="playerClass" name="playerClass" label="Class" margin="dense" size="small" fullWidth
                               onBlur={handleSubmit(onSubmit)}
                               inputRef={register}/>
                </Grid>
                <Grid item xs={7}>
                    <TextField id="traits" name="traits" label="Traits" margin="dense" size="small" fullWidth
                               onBlur={handleSubmit(onSubmit)}
                               inputRef={register}/>
                </Grid>
            </Grid>
        </Paper>
    );
};