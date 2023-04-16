import styled from 'styled-components';
import * as Popover from '@radix-ui/react-popover';

export const PopoverTrigger = styled(Popover.Trigger)`
  border-radius: 100%;
  padding: 0.5rem;
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 2;
  
  &:hover {
    svg {
      fill: #FFF;
    }
  }
  
  button {
    font-family: inherit;
    color: ${({theme})=>theme.primary};
    background-color: ${({theme})=>theme.bgcolor};
  }
`;

export const PopoverContentContainer = styled(Popover.Content)`
  border-radius: 10px;
  padding: 20px;
  width: 260px;
  background-color: ${({theme})=>theme.bgcolor};
  box-shadow: 0px 2px 28px ${({theme})=>`${theme.primary}25`};
  position: relative;
  right: 10px;
  animation-duration: 400ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;

  &[data-state='open'][data-side='top'] {
    animation-name: slideDownAndFade;
  }
  &[data-state='open'][data-side='right'] {
    animation-name: slideLeftAndFade;
  }
  &[data-state='open'][data-side='bottom'] {
    animation-name: slideUpAndFade;
  }
  &[data-state='open'][data-side='left'] {
    animation-name: slideRightAndFade;
  }

  @keyframes slideRightAndFade {
    from {
      opacity: 0;
      transform: translateX(-2px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes slideDownAndFade {
    from {
      opacity: 0;
      transform: translateY(-2px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideLeftAndFade {
    from {
      opacity: 0;
      transform: translateX(2px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  } 
`;

export const PopoverClose = styled(Popover.Close)`
  border-radius: 100%;
  padding: 2px;
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border-color: transparent;
  transition: all 0.2s ease;

  position: absolute;
  top: 5px;
  right: 5px;

  &:hover {
    background-color: transparent;
    border-color: ${({theme})=>theme.primary};
  }

  button {
    font-family: inherit;
    color: ${({theme})=>theme.primary};
  }
`;

export const PopoverArrow = styled(Popover.Arrow)`
  fill: ${({theme})=>theme.bgcolor};
`;

export const InputColorContainer = styled.div`
  margin-top: 1rem;
  width: 100%;
  display:flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  flex-wrap: wrap;
`;

export const InputColor = styled.input`
  height: 30px;
  padding: 0.25rem;
  border-radius: 8px;
  flex:1;
`;