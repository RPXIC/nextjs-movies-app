import Link from 'next/link'
import styled from 'styled-components'

export const StyledBackButton = styled(Link)`
  margin: 7px 0 0 16px;
  list-style: none;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 46px;
  height: 46px;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 16px;
  ${({ theme }) => theme.fonts.secondary};

  &:hover {
    background-color: rgb(255, 255, 255, 0.7);
  }

  & > img {
    fill: ${({ theme }) => theme.colors.white};
  }
`
