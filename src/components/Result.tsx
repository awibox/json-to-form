import React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

type radioOption = {
  label: string;
  value: string;
}

type Color = 'inherit' | 'error' | 'primary' | 'secondary' | 'info' | 'success' | 'warning' | undefined;

type buttonType = {
  label: string;
  disabled?: boolean;
  color?: Color;
  href?: string;
}

type formField = {
  type: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
  checked?: boolean;
  options?: radioOption[];
  defaultValue?: string;
  disabled?: boolean;
}

export type formDataType = {
  title?: string;
  fields: formField[];
  buttons?: buttonType[];
}

interface IProps {
  data: formDataType;
}

const Result: React.FC<IProps> = ({data}) => {
  const {title, fields, buttons} = data;
  return (
    <div className="result">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          {title && <Typography variant="h4" gutterBottom component="div">{title}</Typography>}
        </Grid>
        {fields && fields.map((field: formField) => {
          switch (field.type) {
            case 'checkbox':
              return (
                <Grid item xs={12}>
                  <FormControlLabel
                    key={field.label}
                    control={<Checkbox disabled={field.disabled} defaultChecked={field.checked}/>}
                    label={field.label}/>
                </Grid>
              )
              break;
            case 'radio':
              return (
                <Grid item xs={12}>
                  <FormControl key={field.label}>
                    <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                    <RadioGroup defaultValue={field.defaultValue}>
                      {field.options && field.options.map((option: radioOption) => (
                        <FormControlLabel
                          key={option.value}
                          value={option.value}
                          control={<Radio/>}
                          label={option.label}/>
                      ))}
                    </RadioGroup>
                  </FormControl>
                </Grid>
              )
              break;
            default:
              return (
                <Grid item xs={8}>
                  <TextField
                    {...field}
                    multiline={field.type === 'textarea'}
                    fullWidth={field.type === 'textarea'}
                    minRows={3}
                  />
                </Grid>
              )
              break;
          }
        })}
        <Grid item xs={12}>
          <Stack
            direction="row"
            sx={{
              borderTop: '1px solid #ddd',
              paddingTop: '20px',
              marginTop: '10px'
            }}
            spacing={2}>
            {buttons && buttons.map((button: buttonType) => (
              <Button {...button} variant="contained">{button.label}</Button>
            ))}
          </Stack>
        </Grid>
      </Grid>
    </div>
  );
}

export default Result;
