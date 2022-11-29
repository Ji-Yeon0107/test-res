import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import styled from 'styled-components';
import theme from 'styles/theme';
import Img from 'components/atoms/Img';

export default function CsSidebar() {
  const sideBarArr = [
    {
      label: '고객상담',
      menuItems: [
        { title: 'FAQ' },
        { title: '회원 1:1 문의' },
        { title: '비회원 1:1 문의' },
        { title: '비회원 주문조회' },
        { title: '탑승편 조회' },
      ],
    },
    {
      label: '공지사항',
      menuItems: [{ title: '공지사항' }, { title: '당첨자 발표' }],
    },
    {
      label: '멤버십 안내',
      menuItems: [
        { title: '회원등급 안내' },
        { title: '스페셜 멤버십' },
        { title: '포인트 혜택' },
        { title: '대한항공 마일리지 전환' },
      ],
    },
    {
      label: '기내 면세점 가이드',
      menuItems: [
        { title: '면세 이용 안내' },
        { title: '쇼핑 절차/안내' },
        { title: '주문가능 시간' },
        { title: '인도/수령 안내' },
        { title: '기내반입제한 안내' },
        { title: '교환/환불/AS' },
      ],
    },
    {
      label: '서비스 안내',
      menuItems: [
        { title: '결제서비스 안내' },
        { title: '인터넷 쇼핑 문제해결' },
        { title: '약관 및 관리방침' },
        { title: '환율조회' },
        { title: '제휴 및 입점문의' },
      ],
    },
  ];

  return (
    <>
      <Sidebar width="220px">
        <CsSidebarTit>고객센터</CsSidebarTit>
        <Menu>
          {sideBarArr?.map((value, index) => {
            return (
              <SubMenu open={true} label={value.label} key={index}>
                {value.menuItems?.map((value, index) => {
                  return (
                    <MenuItem key={index}>
                      {value.title}{' '}
                      {value.icon && (
                        <Img
                          pc={{ width: '3rem', height: '3rem' }}
                          src={`/assets/icons/icon-link-bk.svg`}
                          alt="icon link"
                        ></Img>
                      )}
                    </MenuItem>
                  );
                })}
              </SubMenu>
            );
          })}
        </Menu>
      </Sidebar>
    </>
  );
}
const CsSidebarTit = styled.div`
  font-size: ${theme.font.size.xl2};
  font-family: 'PretendardSemiBold';
  margin: 0 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid ${theme.color.gray.gray45};
`;
