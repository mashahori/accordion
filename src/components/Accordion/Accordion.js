import { useState } from 'react';
import { ChevronRightIcon } from './ChevronRightIcon';
import { Wrapper, Header, Icon, Text } from './styles';

export const Accordion = ({ header, text }) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <Wrapper>
      <Header
        onClick={() => {
          setOpen(!isOpen);
        }}
      >
        <h1>{header}</h1>
        <Icon isOpen={isOpen}>{ChevronRightIcon}</Icon>
      </Header>
        <Text isOpen={isOpen}>{text}</Text>
    </Wrapper>
  );
};