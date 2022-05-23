import * as React from 'react';
import { styled } from '@mui/material/styles';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import InputBase from '@mui/material/InputBase';

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}));

export default function CustomizedSelects() {
  const [option, setOption] = React.useState('');
  const handleChange = (event) => {
    setOption(event.target.value);
  };
  return (
    <div>
      <FormControl sx={{ m: 1 }} variant="standard" style={{ background: 'white' }}>
        <NativeSelect
          id="demo-customized-select-native"
          value={option}
          onChange={handleChange}
          input={<BootstrapInput />}
          >
          <option aria-label="Elige una opción" value="" />
          <option value="id">ID</option>
          <option value="name">Nombre</option>
          <option value="course">Curso</option>
        </NativeSelect>
      </FormControl>
    </div>
  );
}
