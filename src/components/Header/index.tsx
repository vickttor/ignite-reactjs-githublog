import { useTheme } from "styled-components";
import { HeaderContainer } from "./style";

import { CoverBanner } from "@/assets/Cover";

export function Header() {
  const { primary, bgcolor } = useTheme();

  return (
    <HeaderContainer>
      <CoverBanner color={primary} bgcolor={bgcolor}/>
    </HeaderContainer>
  );
}
