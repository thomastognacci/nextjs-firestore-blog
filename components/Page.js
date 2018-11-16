import styled, {createGlobalStyle} from "styled-components";

import Meta from "./Meta";
import Header from "./Header";

const Inner = styled.div`
  max-width: 40em;
  margin: auto;
`;

const GlobalStyle = createGlobalStyle`
html {
    box-sizing:border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    font-family: monospace;
  }
`;
const Page = (props) => {
  const {children} = props;
  return (
    <>
      <GlobalStyle />
      <Meta />
      <Header />
      <Inner>{children}</Inner>
    </>
  );
};

export default Page;
