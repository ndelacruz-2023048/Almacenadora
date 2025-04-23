import { useState, useRef, useEffect } from 'react'
import { Button } from '../atomos/Button'
import { Icon } from "@iconify/react/dist/iconify.js";
import styled from 'styled-components';
import { FilterDropdown } from './FilterDropdown';

export const ButtonsSection = () => {

    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const filterRef = useRef(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (filterRef.current && !filterRef.current.contains(event.target)) {
                setIsFilterOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <Wrapper>
            <Button
                icon={<Icon icon="lets-icons:search-light" className='Icon'/>}
            />
            <Button
                text={'short'}
                icon={<Icon icon="tabler:arrows-double-nw-se" className='Icon2'/>}
            />
            <FilterButtonWrapper ref={filterRef}> 
                <Button
                    text={'Filters'}
                    icon={<Icon icon="ion:filter-outline" className='Icon'/>}
                    onClick={() => setIsFilterOpen(!isFilterOpen)}
                    active={isFilterOpen} // Highlight the button when the dropdown is open
                />
                {isFilterOpen && <FilterDropdown onClose={() => setIsFilterOpen(false)} />}
            </FilterButtonWrapper>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    background-color: #fff;
    width: 13em;
    height: auto;
    display: flex;
    .Icon{
        color: black;
        font-size: 20px;
        margin: 0 2px;
    }
    .Icon2{
        color: black;
        font-size: 20px;
        transform: rotate(45deg);
        margin: 0 2px;
    }
`

const FilterButtonWrapper = styled.div`
    position: relative; // To position the dropdown absolutely relative to this button
`;