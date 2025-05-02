import React from 'react';
import styled from 'styled-components';

export const Check = ({ logo, label, checked, onChange }) => {
  const [name, domain] = label.split("\n");
  return (
    <CheckboxContainer>
      {logo}
      <LabelContainer>
        <span>{name}</span>
        <Domain>{domain}</Domain>
      </LabelContainer>
    </CheckboxContainer>
  );
};

// Contenedor del checkbox
const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  position: relative; // Asegura que el input oculto esté posicionado correctamente
`;

const LabelContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Domain = styled.span`
  font-size: 12px;
  color: #7e7f8f;
`;