import { useEffect, useState, type CSSProperties, type DragEvent } from "react";
import { styled } from "styled-components";
import type { TileType } from "../validators/tile";
import { PotContainer } from "./PotContainer";

type TileProps = {
  style?: CSSProperties;
  tile: TileType;
  isDragged: () => void;
  onDrop: () => void;
  onClick: () => void;
}

export function Tile(props: TileProps) {
  const [draggedOver, setDraggedOver] = useState<boolean>(false);
  const [tile, setTile] = useState<TileType>({ category: 'Empty' });

  useEffect(() => {
    setTile(props.tile);
  }, [props.tile])

  function handleDragOver(e: DragEvent) {
    e.preventDefault();
    if (tile.category !== 'Empty') return;
    setDraggedOver(true);
  }

  function handleDragOverLeave(e: DragEvent) {
    e.preventDefault();
    setDraggedOver(false);
  }

  function handleDrop(e: DragEvent) {
    e.preventDefault();
    props.onDrop();
    setDraggedOver(false)
  }

  return (
    <TileStyle
      style={props.style}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      onDragLeave={handleDragOverLeave}
      onDragStart={() => props.isDragged()}
      draggable={tile.category !== 'Empty'}
      draggedOver={draggedOver}
      onClick={props.onClick}
    >
      {tile.category === 'Plant' && <PotContainer {...tile} />}
    </TileStyle>
  )
}

export const TileStyle = styled.div<{ draggedOver: boolean }>`
  border-radius: 0.5rem;
  aspect-ratio: 1 /1 ;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  background-color: ${props => props.draggedOver ? 'green' : '#919191'};
`