import 'styled-components';

interface ThemeProperties {
  primary: string;
  title: string;
  subtitle: string;
  text: string;
  span: string;
  label: string;
  border: string;
  post: string;
  profile: string;
  bgcolor: string;
  input: string;
}

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeProperties {}
}