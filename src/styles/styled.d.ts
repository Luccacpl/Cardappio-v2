/* eslint @typescript-eslint/no-empty-interface: "off" */

import {} from 'styled-components'
import { ThemeType } from './theme'; // Import type from above file
import theme from './theme'

export type Theme = typeof theme

// declare module 'styled-components' {
//   export interface DefaultTheme extends theme {}
// }

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {} // extends the global DefaultTheme with our ThemeType.
}
