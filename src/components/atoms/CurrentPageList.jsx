import * as React from 'react';
import styled from 'styled-components';

export default function CurrentPageList({ array }) {
  return (
    <CurrentPage>
      <ul>
        {array?.map((data, index) => (
          <li key={index}>{data.value}</li>
        ))}
      </ul>
    </CurrentPage>
  );
}

//제품 정보 상단
const CurrentPage = styled.div`
  ul {
    display: flex;
  }
  li {
    padding: 0 12px;
    position: relative;
    font-size: 12px;
    cursor: pointer;
  }
  li:nth-child(1) {
    padding-left: 0;
  }
  li:last-child {
    font-family: 'PretendardBold';
  }
  li:after {
    content: '>';
    position: absolute;
    top: 0;
    right: -5px;
  }
  li:last-child:after {
    display: none;
  }
`;
