import { styled } from "styled-components";
import { Sidebar } from "./components/Sidebar";
import { TileGrid } from "./components/TileGrid";


export function App() {
  return (
    <Layout>
      <TileGrid />
      <Sidebar />
    </Layout>
  )
}

const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr minmax(200px, 20%);
`
