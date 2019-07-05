import React, { Component } from 'react';

import classNames from 'classnames';
import { menuList } from '../../utils/menuList';

import { 
    StyledSidenav, 
    StyledIcon,
    StyledSpanName,
    StyledButton,
    StyledNav,
    StyledNavItem
} from './sidenav.styled';

class Sidenav extends Component {

    constructor(props) {
        super(props);
        this.state = {
            menuActive: false
        };

       this.enterFocus = this.onFocus.bind(true);
        this.enterBlur = this.onBlur.bind(true);
    }

    onFocus = () => {
        this.setState({
            menuActive: true
        });
    }

    onBlur = () => {
        this.setState({
            menuActive: false
        });
    }

    showHideMenu(value) {
        value.parseInt();
        let el = document.getElementById('sidenav');

        if(value) {
            return el.setAttribute('close', true)
        }

        el.removeAttribute('close')
        
        
    }
 
    render() {
        return (
            <StyledSidenav id="sidenav" className={classNames(
                    {
                        'sidenav-menu': true,
                        'expand': this.state.menuActive
                    }
                )}>
                <StyledNav vertical>
                    {menuList.map(menu =>
                        <StyledNavItem key={menu.id}>
                            <form name="sidenav-menu">
                                <StyledButton onFocus={this.enterFocus} onBlur={this.enterBlur}>
                                    <StyledIcon>{menu.icon}</StyledIcon>
                                    <StyledSpanName>{menu.nome}</StyledSpanName>
                                </StyledButton>
                            </form>
                        </StyledNavItem>
                    )}
                </StyledNav>
            </StyledSidenav>
        );
    }
}
export default Sidenav