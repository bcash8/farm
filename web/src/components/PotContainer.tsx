import { forwardRef, useEffect, useRef, useState } from 'react';
import { styled } from 'styled-components';
// import { CarrotSVG } from '../CarrotSVG';
import { CarrotSVG } from '../assets/CarrotSVG';
import { PotSVG } from '../assets/PotSVG';
import { PotatoSVG } from '../assets/PotatoSVG';
// import { PotatoSVG } from '../PotatoSVG'



export function PotContainer({ plantName }: { plantName: string }) {
  const [progress, setProgress] = useState<number>(0);
  const [plantHeight, setPlantHeight] = useState(1);
  const plantRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const plant = plantRef.current
    if (plant !== null) {
      setPlantHeight(plant.clientHeight)
      console.log("H", plantHeight)
    }
  }, [plantRef.current])

  useEffect(() => {
    const int = setInterval(() => setProgress(p => p + 10), 5000)
    return () => { clearInterval(int); }
  }, []);

  return (
    <Layout progress={progress} plantHeight={plantHeight} draggable={true}>
      <PotSVG width='60%' height='60%' />
      <Plant name={plantName} ref={plantRef} width='40%' height='40%' />
    </Layout>
  )
}

export const Plant = forwardRef<SVGSVGElement, { name?: string, width?: string, height?: string }>((props, ref) => {
  if (props.name === 'Potato') return <PotatoSVG ref={ref} width={props.width} height={props.height} />
  if (props.name === 'Carrot') return <CarrotSVG ref={ref} width={props.width} height={props.height} />
})
Plant.displayName = 'Plant';

const Layout = styled.div<{ progress: number, plantHeight: number }>`
  padding: 10px;
  width: 100%;
  aspect-ratio: 1 / 1;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: inherit;

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
`
