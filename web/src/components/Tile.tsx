import type { CSSProperties, DragEvent } from "react";
import { styled } from "styled-components";
import { PotContainer } from "./PotContainer";

export function Tile({ style }: { style?: CSSProperties }) {
  function dragOver(e: DragEvent) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    console.log(e);
  }

  function dropHandler(e: DragEvent) {
    e.preventDefault;
  }
  return (
    <TileStyle style={style} onDragOver={dragOver} onDrop={dropHandler}>
      <PotContainer plantName="Potato" />
    </TileStyle>
  )
}

export const TileStyle = styled.div`
  border-radius: 0.5rem;
  aspect-ratio: 1 /1 ;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
`