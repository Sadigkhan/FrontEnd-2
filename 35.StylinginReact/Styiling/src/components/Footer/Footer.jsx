import React from 'react'
import styled from 'styled-components'

const Footer = () => {

  const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #BF4F74;
  color:white
`;

const FooterParts=styled.div`
    background-color: #BF4F74;
    color: white;
    padding: 20px;
    text-align: center;
    font-size: 20px;
    width:30%;
`

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
  display: flex;
  justify-content: space-around;
`;
  return (
    <Wrapper>
        <FooterParts>
            <Title>Footer</Title>
        </FooterParts>
        <FooterParts>
        <Title>Footer</Title>
            
        </FooterParts>
        <FooterParts>
        <Title>Footer</Title>
            
        </FooterParts>
    </Wrapper>
  )
}

export default Footer