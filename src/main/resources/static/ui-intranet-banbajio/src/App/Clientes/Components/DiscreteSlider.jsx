import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { Typography } from '@mui/material';

function DiscreteSlider({ placeholder, onSliderChange }) {
  const [value, setValue] = React.useState(20);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue); 
    onSliderChange(newValue); 
  };

  const valuetext = (value) => `${value}%`;

  return (
    <Box>
      <Typography>{placeholder}:</Typography>
      <Slider
        aria-label="Temperature"
        value={value}
        onChange={handleSliderChange}
        valueLabelFormat={valuetext}
        valueLabelDisplay="auto"
        step={5}
        marks
        min={10}
        max={70}
      />
    </Box>
  );
}

export default DiscreteSlider;
