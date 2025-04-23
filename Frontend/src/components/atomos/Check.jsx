import React from 'react';
import styled from 'styled-components';

export const Check = ({ label, checked, onChange }) => {
  return (
    <CheckboxContainer>
      <HiddenCheckbox checked={checked} onChange={onChange} />
      <StyledCheckbox checked={checked} />
      {label && <Label>{label}</Label>}
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

// Estilo para el input checkbox (oculto)
const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  width: 24px;
  height: 24px;
  margin: 0;
  z-index: 1; // Asegura que el input sea clickable
`;

// Estilo para el checkbox personalizado
const StyledCheckbox = styled.div`
  width: 24px;
  height: 24px;
  background: ${({ checked }) => (checked ? '#fff' : '#fff')};
  border: 2px solid ${({ checked }) => (checked ? '#6b48ff' : '#d1d5db')};
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  // Icono de "check" cuando está marcado
  &::after {
    content: ${({ checked }) => (checked ? '"✔"' : '""')};
    color: #6b48ff;
    font-size: 16px;
  }
`;

// Estilo para el label
const Label = styled.label`
  font-size: 16px;
  color: #333;
`;
