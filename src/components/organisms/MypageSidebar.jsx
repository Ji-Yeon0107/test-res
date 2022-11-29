import Image from 'next/image';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import styled from 'styled-components';
import theme from 'styles/theme';
import Img from 'components/atoms/Img';

export default function MypageSidebar() {
  const sideBarArr = [
    {
      label: '쇼핑주문',
      menuItems: [
        { title: '주문 내역' },
        { title: '주문 예약 내역' },
        { title: '주문/예약 취소내역' },
        { title: '교환/반품 내역' },
        { title: '주문 출입국 정보 변경' },
        { title: '사은품 신청 내역' },
      ],
    },
    {
      label: '내 혜택',
      menuItems: [
        { title: '쿠폰함' },
        { title: '회원 혜택' },
        { title: '포인트 내역' },
        { title: '스카이 패스 마일리지 전환' },
      ],
    },
    {
      label: '내 활동 보기',
      menuItems: [
        { title: '장바구니', icon: true },
        { title: '찜 목록' },
        { title: '최근 본 상품' },
        { title: '상품 리뷰' },
        { title: '재입고 알림' },
        { title: '상품 Q&A 내역' },
        { title: '1:1 문의 내역' },
        { title: '알림 내역' },
      ],
    },
    {
      label: '이벤트',
      menuItems: [{ title: '응모한 이벤트' }, { title: '친구초대' }],
    },
    {
      label: '선물함',
      menuItems: [{ title: '받은 선물함' }, { title: '보낸 선물함' }],
    },
    {
      label: '내 정보',
      menuItems: [
        { title: '회원정보 수정' },
        { title: '비밀번호 변경' },
        { title: 'SNS 로그인 연결 설정' },
        { title: '여권 정보관리' },
        { title: '탑승편 정보관리' },
        { title: '회원탈퇴' },
      ],
    },
  ];

  return (
    <>
      <Sidebar width="220px">
        <MypageSidebarTit>마이페이지</MypageSidebarTit>
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
const SidebarWrap = styled.div`
  border: 1px solid ${theme.color.gray.gray45};
  padding: 2rem 0;
`;
const MypageSidebarTit = styled.div`
  font-size: ${theme.font.size.xl2};
  font-family: 'PretendardSemiBold';
  margin: 0 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid ${theme.color.gray.gray45};
`;
