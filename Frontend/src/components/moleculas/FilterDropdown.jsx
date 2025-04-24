// FilterDropdown.jsx
import React, { useState } from 'react';
import styled from 'styled-components';
import { Icon } from '@iconify/react/dist/iconify.js';

export const FilterDropdown = ({ onClose }) => {
    const [dateFrom, setDateFrom] = useState('2024-02-12');
    const [dateTo, setDateTo] = useState('2024-02-12');
    const [activityType, setActivityType] = useState('All time');
    const [status, setStatus] = useState('');
    const [customer, setCustomer] = useState('');
    const [area, setArea] = useState('The Arctic');

    const handleResetAll = () => {
        setDateFrom('2024-02-12');
        setDateTo('2024-02-12');
        setActivityType('All time');
        setStatus('');
        setCustomer('');
        setArea('The Arctic');
    };

    const handleApply = () => {
        // Here you would apply the filters (e.g., update a parent state or make an API call)
        onClose(); // Close the dropdown after applying
    };

    return (
        <DropdownWrapper>
            <DropdownHeader>
                <Title>Filter</Title>
                <CloseButton onClick={onClose}>
                    <Icon icon="mdi:close" />
                </CloseButton>
            </DropdownHeader>

            <Section>
                <Label>Date range</Label>
                <DateRange>
                    <DateInput>
                        <span>From</span>
                        <input
                            type="date"
                            value={dateFrom}
                            onChange={(e) => setDateFrom(e.target.value)}
                        />
                    </DateInput>
                    <DateInput>
                        <span>To</span>
                        <input
                            type="date"
                            value={dateTo}
                            onChange={(e) => setDateTo(e.target.value)}
                        />
                    </DateInput>
                    <ResetLink onClick={() => { setDateFrom('2024-02-12'); setDateTo('2024-02-12'); }}>
                        Reset
                    </ResetLink>
                </DateRange>
            </Section>

            <Section>
                <Label>Activity type</Label>
                <SelectWrapper>
                    <select value={activityType} onChange={(e) => setActivityType(e.target.value)}>
                        <option>All time</option>
                        {/* Add more options as needed */}
                    </select>
                    <ResetLink onClick={() => setActivityType('All time')}>Reset</ResetLink>
                </SelectWrapper>
            </Section>

            <Section>
                <Label>Status</Label>
                <SelectWrapper>
                    <select value={status} onChange={(e) => setStatus(e.target.value)}>
                        <option value="">Select status</option>
                        {/* Add more options as needed */}
                    </select>
                    <ResetLink onClick={() => setStatus('')}>Reset</ResetLink>
                </SelectWrapper>
            </Section>

            <Section>
                <Label>Customer</Label>
                <SelectWrapper>
                    <select value={customer} onChange={(e) => setCustomer(e.target.value)}>
                        <option value="">Select customer</option>
                        {/* Add more options as needed */}
                    </select>
                    <ResetLink onClick={() => setCustomer('')}>Reset</ResetLink>
                </SelectWrapper>
            </Section>

            <Section>
                <Label>Area</Label>
                <SelectWrapper>
                    <select value={area} onChange={(e) => setArea(e.target.value)}>
                        <option>The Arctic</option>
                        {/* Add more options as needed */}
                    </select>
                    <ResetLink onClick={() => setArea('The Arctic')}>Reset</ResetLink>
                </SelectWrapper>
            </Section>

            <ButtonGroup>
                <ResetAllButton onClick={handleResetAll}>Reset all</ResetAllButton>
                <ApplyButton onClick={handleApply}>Apply</ApplyButton>
            </ButtonGroup>
        </DropdownWrapper>
    );
};

const DropdownWrapper = styled.div`
    position: absolute;
    top: 50px;
    right: 0;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    width: auto;
    padding: 16px;
    z-index: 1000;
    opacity: 0;
    transform: translateY(-10px);
    animation: fadeIn 0.2s ease forwards;

    @keyframes fadeIn {
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;

const DropdownHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
`;

const Title = styled.h3`
    font-size: 16px;
    font-weight: 600;
    margin: 0;
`;

const CloseButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    padding: 4px;
    svg {
        width: 16px;
        height: 16px;
        color: #666;
    }
`;

const Section = styled.div`
    margin-bottom: 16px;
`;

const Label = styled.label`
    display: block;
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 8px;
`;

const DateRange = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;

const DateInput = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    span {
        font-size: 12px;
        color: #666;
    }
    input {
        padding: 8px;
        border: 1px solid #ddd;
        border-radius: 4px;
        font-size: 14px;
    }
`;

const SelectWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    select {
        flex: 1;
        padding: 8px;
        border: 1px solid #ddd;
        border-radius: 4px;
        font-size: 14px;
    }
`;

const ResetLink = styled.button`
    background: none;
    border: none;
    color: #007bff;
    font-size: 12px;
    cursor: pointer;
`;

const ButtonGroup = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 8px;
`;

const ResetAllButton = styled.button`
    flex: 1;
    padding: 8px;
    background-color: #f5f5f5;
    border: none;
    border-radius: 4px;
    font-size: 14px;
    cursor: pointer;
`;

const ApplyButton = styled.button`
    flex: 1;
    padding: 8px;
    background-color: #6b48ff;
    color: #fff;
    border: none;
    border-radius: 4px;
    font-size: 14px;
    cursor: pointer;
`;