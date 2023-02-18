import styled from 'styled-components'

export const StyledUserMenu = styled.ul`
  padding: 7px 16px;
  margin: 0;
  list-style: none;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  width: 400px;
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  & > li {
    width: 54px;
  }
  & > li div {
    display: flex;
    justify-content: flex-end;
    margin: 0 0 25px 0;
  }
  & > li ul {
    list-style: none;
    min-width: 100%;
    display: none;
    position: absolute;
    z-index: 1;
    right: 16px;
  }
  & > li:hover ul {
    display: flex;
    justify-content: flex-end;
  }
`
