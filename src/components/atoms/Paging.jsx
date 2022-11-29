import styled, { css } from 'styled-components';
import theme from 'styles/theme';
import Img from 'components/atoms/Img';
import { useState } from 'react';

export default function Paging({ mt, white }) {
  const [pagingIndex, setPagingIndex] = useState(0);

  return (
    <>
      <PagingWrap mt={mt}>
        <PagingList>
          <PagingBtn>
            <Img
              pc={{ width: '1.4rem', height: '1.4rem' }}
              src={'/assets/icons/icon-arrow-left-gray.svg'}
            />
          </PagingBtn>
        </PagingList>
        <PagingList
          onClick={() => {
            setPagingIndex(0);
          }}
        >
          <PagingBtn white={white} active={pagingIndex === 0}>
            1
          </PagingBtn>
        </PagingList>
        <PagingList
          onClick={() => {
            setPagingIndex(1);
          }}
        >
          <PagingBtn white={white} active={pagingIndex === 1}>
            2
          </PagingBtn>
        </PagingList>
        <PagingList
          onClick={() => {
            setPagingIndex(2);
          }}
        >
          <PagingBtn white={white} active={pagingIndex === 2}>
            3
          </PagingBtn>
        </PagingList>
        <PagingList
          onClick={() => {
            setPagingIndex(3);
          }}
        >
          <PagingBtn white={white} active={pagingIndex === 3}>
            4
          </PagingBtn>
        </PagingList>
        <PagingList
          onClick={() => {
            setPagingIndex(4);
          }}
        >
          <PagingBtn white={white} active={pagingIndex === 4}>
            5
          </PagingBtn>
        </PagingList>
        <PagingList>
          <PagingBtn>
            <Img
              pc={{ width: '1.4rem', height: '1.4rem' }}
              src={'/icons/icon-arrow.svg'}
            />
          </PagingBtn>
        </PagingList>
      </PagingWrap>
    </>
  );
}

const PagingWrap = styled.ul`
  display: flex;
  justify-content: center;
  margin-top: ${({ mt }) => mt || '2.1rem'};
`;
const PagingList = styled.li`
  width: 1.5rem;
  font-size: 1.4rem;
  text-align: center;
  padding: 3px 0;
  margin: 0 2px;
  cursor: pointer;
  button {
  }
`;
const PagingBtn = styled.button`
  color: ${theme.color.gray.gray65};
  color: ${({ white }) => (white ? '#fff' : `${theme.color.gray.gray65}`)};
  opacity: ${({ white }) => white && '0.4'};
  vertical-align: middle;
  ${({ active }) => {
    if (active) {
      return css`
        font-family: 'PretendardBold';
        opacity: ${({ white }) => white && '1'};
        color: ${({ white }) => (white ? 'white' : 'black')};
      `;
    }
  }}
`;
