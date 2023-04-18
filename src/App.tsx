import { GlobalStyles } from "@/styles/globals";
import { ThemeProvider } from "styled-components";
import { atom, useAtom } from 'jotai';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Router } from "@/Router";

import "@/lib/dayjs";

import dark from "@/styles/themes/dark";
import light from "./styles/themes/light";

const themeOptions = {dark, light};
type themeVariant = keyof typeof themeOptions;

const actualTheme = localStorage.getItem('@githublog-theme-v1') ?? 'dark';
const actualPrimaryColor = localStorage.getItem('@githublog-primaryColor-v1') ?? '#3294F8';

export const themeAtom = atom<themeVariant>(actualTheme as themeVariant);
export const primaryColorAtom = atom(actualPrimaryColor);

const queryClient = new QueryClient();

export function App() {

  const [themeOfChoice] = useAtom(themeAtom);
  const [primaryColorOfChoice] = useAtom(primaryColorAtom);

  return (
    <ThemeProvider theme={{...themeOptions[themeOfChoice], primary: primaryColorOfChoice}}>
      <GlobalStyles/>
      <QueryClientProvider client={queryClient}>
        <Router/>
      </QueryClientProvider>
    </ThemeProvider>
  )
}
