import { Label, SwitchContainer, SwitchRoot, SwitchThumb } from './style';
import {useAtom} from 'jotai';
import { themeAtom } from "@/App";

export function SwitchTheme(){

  const [theme,setThemeOfChoice] = useAtom(themeAtom);

  function handleOnCheckedChange(isChecked: boolean) {
    const theme = isChecked ? 'light' : 'dark'
    setThemeOfChoice(theme);
    localStorage.setItem('@githublog-theme-v1', theme);
  }

  return (
    <SwitchContainer>
      <Label htmlFor="light-mode">
        Ativar Tema claro
      </Label>
      <SwitchRoot 
        id="light-mode"
        checked={theme === 'light'}
        onCheckedChange={handleOnCheckedChange}
      >
        <SwitchThumb/>
      </SwitchRoot>
    </SwitchContainer>
  )
}