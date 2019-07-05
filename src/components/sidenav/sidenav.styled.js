import styled from 'styled-components';

import { Nav, NavItem, Button } from 'reactstrap';

export const StyledSidenav = styled.div`
    position: absolute;
    z-index: 30;
    height: 100vh;
    background: #000;
    color: #fff;
    margin-left: 0;
    transition: all 0.3s;
    width: 3.5rem;
    max-width: 250px;
    overflow: hidden;
    
    &[close] {
        margin-left: -52px;
    }
    &.expand {
        width: 250px;
    }
`;

export const StyledIcon = styled.span`
    color: #7D7D7D;
    font-size: 1.5rem;
    
`;

export const StyledNav = styled(Nav)`
    top: 25%;
    position: relative;
`;

export const StyledNavItem = styled(NavItem)`
    white-space: nowrap;
    padding: 10px 0;
`;

export const StyledButton = styled(Button)`
    background-color: transparent;
    color: white;
    border: 0;
    border-radius: 0;
    padding: .5rem 1rem;
    box-shadow: none !important;
    width: 100%;
    text-align: left;
        
        &:hover,
        &:focus {
            color: #7D7D7D !important;
            background-color: #FFF !important;
        }
        &.active {
            color: #FFF;
            border-left: 2px solid #FFF;
            background-color: transparent;
        }
`;

export const StyledSpanName = styled.span`
    padding: 0 15px;
    color: #7D7D7D;
`;

