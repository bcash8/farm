import { useEffect, useState } from "react";
import { styled } from "styled-components";
import { PotContainer } from "./PotContainer";
import { Tile } from "./Tile";

export function TileGrid() {
  const [tiles, setTiles] = useState<null[] | string[]>([]);
  useEffect(() => {
    const tileArr = Array(24).fill(null);
    setTiles(tileArr);
  }, []);

  return (
    <Layout>
      {tiles.map((name, i) => name === null ? <Tile key={i} /> : <PotContainer key={i} plantName={name} />)}
    </Layout>
  )
}

const Layout = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 1rem;
  border: 1px solid black;
  padding: 0.5rem;
`