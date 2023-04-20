import styled from "styled-components";

interface SkeletonProps {
  width?: string;
  height?: string;
}

export const Skeleton = styled.div<SkeletonProps>`
  background: ${({theme})=>`${theme.border}35`};
  width: ${(props)=>props.width ?? "100%"};
  height: ${(props)=>props.height ?? "30px"};
  border-radius: 4px;
  position: relative;
  transition: all 0.2s ease;
  overflow:hidden;
  
  &::after {
    display: block;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    transform: translateX(-100%);
    background: -webkit-gradient(linear, left top,
                right top, from(transparent), 
                color-stop(rgba(255, 255, 255, 0.1)),
                to(transparent));             
    background: linear-gradient(90deg, transparent,
            rgba(255, 255, 255, 0.1), transparent);
            
    animation: loading 1.5s infinite;
    @keyframes loading {
      100% {
        transform: translateX(100%);
      }
    }
  }
`;