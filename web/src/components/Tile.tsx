import { useEffect, useState, type CSSProperties, type DragEvent } from "react";
import { styled } from "styled-components";
import { PotContainer } from "./PotContainer";

type TileProps = {
  style?: CSSProperties;
  category: string;
  type: string;
}
export function Tile(props: TileProps) {
  const [draggedOver, setDraggedOver] = useState(false);
  
  function handleDragOver(e: DragEvent) {
    e.preventDefault();
    if (props.category !== 'Empty') return;
    setDraggedOver(true);
  }

  function handleDragOverLeave(e: DragEvent) {
    e.preventDefault();
    setDraggedOver(false);
  }

  function handleDrop(e: DragEvent) {
    e.preventDefault();
    setDraggedOver(false)
  }

  useEffect(() => {
    console.log(draggedOver)
  }, [draggedOver])

  return (
    <TileStyle
      style={props.style}
      onDragOver={handleDragOver}
      onDragEnd={handleDrop}
      onDragLeave={handleDragOverLeave}
      draggable={props.category !== 'Empty'}
      draggedOver={draggedOver}
    >
      {props.category === 'Pot' && <PotContainer plantName={props.type} />}
    </TileStyle>
  )
}

export const TileStyle = styled.div<{ draggedOver: boolean }>`
  border-radius: 0.5rem;
  aspect-ratio: 1 /1 ;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  background-color: ${props => props.draggedOver ? 'green' : '#919191'};
`