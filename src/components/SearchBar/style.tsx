import styled from 'styled-components';

export const NavStyled = styled.nav`
  display: flex;
  background-color: ${props => props.theme.main.colors.primary.mediumBlue};
  color: white;
  align-items: center;
  justify-content: space-between;
  padding: 0 1em;
`

export const ListStyled = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 30%;
  list-style: none;
  margin: 0;
  padding: 0;
`
export const ItemListStyled = styled.li`
  text-transform: uppercase;
  cursor: pointer;
  padding: 1em 0;
  font-size: 1.125em;
  font-weight: lighter;
`

