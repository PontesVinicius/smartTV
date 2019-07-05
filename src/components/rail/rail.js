import React, { Component } from 'react';

import { Row, Col, Button } from 'reactstrap';

import Highlight from '../highlight/highlight';

import { RailStyled, ThumbStyled, PlayerStyled } from './rail.styled';
import jsonContent from '../../utils/content.json';

class Rail extends Component {

    constructor(props) {
        super(props);

        this.content = jsonContent;
        this.contentHighlightActive = {};

        this.enterBlur = this.onBlur.bind(this)
        this.eventKeyCode = 0;
        this.hiddenButtons = false;
    }

    componentWillMount() {
        this.contentHighlightActive = this.content[0].itens[3];
        this.content.forEach((content) => {
            content.itens=content.itens.sort(function() { return 0.20 - Math.random() });
        });
        this.contentHighlightActive['itemFocus'] = true;

        document.addEventListener('keyup', e => {
            if(e.keyCode >= 37 && e.keyCode <= 40)
                this.eventKeyCode=e.keyCode;
        });
    }

    enterFocus = (item) => {
        return this.onFocus.bind(true, item);
    }

    eventPath(evt) {
        var path = (evt.composedPath && evt.composedPath()) || evt.path,
            target = evt.target;
    
        if (path != null) {
            return (path.indexOf(window) < 0) ? path.concat(window) : path;
        }
    
        if (target === window) {
            return [window];
        }
    
        function getParents(node, memo) {
            memo = memo || [];
            var parentNode = node.parentNode;
    
            if (!parentNode) {
                return memo;
            }
            else {
                return getParents(parentNode, memo.concat(parentNode));
            }
        }
    
        return [target].concat(getParents(target), window);
    }

    onFocus = (item, event) => {
        
        this.hiddenButtons = true;
        this.forceUpdate();

        this.contentHighlightActive = item;

        if(this.contentHighlightActive['itemFocus'] !== null)
            this.contentHighlightActive['itemFocus'] = true;

        if(document.forms['rail-focused'])
            document.forms['rail-focused'].setAttribute('name', 'rail');
        this.eventPath(event.nativeEvent)[4].setAttribute('name', 'rail-focused');

        let markY = document.getElementById('markY');
        if(markY.style.display === 'none')
            markY.style.display='block';
    }

    onBlur = (event) => {
        if(this.contentHighlightActive['itemFocus'] === null)
            this.contentHighlightActive['itemFocus'] = true;

        let el = event.nativeEvent.srcElement;
        let elmarkX = this.eventPath(event.nativeEvent)[4].children[2];
        let markY = document.getElementById('markY');
        let keyCode = this.eventKeyCode;
        
        if(keyCode === 37 || keyCode === 39) {
            let elX = el.parentElement[(keyCode === 39) ? 'nextSibling' : 'previousSibling'];
            if(elX) {
                elmarkX.style.left = (elX.offsetLeft)+'px';

                let calcEixoX = parseInt('-'+(elX.offsetLeft-66));
                this.eventPath(event.nativeEvent)[4].style.left = ((!isNaN(calcEixoX)) ? calcEixoX : 0) + 'px';
            }else{
                markY.style.display='none';
                this.contentHighlightActive['itemFocus'] = null;
            }
        }
        if(keyCode === 38 || keyCode === 40) {
            let elY = this.eventPath(event.nativeEvent)[4][(keyCode === 40) ? 'nextSibling' : 'previousSibling'];
            if(elY) {
                markY.style.top = (elY.offsetTop+30)+'px';
                this.eventPath(event.nativeEvent)[5].style.top = '-'+(elY.offsetTop)+'px';
            }else{
                markY.style.display='none';
                this.hiddenButtons = false;
                this.contentHighlightActive = this.content[0].itens[3];
                this.forceUpdate();
            }
        }
    }

    render() {
        return (
            <>
                <Highlight 
                    content={this.contentHighlightActive} 
                    hiddenButtons={this.hiddenButtons}
                 />
                <RailStyled id="rail">
                    <div className="wrapper">
                        <Row className="rol-rail">
                            {this.content.map((content, i1) =>
                            <form key={i1+1} name={(i1 === 0) ? 'rail-out' : 'rail'} data-y={i1}>
                                <h5>{content.categoria}</h5>
                                <Col className="col" md="12">
                                    <ul>
                                    {content.itens.map((item, i2) =>
                                        <li key={(i1+1)*10*i2}>
                                            <Button data-x={i2} onFocus={this.enterFocus(item)} onBlur={this.enterBlur}>
                                                <ThumbStyled 
                                                  imageBack={require(`../../assets/img/highlight/${item.imgThumb}`)}
                                                >
                                                <PlayerStyled />
                                                </ThumbStyled>
                                            </Button>
                                        </li>
                                    )}
                                    </ul>
                                </Col>
                                {(i1 === 0) ? <div id="markY" style={{display: 'none'}}></div> : ''}
                                <div className="markX"></div>
                            </form>
                            )}
                        </Row>
                    </div>
                </RailStyled>
            </>
        );
    }
}
export default Rail;