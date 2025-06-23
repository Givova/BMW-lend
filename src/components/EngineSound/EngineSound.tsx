import React, { useState, useRef } from 'react';
import styled, { keyframes, css } from 'styled-components';

// Основной компонент баннера
const SectionContainer = styled.section`
  padding: 0;
  position: relative;
  overflow: hidden;
  height: 80vh;
  background: black;

  @media (max-width: var(--breakpoint-md)) {
    height: 70vh;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  position: relative;
  z-index: 1;
`;

const EngineContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 50%);
    z-index: 2;
  }
`;

const EngineImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 0;
  box-shadow: none;
  
  @media (max-width: var(--breakpoint-md)) {
    object-fit: contain; /* На мобильных показываем мотоцикл полностью */
  }
  
  &:hover {
    transform: none;
    box-shadow: none;
  }
`;

const EqualizerContainer = styled.div<{ $visible: boolean }>`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: end;
  gap: 4px;
  height: 70px;
  width: 300px;
  opacity: ${props => props.$visible ? 1 : 0};
  transform: ${props => props.$visible ? 'translateX(-50%) translateY(0)' : 'translateX(-50%) translateY(15px)'};
  transition: all 0.6s ease-out;
  z-index: 5;

  @media (max-width: var(--breakpoint-md)) {
    height: 50px;
    width: 250px;
    gap: 3px;
    bottom: 15px;
  }
`;

// Создаем keyframes для разных высот
const createBarAnimation = (baseHeight: number, variation: number) => keyframes`
  0%, 100% { 
    height: ${baseHeight}px;
    opacity: 0.7;
  }
  25% { 
    height: ${baseHeight + variation * 0.8}px;
    opacity: 0.9;
  }
  50% { 
    height: ${baseHeight + variation}px;
    opacity: 1;
  }
  75% { 
    height: ${baseHeight + variation * 0.6}px;
    opacity: 0.8;
  }
`;

const EqualizerBar = styled.div<{ $index: number; $isPlaying: boolean }>`
  width: 5px;
  background: linear-gradient(to top, 
    rgba(255, 255, 255, 0.6) 0%,
    rgba(255, 255, 255, 0.9) 100%
  );
  border-radius: 2.5px;
  height: ${props => 15 + (props.$index % 3) * 10}px;
  flex: 1;
  max-width: 8px;
  box-shadow: 0 0 8px rgba(255, 255, 255, 0.3);
  
  ${props => props.$isPlaying && css`
    animation: ${createBarAnimation(
      15 + (props.$index % 4) * 8,
      20 + (props.$index % 3) * 15
    )} ${1.2 + (props.$index % 3) * 0.3}s ease-in-out infinite;
    animation-delay: ${props.$index * 0.08}s;
  `}

  @media (max-width: var(--breakpoint-md)) {
    width: 4px;
    border-radius: 2px;
    max-width: 6px;
  }
`;

const StartButton = styled.button<{ $isPlaying: boolean }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(255, 255, 255, 0.7);
  border: 2px solid rgba(255, 255, 255, 0.9);
  border-radius: 50%;
  width: 100px;
  height: 100px;
  color: var(--text-color);
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  z-index: 10;

  &:hover {
    transform: translate(-50%, -50%) scale(1.1);
    background: rgba(255, 255, 255, 0.9);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translate(-50%, -50%) scale(0.95);
  }

  @media (max-width: var(--breakpoint-md)) {
    width: 80px;
    height: 80px;
    font-size: 14px;
  }
`;

const EngineSound: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handlePlayPause = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
    } else {
      audioRef.current.play().catch(console.error);
      setIsPlaying(true);
    }
  };

  const handleAudioEnded = () => {
    setIsPlaying(false);
  };

  return (
    <SectionContainer>
      <Container>
        <EngineContainer>
          <EngineImage 
            src="/images/rrrr.png" 
            alt="Двигатель BMW"
          />
          
          {/* Столбчатый эквалайзер */}
          <EqualizerContainer $visible={isPlaying}>
            {Array.from({ length: 40 }, (_, index) => (
              <EqualizerBar
                key={index}
                $index={index}
                $isPlaying={isPlaying}
              />
            ))}
          </EqualizerContainer>
          
          <StartButton 
            $isPlaying={isPlaying}
            onClick={handlePlayPause}
            aria-label={isPlaying ? "Остановить звук" : "Запустить звук"}
          >
            {isPlaying ? 'СТОП' : 'СТАРТ'}
          </StartButton>
        </EngineContainer>

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