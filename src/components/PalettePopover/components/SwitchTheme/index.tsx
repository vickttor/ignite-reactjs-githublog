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
      <SwitchRoot 
        id="light-mode"
        checked={theme === 'light'}
        onCheckedChange={handleOnCheckedChange}
      >
        <SwitchThumb/>
      </SwitchRoot>
      <Label htmlFor="light-mode">
        Light
      </Label>
    </SwitchContainer>
  )
}