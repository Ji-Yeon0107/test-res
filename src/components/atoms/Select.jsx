import * as React from 'react';
import styled from 'styled-components';
import { InputLabel, MenuItem, FormControl, Select } from '@mui/material';

export default function SelectWrap() {
  const [age, setAge] = React.useState(1);
  const handleChange = event => {
    setAge(event.target.value);
  };
  return (
    <Form variant="standard" sx={{ m: 1, minWidth: 120 }}>
      <Sel id="service-select" value={age} onChange={handleChange} label="Age">
        <SelItem value={1}>서비스이용약관(2022.07.01)</SelItem>
        <SelItem value={2}>변경값</SelItem>
      </Sel>
    </Form>
  );
}

const Form = styled(FormControl)`
  display: flex !important;
  width: 100%;
  max-width: 33.5rem;
  margin: 4rem auto 7rem !important;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`;
const Sel = styled(Select)`
  font-size: 1.4rem !important;
  padding: 5px 10px;
  background: url('/assets/icons/ic_arrowup.svg') no-repeat right 10px center;
  div:focus {
    background-color: transparent !important;
  }
  & svg {
    display: none;
  }
`;
const SelItem = styled(MenuItem)`
  font-size: 1.3rem !important;
`;
