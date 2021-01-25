import React from "react";
import { makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { selectAttributes, selectAttrModifiers, updateAttributes } from './mainSlice';
import { useForm } from 'react-hook-form';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(1),
        flexGrow: 1
    },
    table: {
        minWidth: 240
    },
    field: {
        width: theme.spacing(8)
    }
}));
export const Attributes = () => {
    const dispatch = useDispatch();
    const attributes = useSelector(selectAttributes);
    const modifiers = useSelector(selectAttrModifiers);
    const classes = useStyles();
    const { handleSubmit, register } = useForm({
        defaultValues: attributes
    });

    const onSubmit = (data) => {
        dispatch(updateAttributes(data));
    };

    return (
        <TableContainer component={Paper} className={classes.root}>
            <Table aria-label="attributes" className={classes.table} size="small">
                <TableHead>
                    <TableRow>
                        <TableCell/>
                        <TableCell align="right">Score</TableCell>
                        <TableCell align="right">Misc +/-</TableCell>
                        <TableCell align="right">Bonus</TableCell>
                        <TableCell align="right">Dmg</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {attributes.map((attr, index) => {
                        const { key, name } = attr;
                        const modifier = modifiers[key];
                        const bonus = modifier === 0 ? undefined : modifier > 0 ? `+${modifier}` : modifier;
                        return (
                            <TableRow key={key}>
                                <TableCell component="th" scope="row">
                                    {name}
                                </TableCell>
                                <TableCell align="right">
                                    <TextField id={key} name={`[${index}].score`} className={classes.field} margin="dense" size="small"
                                               variant="outlined" onBlur={handleSubmit(onSubmit)} inputRef={register}/>
                                </TableCell>
                                <TableCell align="right">
                                    <TextField className={classes.field} margin="dense" size="small" disabled variant="filled"/>
                                </TableCell>
                                <TableCell align="right">
                                    <TextField className={classes.field} margin="dense" size="small" disabled value={bonus}
                                               variant="outlined"/>
                                </TableCell>
                                <TableCell align="right">
                                    <TextField className={classes.field} margin="dense" size="small" disabled variant="filled"/>
                                </TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
};