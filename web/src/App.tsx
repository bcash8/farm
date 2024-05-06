import emotionIsPropValid from "@emotion/is-prop-valid";
import { StyleSheetManager, styled } from "styled-components";
import { Sidebar } from "./components/Sidebar";
import { TileGrid } from "./components/TileGrid";


export function App() {
  function shouldForwardProp(prop: unknown) {
    return typeof prop === 'string' ? emotionIsPropValid(prop) : true;
  }

  return (
    <StyleSheetManager enableVendorPrefixes shouldForwardProp={shouldForwardProp}>
      <Layout>
        <TileGrid />
        <Sidebar />
      </Layout>
    </StyleSheetManager>
  )
}

const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr minmax(200px, 20%);
`
