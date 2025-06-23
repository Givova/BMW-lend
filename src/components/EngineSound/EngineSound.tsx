import React, { useState, useRef } from 'react';
import styled from 'styled-components';

const SectionContainer = styled.section`
  background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%);
  padding: var(--spacing-3xl) 0;
  position: relative;
  overflow: hidden;

  @media (max-width: var(--breakpoint-md)) {
    padding: var(--spacing-2xl) 0;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
  position: relative;
`;

const Title = styled.h2`
  color: var(--light-color);
  text-align: center;
  margin-bottom: var(--spacing-2xl);
  font-size: var(--font-size-3xl);
  
  @media (max-width: var(--breakpoint-md)) {
    font-size: var(--font-size-2xl);
  }
`;

const EngineContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: var(--spacing-xl);
`;

const EngineImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
`;

const StartButton = styled.button<{ $isPlaying: boolean }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${props => props.$isPlaying ? 
    'rgba(255, 59, 48, 0.8)' : 
    'rgba(52, 199, 89, 0.8)'
  };
  border: 2px solid ${props => props.$isPlaying ? '#ff3b30' : '#34c759'};
  border-radius: 50%;
  width: 80px;
  height: 80px;
  color: white;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: translate(-50%, -50%) scale(1.1);
    background: ${props => props.$isPlaying ? 
      'rgba(255, 59, 48, 0.9)' : 
      'rgba(52, 199, 89, 0.9)'
    };
  }

  &:active {
    transform: translate(-50%, -50%) scale(0.95);
  }

  @media (max-width: var(--breakpoint-md)) {
    width: 60px;
    height: 60px;
    font-size: 16px;
  }
`;

const VisualizerContainer = styled.div<{ $visible: boolean }>`
  height: ${props => props.$visible ? '120px' : '0'};
  overflow: hidden;
  transition: height 0.5s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(25, 109, 255, 0.1);
  border-radius: 12px;
  margin-top: var(--spacing-lg);
`;

const AudioBar = styled.div<{ $height: number; $delay: number }>`
  width: 4px;
  background: linear-gradient(to top, #196dff, #00ff88);
  margin: 0 2px;
  border-radius: 2px;
  height: ${props => props.$height}px;
  animation: ${props => props.$height > 5 ? 'pulse 0.5s ease-in-out infinite' : 'none'};
  animation-delay: ${props => props.$delay}ms;

  @keyframes pulse {
    0%, 100% { opacity: 0.7; }
    50% { opacity: 1; }
  }
`;

const AudioBarsContainer = styled.div`
  display: flex;
  align-items: end;
  height: 80px;
  gap: 1px;
`;

const EngineSound: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioData, setAudioData] = useState<number[]>(new Array(50).fill(0));
  const audioRef = useRef<HTMLAudioElement>(null);
  const animationRef = useRef<number>();

  const generateRandomBars = () => {
    const newData = Array.from({ length: 50 }, () => Math.random() * 60 + 10);
    setAudioData(newData);
  };

  const startVisualization = () => {
    const animate = () => {
      generateRandomBars();
      animationRef.current = requestAnimationFrame(animate);
    };
    animate();
  };

  const stopVisualization = () => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
    setAudioData(new Array(50).fill(0));
  };

  const handlePlayPause = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
      stopVisualization();
    } else {
      audioRef.current.play();
      setIsPlaying(true);
      startVisualization();
    }
  };

  const handleAudioEnded = () => {
    setIsPlaying(false);
    stopVisualization();
  };

  return (
    <SectionContainer>
      <Container>
        <Title>Почувствуй мощь BMW</Title>
        
        <EngineContainer>
          <EngineImage 
            src="/images/rrr.png" 
            alt="BMW Engine"
          />
          <StartButton 
            $isPlaying={isPlaying}
            onClick={handlePlayPause}
            aria-label={isPlaying ? "Остановить звук" : "Запустить звук"}
          >
            {isPlaying ? '⏸' : '▶'}
          </StartButton>
        </EngineContainer>

        <VisualizerContainer $visible={isPlaying}>
          <AudioBarsContainer>
            {audioData.map((height, index) => (
              <AudioBar
                key={index}
                $height={height}
                $delay={index * 20}
              />
            ))}
          </AudioBarsContainer>
        </VisualizerContainer>

        <audio
          ref={audioRef}
          onEnded={handleAudioEnded}
          preload="metadata"
        >
          <source src="/images/mototsikl-suzuki-gsx-r-1100-zavoditsya-i-gazuet-28994.mp3" type="audio/mpeg" />
          Ваш браузер не поддерживает аудио элемент.
        </audio>
      </Container>
    </SectionContainer>
  );
};

export default EngineSound; 