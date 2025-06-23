import React from 'react';
import styled from 'styled-components';

const ProcessSection = styled.section`
  padding: 4rem 0;
  background: white;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.875rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
  color: #1f2937;
`;

const InfographicContainer = styled.div`
  max-width: 72rem;
  margin: 0 auto;
`;

const RelativeWrapper = styled.div`
  position: relative;
`;

const ConnectingLine = styled.div`
  position: absolute;
  left: 50%;
  top: 2.5rem;
  bottom: 2.5rem;
  width: 0.125rem;
  background: rgba(59, 130, 246, 0.2);
  transform: translateX(-50%);
  z-index: 0;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const ProcessGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 4rem;
  }
`;

const ProcessCard = styled.div<{ $isHighlighted?: boolean; $isOffset?: boolean }>`
  background: ${props => props.$isHighlighted ? '#3b82f6' : 'white'};
  border-radius: 0.5rem;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06);
  border: 1px solid ${props => props.$isHighlighted ? '#60a5fa' : 'rgba(229, 231, 235, 1)'};
  position: relative;
  z-index: 10;
  transition: all 0.3s ease;
  color: ${props => props.$isHighlighted ? 'white' : '#1f2937'};

  ${props => props.$isOffset && `
    @media (min-width: 768px) {
      transform: translateY(4rem);
    }
  `}

  ${props => props.$isHighlighted && `
    @media (min-width: 768px) {
      grid-column: span 2;
      max-width: 28rem;
      margin: 3rem auto 0;
    }
  `}

  &:hover {
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    border-color: ${props => props.$isHighlighted ? '#60a5fa' : '#93c5fd'};

    ${props => props.$isHighlighted && `
      background: #2563eb;
    `}
  }
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const StepNumber = styled.div<{ $isHighlighted?: boolean }>`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: ${props => props.$isHighlighted ? 'white' : '#3b82f6'};
  color: ${props => props.$isHighlighted ? '#2563eb' : 'white'};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  font-weight: 700;
  margin-right: 1rem;
  flex-shrink: 0;
`;

const CardTitle = styled.h3<{ $isHighlighted?: boolean }>`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${props => props.$isHighlighted ? 'white' : '#1d4ed8'};
  margin: 0;
  padding-right: 2.25rem;
  text-wrap: balance;

  @media (max-width: 768px) {
    padding-right: 2.5rem;
  }
`;

const CardContent = styled.div`
  padding-left: 4rem;
`;

const CardDescription = styled.p<{ $isHighlighted?: boolean }>`
  color: ${props => props.$isHighlighted ? 'rgba(191, 219, 254, 1)' : '#6b7280'};
  line-height: 1.6;
  margin: 0;
`;

const CardLink = styled.a`
  color: #3b82f6;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

const CardIcon = styled.div<{ $isHighlighted?: boolean }>`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  color: ${props => props.$isHighlighted ? 'white' : '#3b82f6'};
  
  svg {
    width: 2.5rem;
    height: 2.5rem;
  }
`;

const Advantages: React.FC = () => {
  return (
    <ProcessSection id="advantages">
      <Container>
        <SectionTitle>
          Процесс покупки мотоцикла
        </SectionTitle>

        <InfographicContainer>
          {/* Инфографика с шагами процесса покупки */}
          <RelativeWrapper>
            {/* Соединительная линия */}
            <ConnectingLine />

            <ProcessGrid>
              {/* Шаг 1 */}
              <ProcessCard>
                <CardHeader>
                  <StepNumber>1</StepNumber>
                  <CardTitle>Оставьте заявку</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Оставьте заявку на сайте или позвоните нам по телефону.
                  </CardDescription>
                </CardContent>
                <CardIcon>
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </CardIcon>
              </ProcessCard>

              {/* Шаг 2 */}
              <ProcessCard $isOffset>
                <CardHeader>
                  <StepNumber>2</StepNumber>
                  <CardTitle>Бесплатная консультация</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Наш специалист поможет вам с выбором и ответит на все вопросы.
                  </CardDescription>
                </CardContent>
                <CardIcon>
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                </CardIcon>
              </ProcessCard>

              {/* Шаг 3 */}
              <ProcessCard>
                <CardHeader>
                  <StepNumber>3</StepNumber>
                  <CardTitle>Заключаем договор</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Заключаем договор с предоплатой всего 10%.{' '}
                    <CardLink
                      href="/placeholder/download/contract.pdf"
                      download
                    >
                      Скачать образец договора
                    </CardLink>
                  </CardDescription>
                </CardContent>
                <CardIcon>
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </CardIcon>
              </ProcessCard>

              {/* Шаг 4 */}
              <ProcessCard $isOffset>
                <CardHeader>
                  <StepNumber>4</StepNumber>
                  <CardTitle>Мы берем на себя все заботы</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Берём на себя доставку и все документы: Евросоюз, Россия, Таможня и регистрация.
                  </CardDescription>
                </CardContent>
                <CardIcon>
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                  </svg>
                </CardIcon>
              </ProcessCard>

              {/* Шаг 5 */}
              <ProcessCard $isHighlighted>
                <CardHeader>
                  <StepNumber $isHighlighted>5</StepNumber>
                  <CardTitle $isHighlighted>Получите ваш мотоцикл</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription $isHighlighted>
                    Всего 3 недели — и мотоцикл у вас!
                  </CardDescription>
                </CardContent>
              </ProcessCard>
            </ProcessGrid>
          </RelativeWrapper>
        </InfographicContainer>
      </Container>
    </ProcessSection>
  );
};

export default Advantages;