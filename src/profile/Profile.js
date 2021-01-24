import React from 'react';
import TextField from '@material-ui/core/TextField';
import { useForm } from 'react-hook-form';
import { Button, Grid, makeStyles } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { selectProfile, updateProfile } from './profileSlice';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
        flexGrow: 1
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary
    },
    textField: {
        paddingLeft: theme.spacing(1)
    }
}));
export const Profile = () => {
    const dispatch = useDispatch();
    const profile = useSelector(selectProfile);
    const { register, handleSubmit } = useForm({
        defaultValues: profile
    });
    const classes = useStyles();

    const onSubmit = (data) => {
        dispatch(updateProfile(data));
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off">
            <Grid container className={classes.root} spacing={2}>
                <Grid container item xs={12} sm={6}>
                    <Grid item xs={12} className={classes.textField}>
                        <TextField id="characterName" name="characterName" label="Character Name" size="small" fullWidth inputRef={register}/>
                    </Grid>
                    <Grid container item xs={12}>
                        <Grid item xs={12} md={6} className={classes.textField}>
                            <TextField id="playerName" name="playerName" label="Player name" size="small" fullWidth inputRef={register}/>
                        </Grid>
                        <Grid item xs={12} md={6} className={classes.textField}>
                            <TextField id="experience" name="experience" label="Experience Points (XP)" size="small" fullWidth inputRef={register}/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container item xs={12} sm={6}>
                    <Grid item xs={12} className={classes.textField}>
                        <TextField id="ancestryHeritage" name="ancestryHeritage" label="Ancestry and Heritage" size="small" fullWidth inputRef={register}/>
                    </Grid>
                    <Grid item xs={12} className={classes.textField}>
                        <TextField id="background" name="background" label="Background" inputRef={register} size="small" fullWidth/>
                    </Grid>
                    <Grid item xs={12} className={classes.textField}>
                        <TextField id="playerClass" name="playerClass" label="Class" inputRef={register} size="small" fullWidth/>
                    </Grid>
                    <Grid container item xs={12}>
                        <Grid item xs={6} sm={2} className={classes.textField}>
                            <TextField id="size" name="size" label="Size" inputRef={register} size="small" fullWidth/>
                        </Grid>
                        <Grid item xs={6} sm={4} className={classes.textField}>
                            <TextField id="alignment" name="alignment" label="Alignment" inputRef={register} size="small" fullWidth/>
                        </Grid>
                        <Grid item xs={12} sm={6} className={classes.textField}>
                            <TextField id="traits" name="traits" label="Traits" inputRef={register} size="small" fullWidth/>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} className={classes.textField}>
                        <TextField id="deity" name="deity" label="Deity" inputRef={register} size="small" fullWidth/>
                    </Grid>
                </Grid>
                <Grid container item xs={12} >
                    <Button type="submit" size="large" color="primary" variant="contained">Save</Button>
                </Grid>
            </Grid>
        </form>
    );
};