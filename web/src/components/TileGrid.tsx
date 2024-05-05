import { useEffect, useState } from "react";
import { styled } from "styled-components";
import { PotContainer } from "./PotContainer";
import { Tile } from "./Tile";

export function TileGrid() {
  const [tiles, setTiles] = useState<(null | string)[]>([]);
  useEffect(() => {
    const tileArr = Array(35).fill(null).map(() => Math.random() > .50 ? Math.random() > .50 ? 'Potato' : 'Carrot' : null)
    setTiles(tileArr);
  }, []);

  console.log(tiles)
  return (
    <Layout>
      {tiles.map((name, i) => name === null ? <Tile key={i} /> : <PotContainer key={i} plantName={name} />)}
    </Layout>
  )
}

const Layout = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px,1fr));
  gap: 1rem;
  padding: 1rem;
  width: 100%;
  background-color: #284c32;

`