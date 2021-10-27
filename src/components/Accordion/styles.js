import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 400px;
  margin: 80px auto;
  overflow: hidden;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  padding: 0 20px;
  cursor: pointer;
`;

export const Icon = styled.div`
  margin-left: auto;
  & > svg {
    transition: transform 0.5s;
    transform: ${({ isOpen }) => isOpen ? 'rotate(-180deg)' : 'none'}
  }
`;

export const Text = styled.p`
  height: 600px;
  box-sizing: border-box;
  max-height: ${({ isOpen }) => (isOpen ? '300px' : '0')};
  transition: max-height 0.7s ease;
  margin: 0;
  padding: 0 20px
`;
