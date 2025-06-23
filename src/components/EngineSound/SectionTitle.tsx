import React from 'react';
import styled from 'styled-components';

const TitleSection = styled.section`
  padding: 3rem 0 2rem 0;
  background: white;
  text-align: center;
  scroll-margin-top: 50px;
`;

const TitleContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const SectionTitleText = styled.h2`
  color: #1f2937;
  font-size: 1.875rem;
  font-weight: 700;
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const BMWText = styled.span`
  color: #3b82f6;
`;

const SectionTitle: React.FC = () => {
  return (
    <TitleSection id="engine-sound">
      <TitleContainer>
        <SectionTitleText>
          Почувствуй мощь <BMWText>BMW</BMWText>
        </SectionTitleText>
      </TitleContainer>
    </TitleSection>
  );
};

export default SectionTitle; 