import styled from "styled-components";
import * as Switch from '@radix-ui/react-switch';

export const SwitchContainer = styled.div`
 display: flex;
 gap: 0.5rem;
 justify-content: flex-start;
 align-items: center;
 margin: 1rem 0;
`;

export const Label = styled.label`
  color: ${({theme})=>theme.text};
  font-size: 1rem;
  line-height: 1;
  padding-right: 15px;
`;

export const  SwitchRoot = styled(Switch.Root)`
  padding: .125rem;
  width: 42px;
  display: flex;
  align-items: center;
  background-color: ${({theme})=>`${theme.input}`};
  border-radius: 9999px;

  &:hover {
    background-color: ${({theme})=>`${theme.input}`};
  }

  &[data-state='checked'] {
    background-color: ${({theme})=>`${theme.primary}`};
  }
`;

export const SwitchThumb = styled(Switch.Thumb)`
  display: inline-block;
  width: 21px;
  height: 21px;
  background-color: ${({theme})=>`${theme.primary}`};
  border-radius: 9999px;
  transition: transform 100ms;
  transform: translateX(0);
  will-change: transform;

  &[data-state='checked'] {
    background-color: #FFF;
    transform: translateX(15px);
  }
`;