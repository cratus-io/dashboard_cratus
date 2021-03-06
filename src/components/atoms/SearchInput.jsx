import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import SearchIcon from '../../assets/Search.png';

const useStyles = makeStyles((theme) => ({
  div: {
   display: 'grid',
   gridTemplateColumns: 'auto auto',
   columnGap: '0.5rem',
   alignItems: 'center'
  },
  input: {
   fontSize: theme.typography.subtitle2.fontSize,
   fontWeight: theme.typography.fontWeightBold,
   [theme.breakpoints.up('xl')]: {
    fontSize: theme.typography.h5.fontSize,
  },
  }
}));

// Header Search Input 
 function SearchInput() {
   const [value, setValue] = useState("");
   const handleChange = (e) => {
      setValue(e.target.value)
      return value;
   }
  const classes = useStyles();

  return (
      <div className={classes.div}>
          <img src={SearchIcon} alt="search-icon" />
        <Input disableUnderline={true} onChange={handleChange} className={classes.input} placeholder="Everything" />
      </div>
  );
}

export default SearchInput;