//Aui tera só códigos de definição do typeScript e nunca código javaScript

import 'styled-components';
import {defaultTheme} from '../components/styles/themes/default';

//Guaradando o meu defaultTheme numa variavle themeType, assim passo
// todas as própriedades do defaultTheme para o themeType
type ThemeType = typeof defaultTheme;


//Criando uma tipagem  para o modulo styled-component
declare module 'styled-components'{
    export interface DefaultTheme extends  ThemeType{}
}