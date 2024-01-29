
import React from 'react';
import { ErrorMessage, useField } from 'formik';
import { TextField } from "@mui/material";
import NumberFormat from 'react-number-format';





export const TextFormNumber = ({ label, ...props }: any) => {

    const [field, meta] = useField(props);
    const hasError = meta.touched && meta.error;

    return (
        <>
            <TextField
                autoComplete='off'
                error={ !!hasError }
                {...field}
                {...props}
                label={label}
                InputProps={{
                    inputComponent: NumberFormatCustom
                }}
            />
            <ErrorMessage className='error-message' name={ props.name } component="span" />
        </>
    );
};





export const NumberFormatCustom = React.forwardRef( function NumberFormatCustom(props: any, ref) {

    const { onChange, ...other } = props;

    return (
        <NumberFormat
            {...other}
            getInputRef={ref}
            onValueChange={(values) => {
            onChange({
                target: {
                name: props.name,
                value: values.value,
                },
            });
            }}
            isNumericString
            allowNegative={false}
            allowLeadingZeros={false}
            thousandSeparator="."
            decimalSeparator=","
            prefix="$"
        />
    );
});