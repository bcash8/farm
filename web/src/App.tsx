import { styled } from "styled-components";
import { PotContainer } from "./assets/components/GameIcons";


export function App() {
  return <Layout>
    {...Array(400).fill(<PotContainer/>)}
  </Layout>
}

const Layout = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(20, 1fr);
  grid-template-rows: repeat(20, 1fr);
  gap: 0.25rem;
  margin: 1rem;
`
