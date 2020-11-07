import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

const GlobalStyle = createGlobalStyle`
${reset}

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  font: inherit;
  font-size: 100%;
  vertical-align: baseline;
  border: 0;
}

button,
select,
input,
textarea {
  font-family: inherit;
  border-radius: 0;
}

input[type='text']::-ms-clear {
  display: none;
}

/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
main,
menu,
nav,
section {
  display: block;
}

body {
  line-height: 1;
}

sup {
  vertical-align: super;
}

sub {
  vertical-align: sub;
}

ol,
ul {
  list-style: none;
}

blockquote,
q {
  quotes: none;
}

blockquote::before,
blockquote::after,
q::before,
q::after {
  content: '';
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

* {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}

button {
  margin: 0;
}

html {
  font-size: 100%;
}

body {
  font-weight: 400;
  font-size : 14px;
  font-family: 'IBM Plex Sans', 'Helvetica Neue', Arial, sans-serif;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: 'IBM Plex Mono', 'Menlo', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', Courier, monospace;
}

strong {
  font-weight: 600;
}

@media screen and (-ms-high-contrast: active) {
  svg {
    fill: ButtonText;
  }
}

h1 {
  font-size: 2.625rem;
  font-weight: 300;
  line-height: 1.199;
  letter-spacing: 0;
}

h2 {
  font-size: 2rem;
  font-weight: 400;
  line-height: 1.25;
  letter-spacing: 0;
}

h3 {
  font-size: 1.75rem;
  font-weight: 400;
  line-height: 1.29;
  letter-spacing: 0;
}

h4 {
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.4;
  letter-spacing: 0;
}

h5 {
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.375;
  letter-spacing: 0;
}

h6 {
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1.29;
  letter-spacing: 0.16px;
}

p {
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0;
}

a {
  color: inherit;
  text-decoration : none;
}

em {
  font-style: italic;
}
`;

export default GlobalStyle;
