import { forwardRef, useRef } from 'react';
import { styled } from 'styled-components';
import { CarrotSVG } from '../assets/CarrotSVG';
import { PotSVG } from '../assets/PotSVG';
import { PotatoSVG } from '../assets/PotatoSVG';
import type { PlantTile } from '../validators/tile';


export function PotContainer(props: PlantTile) {
  const plantRef = useRef<SVGSVGElement | null>(null);

  return (
    <Layout progress={props.progress}>
      <PotSVG width='60%' height='60%' />
      <Plant type={props.type} ref={plantRef} width='40%' height='40%' />
    </Layout>
  )
}

export const Plant = forwardRef<SVGSVGElement, { type?: string, width?: string, height?: string }>((props, ref) => {
  if (props.type === 'Potato') return <PotatoSVG ref={ref} width={props.width} height={props.height} />
  if (props.type === 'Carrot') return <CarrotSVG ref={ref} width={props.width} height={props.height} />
})
Plant.displayName = 'Plant';

const Layout = styled.div<{ progress: number }>`
  padding: 10px;
  width: 100%;
  aspect-ratio: 1 / 1;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: ${props => props.progress >= 100 ? 'pointer' : 'default'};

  :first-child {
    position: absolute;
    bottom: 0;
    z-index: 100;
  }
  :last-child {
    position: relative;
    
    top: ${props => props.progress < 100 ? 50 - props.progress / 2 : 0}%;
    transition: top 1s;
  }


  svg {
    flex-grow: 0;
    flex-shrink: 0;
  }

  background-color: #d3e0d3;
  border-radius: inherit;
`
