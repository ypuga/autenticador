import React, { useState, useEffect } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function DynamicRadioButtons({ options, name, label, onChange, defaultValue }) {
  const [selectedValue, setSelectedValue] = useState(defaultValue || options[0]);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    if (onChange) onChange(event);
  };

  useEffect(() => {
    if (defaultValue !== undefined) {
      setSelectedValue(defaultValue);
    }
  }, [defaultValue]);

  return (
    <FormControl>
      <FormLabel id={`${name}-label`}>{label}</FormLabel>
      <RadioGroup
        row
        aria-labelledby={`${name}-label`}
        name={name}
        value={selectedValue}
        onChange={handleChange}
      >
        {options.map((option, index) => (
          <FormControlLabel
            key={index}
            value={option}
            control={<Radio />}
            label={option}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}
