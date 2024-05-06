import { useEffect, useState } from "react";
import { styled } from "styled-components";
import type { TileType } from "../validators/tile";
import { Tile } from "./Tile";

export function TileGrid() {
  const [tiles, setTiles] = useState<TileType[]>([]);
  const [beingDragged, setBeingDragged] = useState<number | undefined>(undefined);

  useEffect(() => {
    const tileArr = Array(32).fill(null);
    const filledArr: TileType[] = tileArr.map(() => {
      const num = Math.random();
      if (num > .25) return { category: 'Plant', type: num > .75 ? 'Carrot' : 'Potato', progress: 100, amount: 1 }
      else return { category: 'Empty' }
    });

    setTiles(filledArr);
  }, []);

  function moveTile(to: number) {
    if (beingDragged === undefined) return;
    const elem = tiles[beingDragged];
    tiles[beingDragged] = tiles[to];
    tiles[to] = elem;
    setTiles([...tiles]);
  }

  function clickTile(index: number) {
    const tile = tiles[index];
    console.log(index)
    if (tile.category === 'Plant') {
      if (tile.progress >= 100) tile.progress = 0;
      setTiles([...tiles])
    }
  }

  return (
    <Layout>
      {
        tiles.map((tile, i) =>
          <Tile
            key={i}
            tile={tile}
            isDragged={() => setBeingDragged(i)}
            onDrop={() => moveTile(i)}
            onClick={() => clickTile(i)}
          />)
      }
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