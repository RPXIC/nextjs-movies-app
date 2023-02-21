import styled from 'styled-components'

export const StlyedCTAButton = styled.button`
  border-style: none;
  border-radius: 16px;
  height: 46px;
  min-width: 125px;
  background-color: ${(props: any) => (props.filter === props.text ? ({ theme }) => theme.colors.primary : ({ theme }) => theme.colors.white)};
  color: ${(props: any) => (props.filter === props.text ? ({ theme }) => theme.colors.white : ({ theme }) => theme.colors.black)};
  font-weight: ${(props: any) => (props.filter === props.text ? 700 : 400)};
  font-size: 18px;
  line-height: 21px;
  ${({ theme }) => theme.fonts.secondary};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
    cursor: pointer;
  }
`
