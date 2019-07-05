import React, {Component} from 'react';

import { Button } from 'reactstrap';
import classNames from 'classnames';

import { MdPlayArrow } from 'react-icons/md';
import { StyledHighlight } from './highlight.styled';

import logoGP from '../../assets/img/globoplay.svg';
 
class Highlight extends Component {

    
    render() {
        return (
            <StyledHighlight id="highlight"
                backImage={require(`../../assets/img/highlight/${this.props.content.backgroundImg}`)}
                style={{height: window.innerHeight}}
            >
                <svg src={logoGP}/>
                <div className="wrapper">
                    <div className="info">
                        <p>{this.props.content.episodio}</p>
                        <form name="highlight" className={classNames({'hidden': this.props.hiddenButtons})}>
                            <Button outline size="md">
                                <MdPlayArrow />
                                Assista
                            </Button>
                            <Button outline size="md">
                                Veja mais
                            </Button>
                        </form>
                    </div>
                    <div className="overlay"></div>
                </div>
            </StyledHighlight>
        );
    }
}
export default Highlight;