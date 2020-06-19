import styled from 'styled-components';
import { lighten } from 'polished';

const HeaderStyle = styled.header`
  background-color: ${props => props.theme.main.colors.primary.petzYellow};
  display: flex;
  align-items: center;
  padding: 1em;
  justify-content: space-between;
  .icons-group {
    display: flex;
    justify-content: space-between;
    min-width: 85px;
    svg {
      &:hover {
        color: ${props => lighten(0.2, props.theme.main.colors.text.darkGrey)};
      }
    }
  }
`
export default HeaderStyle
