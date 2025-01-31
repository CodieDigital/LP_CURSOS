import { ITheme } from "infinity-forge";

import { Theme, IConfigurationsTheme } from "@/presentation";

declare module "styled-components" {
  export interface DefaultTheme extends Theme, IConfigurationsTheme {}
}
