import { ITheme } from "infinity-forge";

declare module "styled-components" {
  export interface DefaultTheme extends ITheme {
    green: string;
    black: string;
    grey: string;
    grey20: string;
    grey40: string;
    grey80: string;
    grey100: string;
    greenActive: string;
    primaryColor: string;
    secondaryColor: string;
    tertiaryColor: string;
    darkColor: string;
  }
}
