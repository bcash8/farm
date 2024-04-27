import { useEffect, useRef, useState } from 'react';
import { styled } from 'styled-components';
// import { CarrotSVG } from '../CarrotSVG';
import { PotSVG } from '../PotSVG';
import { PotatoSVG } from '../PotatoSVG';
// import { PotatoSVG } from '../PotatoSVG'



export function PotContainer() {
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
      <PotatoSVG ref={plantRef} width='40%' height='40%' />
    </Layout>
  )
}

const Layout = styled.div<{ progress: number, plantHeight: number }>`
  padding: 10px;
  width: 100%;
  aspect-ratio: 1 / 1;
  border: 1px solid dodgerblue;
  border-radius: 0.5rem;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

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
