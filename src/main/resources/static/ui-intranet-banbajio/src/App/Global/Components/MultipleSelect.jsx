import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name, selectedValue, theme) {
  return {
    fontWeight: selectedValue === name
      ? theme.typography.fontWeightMedium
      : theme.typography.fontWeightRegular,
  };
}

export default function SingleSelect({ values, placeholder, value, onChange, disabled }) {
  const theme = useTheme();

  return (
    <div>
      <FormControl sx={{ m: 1, width: '100%' }}>
        <InputLabel id="demo-simple-select-label">{placeholder}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value} 
          disabled={disabled}
          onChange={onChange} 
          input={<OutlinedInput label="Name" />}
          MenuProps={MenuProps}
        >
          {values.map((item) => (
            <MenuItem
              key={item}
              value={item}
              style={{
                fontWeight:
                  value === item
                    ? theme.typography.fontWeightMedium
                    : theme.typography.fontWeightRegular,
              }}
            >
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

