import { useState, useEffect, useRef } from 'react';
import Link from '../../../node_modules/next/link';
import styled, { css } from 'styled-components';
import theme from 'styles/theme';
import Div from 'components/atoms/Div';
import Img from 'components/atoms/Img';
import Span from 'components/atoms/Span';

export default function Menu({ small }) {
  const [subCategoryIndex, setSubCategoryIndex] = useState(0);
  const [categoryMenuObj, setCategoryMenuObj] = useState([
    { title: '주류', active: false, index: 1 },
    { title: '화장품', active: false, index: 2 },
    { title: '향수', active: false, index: 3 },
    { title: '패션용품', active: false, index: 4 },
    { title: '식품', active: false, index: 5 },
    { title: '전자제품', active: false, index: 6 },
  ]);
  const [themeMenuObj, setThemeMenuObj] = useState([
    { title: '주류전문관', link: '#', index: 1 },
    { title: 'Heart to Heart', link: '#', index: 2 },
    { title: '스토리', link: '#', index: 3 },
    { title: '카탈로그', link: '#', index: 4 },
    { title: '베스트', link: '#', index: 5 },
    { title: '이벤트', link: '#', index: 6 },
    { title: '임직원관', link: '#', index: 7 },
  ]);
  const [alcoholCategory, setAlcoholCategory] = useState([
    { title: '전체', link: '#', index: 1 },
    { title: '술1', link: '#', index: 2 },
    { title: '술2', link: '#', index: 3 },
    { title: '술3', link: '#', index: 4 },
    { title: '술4', link: '#', index: 5 },
    { title: '술5', link: '#', index: 6 },
    { title: '술6', link: '#', index: 7 },
    { title: '술7', link: '#', index: 8 },
    { title: '술8', link: '#', index: 9 },
  ]);
  const [cosmeticsCategory, setCosmeticsCategory] = useState([
    { title: '전체', link: '#', index: 1 },
    { title: '에센스 / 세럼', link: '#', index: 2 },
    { title: '크림', link: '#', index: 3 },
    { title: '아이케어', link: '#', index: 4 },
    { title: '선케어', link: '#', index: 5 },
    { title: '쿠션/파운데이션', link: '#', index: 6 },
    { title: '립스틱/립밤', link: '#', index: 7 },
    { title: '남성 기초 케어', link: '#', index: 8 },
    { title: '바디/헤어', link: '#', index: 9 },
  ]);
  const [perfumeCategory, setPerfumeCategory] = useState([
    { title: '전체', link: '#', index: 1 },
    { title: '향수1', link: '#', index: 2 },
    { title: '향수2', link: '#', index: 3 },
    { title: '향수3', link: '#', index: 4 },
    { title: '향수4', link: '#', index: 5 },
    { title: '향수5', link: '#', index: 6 },
    { title: '향수6', link: '#', index: 7 },
    { title: '향수7', link: '#', index: 8 },
    { title: '향수8', link: '#', index: 9 },
  ]);
  const [fashionGoodsCategory, setFashionGoodsCategory] = useState([
    { title: '전체', link: '#', index: 1 },
    { title: '패션굿즈1', link: '#', index: 2 },
    { title: '패션굿즈2', link: '#', index: 3 },
    { title: '패션굿즈3', link: '#', index: 4 },
    { title: '패션굿즈4', link: '#', index: 5 },
    { title: '패션굿즈5', link: '#', index: 6 },
    { title: '패션굿즈6', link: '#', index: 7 },
    { title: '패션굿즈7', link: '#', index: 8 },
    { title: '패션굿즈8', link: '#', index: 9 },
  ]);
  const [foodCategory, setFoodCategory] = useState([
    { title: '전체', link: '#', index: 1 },
    { title: '음식1', link: '#', index: 2 },
    { title: '음식2', link: '#', index: 3 },
    { title: '음식3', link: '#', index: 4 },
    { title: '음식4', link: '#', index: 5 },
    { title: '음식5', link: '#', index: 6 },
    { title: '음식6', link: '#', index: 7 },
    { title: '음식7', link: '#', index: 8 },
    { title: '음식8', link: '#', index: 9 },
  ]);
  const [electronicsCategory, setElectronicsCategory] = useState([
    { title: '전체', link: '#', index: 1 },
    { title: '전자제품1', link: '#', index: 2 },
    { title: '전자제품2', link: '#', index: 3 },
    { title: '전자제품3', link: '#', index: 4 },
    { title: '전자제품4', link: '#', index: 5 },
    { title: '전자제품5', link: '#', index: 6 },
    { title: '전자제품6', link: '#', index: 7 },
    { title: '전자제품7', link: '#', index: 8 },
    { title: '전자제품8', link: '#', index: 9 },
  ]);
  const [depth2Category, setDepth2Category] = useState([]);

  return (
    <MenuWrap small={small}>
      <MenuWrapCoverLeft>
        <MenuWrapTitle>카테고리</MenuWrapTitle>
        <MenuSubListWrap>
          {categoryMenuObj.map((value, index) => {
            return (
              <MenuSubList
                onClick={() => {
                  setSubCategoryIndex(index + 1);
                  switch (index + 1) {
                    case 1:
                      setDepth2Category([...alcoholCategory]);
                      break;
                    case 2:
                      setDepth2Category([...cosmeticsCategory]);
                      break;
                    case 3:
                      setDepth2Category([...perfumeCategory]);
                      break;
                    case 4:
                      setDepth2Category([...fashionGoodsCategory]);
                      break;
                    case 5:
                      setDepth2Category([...foodCategory]);
                      break;
                    case 6:
                      setDepth2Category([...electronicsCategory]);
                      break;
                    default:
                      setDepth2Category([]);
                      break;
                  }
                }}
                active={subCategoryIndex === index + 1}
                key={index + 1}
              >
                <div>
                  {/* <div className="icon"> */}
                  <Img
                    pc={{ width: '3rem', height: '3rem' }}
                    src={`/assets/icons/icon-menu-${value.index}.svg`}
                    alt={value.title}
                    center
                    rowCenter
                  />
                </div>
                {value.title}
              </MenuSubList>
            );
          })}
        </MenuSubListWrap>
        <MenuWrapBrandTitle
          onClick={() => {
            setSubCategoryIndex(7);
          }}
          active={subCategoryIndex === 7}
        >
          브랜드
          <div>
            <Img
              pc={{ width: '3rem', height: '3rem' }}
              src={`/icons/arrow-right.svg`}
              alt="right arrow"
              center
              rowCenter
            />
          </div>
        </MenuWrapBrandTitle>
        <MenuWrapTitle>테마추천</MenuWrapTitle>
        <MenuSubListWrap>
          {themeMenuObj?.map((value, index) => (
            <MenuSubList key={index}>{value.title}</MenuSubList>
          ))}
        </MenuSubListWrap>
      </MenuWrapCoverLeft>
      {subCategoryIndex && subCategoryIndex !== 7 ? (
        <MenuWrapCoverRight>
          {depth2Category?.map((value, index) => (
            <Link href={`/category/${index}`}>
              <MenuSubList key={index}>{value.title}</MenuSubList>
            </Link>
          ))}
        </MenuWrapCoverRight>
      ) : (
        subCategoryIndex === 7 && <BrandDepth2 />
      )}
    </MenuWrap>
  );
}

const MenuWrap = styled.div`
  position: absolute;
  /* left: 120px; */
  z-index: 9999;

  background-color: #fff;
  display: flex;
  top: ${({ small }) => (small ? `78px` : `189px`)};
`;
const MenuWrapCoverLeft = styled.div`
  width: 300px;
  box-shadow: 5px 0 5px 0 rgba(0, 0, 0, 0.05);
  padding-top: 1rem;
`;
const MenuWrapCoverRight = styled(MenuWrapCoverLeft)`
  width: 300px;
  z-index: -1;
`;
const MenuWrapTitle = styled.div`
  padding: 1.5rem 3rem;
  color: #000;
  font-size: 18px;
  background-color: #fff;
  font-weight: bold;
  height: 100%;
  max-height: 6.1rem;
`;
const MenuWrapBrandTitle = styled(MenuWrapTitle)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1.5rem 0 2.5rem 0;
  max-height: 6.1rem;
  padding: 1.5rem 1.5rem 1.5rem 3rem;
  cursor: pointer;
  ${({ active }) => {
    if (active) {
      return css`
        background-color: rgba(91, 166, 210, 0.1);
      `;
    }
  }}
  .icon {
    width: 30px;
    height: 30px;
    background-color: #ccc;
  }
`;
const MenuSubListWrap = styled.ul``;
const MenuSubList = styled.li`
  .icon {
    width: 30px;
    height: 30px;
    background-color: #ccc;
  }
  margin-bottom: 1rem;
  max-height: 5rem;
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 1.5rem 3rem;
  color: #000;
  font-size: 15px;
  background-color: #fff;
  cursor: pointer;
  &:hover {
    background-color: rgba(91, 166, 210, 0.1);
  }
  ${({ active }) => {
    if (active) {
      return css`
        background-color: rgba(91, 166, 210, 0.1);
      `;
    }
  }}
`;

const BrandDepth2 = () => {
  const [brandDepth2ButtonIndex, setBrandDepth2ButtonIndex] = useState(1);
  const [brandDepth2ButtonArr] = useState([
    { title: '전체', active: true, index: 1 },
    { title: '주류', active: false, index: 2 },
    { title: '화장품', active: false, index: 3 },
    { title: '향수', active: false, index: 4 },
    { title: '패션용품', active: false, index: 5 },
    { title: '식품', active: false, index: 6 },
    { title: '전자제품', active: false, index: 7 },
  ]);

  const [filterTabIndex, setFilterTabIndex] = useState('ABC');

  // 브랜드 카테고리 - ABC
  const [engACategory, setEngACategory] = useState([
    { title: 'A PURY', link: '#', index: 1 },
    { title: 'ABLSOUT ELYX', link: '#', index: 2 },
    { title: 'A.P.C', link: '#', index: 3 },
    { title: 'ARDBEG', link: '#', index: 4 },
  ]);
  const [engBCategory, setEngBCategory] = useState([
    { title: 'B&B', link: '#', index: 1 },
    { title: 'BABOR', link: '#', index: 2 },
    { title: 'BALLANTINE’S', link: '#', index: 3 },
    { title: 'BUSHMILLS', link: '#', index: 4 },
  ]);
  const [engCCategory, setEngCCategory] = useState([
    { title: 'CAMUS', link: '#', index: 1 },
    { title: 'CHABOT', link: '#', index: 2 },
    { title: 'CHABOT', link: '#', index: 3 },
    { title: 'CHIVAS REGAL', link: '#', index: 4 },
    { title: 'CHOYA', link: '#', index: 5 },
  ]);

  const BrandListA = props => {
    return (
      <Div>
        <BrandDepth2ListWrap>
          <BrandDepth2ListTit>A</BrandDepth2ListTit>
          <BrandDepth2List>
            {engACategory?.map((value, index) => (
              <Link href={`/brand/${index}`}>
                <EngList key={index}>{value.title}</EngList>
              </Link>
            ))}
          </BrandDepth2List>
        </BrandDepth2ListWrap>
        <BrandDepth2ListWrap>
          <BrandDepth2ListTit>B</BrandDepth2ListTit>
          <BrandDepth2List>
            {engBCategory?.map((value, index) => (
              <Link href={`/brand/${index}`}>
                <EngList key={index}>{value.title}</EngList>
              </Link>
            ))}
          </BrandDepth2List>
        </BrandDepth2ListWrap>
        <BrandDepth2ListWrap>
          <BrandDepth2ListTit>C</BrandDepth2ListTit>
          <BrandDepth2List>
            {engCCategory?.map((value, index) => (
              <Link href={`/brand/${index}`}>
                <EngList key={index}>{value.title}</EngList>
              </Link>
            ))}
          </BrandDepth2List>
        </BrandDepth2ListWrap>
      </Div>
    );
  };

  // 브랜드 카테고리 - 가나다
  const BrandListB = props => {
    return (
      <Div>
        <BrandDepth2ListWrap>
          <BrandDepth2ListTit>가</BrandDepth2ListTit>
          <BrandDepth2List>
            {engACategory?.map((value, index) => (
              <Link href={`/brand/${index}`}>
                <EngList key={index}>{value.title}</EngList>
              </Link>
            ))}
          </BrandDepth2List>
        </BrandDepth2ListWrap>
        <BrandDepth2ListWrap>
          <BrandDepth2ListTit>나</BrandDepth2ListTit>
          <BrandDepth2List>
            {engBCategory?.map((value, index) => (
              <Link href={`/brand/${index}`}>
                <EngList key={index}>{value.title}</EngList>
              </Link>
            ))}
          </BrandDepth2List>
        </BrandDepth2ListWrap>
        <BrandDepth2ListWrap>
          <BrandDepth2ListTit>다</BrandDepth2ListTit>
          <BrandDepth2List>
            {engCCategory?.map((value, index) => (
              <Link href={`/brand/${index}`}>
                <EngList key={index}>{value.title}</EngList>
              </Link>
            ))}
          </BrandDepth2List>
        </BrandDepth2ListWrap>
      </Div>
    );
  };

  // 검색결과
  const SearchList = props => {
    return (
      <Div dsp="flex" direction="column" justify="center" gap="1.5rem">
        <Img
          pc={{ width: '13rem', height: '13rem' }}
          src={`/assets/icons/noresult.png`}
          alt="icon"
          height100
          center
          rowCenter
        ></Img>
        <Span textAlign="center" size="2rem" lineHeight="40px" fontWeight="600">
          검색결과가 없습니다. <br />
          입력하신 검색어를 확인해 주세요
        </Span>
      </Div>
    );
  };

  return (
    <BrandDepth2Wrap>
      <BrandDepth2ButtonWrap>
        {brandDepth2ButtonArr?.map((value, index) => {
          return (
            <BrandDepth2Button
              onClick={() => {
                setBrandDepth2ButtonIndex(index + 1);
              }}
              active={brandDepth2ButtonIndex === index + 1}
              key={index + 1}
            >
              {value.title}
            </BrandDepth2Button>
          );
        })}
      </BrandDepth2ButtonWrap>
      <BrandSearchWrap>
        <Input placeholder="브랜드를 입력하세요"></Input>
        <Div
          as="button"
          typeof="submit"
          position="absolute"
          bottom="10px"
          right="25px"
        >
          <Img
            pc={{ width: '1.8rem', height: '1.8rem' }}
            src={`/assets/icons/icon-search-bold-bk.svg`}
            alt="icon-search"
          ></Img>
        </Div>
      </BrandSearchWrap>
      <BrandDepth2FilterWrap>
        <BrandDepth2Filter
          onClick={() => {
            setFilterTabIndex('ABC');
          }}
          active={filterTabIndex === 'ABC'}
        >
          ABC
        </BrandDepth2Filter>
        <BrandDepth2Filter
          onClick={() => {
            setFilterTabIndex('가나다');
          }}
          active={filterTabIndex === '가나다'}
        >
          가나다
        </BrandDepth2Filter>
      </BrandDepth2FilterWrap>

      {/* 브랜드 카테고리 */}
      {filterTabIndex === 'ABC' ? <BrandListA /> : <BrandListB />}

      {/* <SearchList /> */}
    </BrandDepth2Wrap>
  );
};

const BrandDepth2Wrap = styled.div`
  width: 300px;
  box-shadow: 5px 0 5px 0 rgba(0, 0, 0, 0.05);
  z-index: -1;
`;

const BrandDepth2ButtonWrap = styled.div`
  padding: 2.5rem 1.8rem 1rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
`;

const BrandDepth2Button = styled.button`
  border: 1px solid ${theme.color.gray.gray45};
  border-radius: 23px;
  background-color: white;
  font-size: 14px;
  font-family: 'PretendardMedium';
  padding: 0.5rem 1rem;
  color: ${theme.color.primary.fontGray};
  height: 3.2rem;
  ${({ active }) => {
    if (active) {
      return css`
        border: none;
        background-color: #000;
        color: #fff;
      `;
    }
  }}
`;

const BrandDepth2FilterWrap = styled.div`
  display: flex;
  margin-bottom: 5rem;
`;
const BrandDepth2Filter = styled.div`
  width: 50%;
  height: 6rem;
  padding: 2rem 1.8rem;
  text-align: center;
  font-size: ${theme.font.size.base};
  color: ${theme.color.primary.fontGray};
  ${({ active }) => {
    if (active) {
      return css`
        font-family: 'PretendardBold';
        position: relative;
        cursor: pointer;
        color: ${theme.color.common.black};
        &::before {
          content: '';
          position: absolute;
          bottom: 0;
          width: 100%;
          left: 0;
          height: 2px;
          background-color: ${theme.color.common.black};
        }
      `;
    }
  }}
`;

const BrandDepth2ListWrap = styled.div`
  margin-bottom: 3.5rem;
`;
const BrandDepth2ListTit = styled.p`
  font-size: 15px;
  color: ${theme.color.primary.fontGray};
  text-align: left;
  font-weight: bold;
  padding: 0 1.8rem;
  position: relative;
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 264px;
    height: 2px;
    background-color: ${theme.color.primary.gray};
  }
`;
const BrandDepth2List = styled.div`
  padding: 1.5rem 1.8rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  font-size: 1.5rem;
  span {
    font-size: 15px;
    color: #000;
  }
`;
const EngList = styled.button`
  text-align: left;
`;
const BrandSearchWrap = styled.div`
  position: relative;
  font-size: ${theme.font.size.ml};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Input = styled.input`
  font-size: ${theme.font.size.ml};
  width: 100%;
  max-height: 4.8rem;
  font-family: 'Pretendard';
  padding: 0.8rem;
  margin: 0 1.5rem;
  outline: 0;
  border: none;
  border-bottom: 2px solid ${theme.color.gray.gray45};
  background-color: transparent;
  ::placeholder {
    color: ${theme.color.primary.fontGray};
    font-size: 1.4rem;
  }
  :focus {
    ::placeholder {
      color: transparent;
    }
  }
`;
