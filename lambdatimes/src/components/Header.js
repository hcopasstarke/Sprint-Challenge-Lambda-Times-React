import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background-color: #fff;
  border-bottom: 1px solid lightgrey;
  width: 100%;
  height: 120px;
  margin-top: 44px;
  padding-bottom: 15px;
`;

 const HeaderSpan = styled.span`
  align-self: flex-end;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 1px;
  margin-left: 25px;
  flex: 1;
`;

 const HeaderH1 = styled.h1`
  font-size: 60px;
  font-family: Didot, serif;
  font-weight: bold;
  flex: 8;
  text-align: center;
  color: #333;
`;

 const HeaderTemp = styled.span`
  text-align: right;
  margin-right: 25px;
  flex: 1;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderSpan>MARCH 32, 2018</HeaderSpan>
      <HeaderH1>Lambda Times</HeaderH1>
      <HeaderTemp>98°</HeaderTemp>
    </HeaderContainer>
  )
}

export default Header;