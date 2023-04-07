import { GlobalStyles } from "@/styles/globals"
import { ThemeProvider } from "styled-components"
import { atom, useAtom } from 'jotai';
import { Router } from "@/Router"

import dark from "@/styles/themes/dark"
import light from "./styles/themes/light"

const themeOptions = {dark, light}
type themeVariant = keyof typeof themeOptions;

const actualTheme = localStorage.getItem('@githublog-theme-v1') ?? 'dark';
const actualPrimaryColor = localStorage.getItem('@githublog-primaryColor-v1') ?? '#3294F8';

export const themeAtom = atom<themeVariant>(actualTheme as themeVariant);
export const primaryColorAtom = atom(actualPrimaryColor);

export function App() {

  const [themeOfChoice] = useAtom(themeAtom);
  const [primaryColorOfChoice] = useAtom(primaryColorAtom);

  return (
    <ThemeProvider theme={{...themeOptions[themeOfChoice], primary: primaryColorOfChoice}}>
      <GlobalStyles/>
      <Router/>
    </ThemeProvider>
  )
}
