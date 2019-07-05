import React, {Component } from 'react';

import Sidenav from './components/sidenav/sidenav';
import Rail from './components/rail/rail';

import { StyledView } from './App.styled'

export default class App extends Component {
  constructor(props) {
    super(props);

    this.formPosition = 5;
    this.formChildPosition = 0;
  }

  componentDidMount() {
    window.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      return;
    });
    document.addEventListener('keypress', e => {
      e.preventDefault();
    });
    document.addEventListener('keyup', e => {
      if(e.keyCode >= 37 && e.keyCode <= 40)
        this.runner(e.keyCode);
    });
  }

  runner(keyCode) {
    let keyUp = 38;
    let keyDown = 40;
    let keyLeft = 37;
    let keyRight = 39;
    let forms = document.forms;
    let nameForm = forms[this.formPosition].getAttribute('name');

    if(keyCode === keyRight || keyCode === keyLeft) {
      let pos = ((keyCode === keyRight) ? (this.formChildPosition+1) : (this.formChildPosition-1));
      if(forms[this.formPosition].elements[pos]) {
        this.formChildPosition=pos;
      }else if(keyCode === keyLeft && nameForm !== "sidenav-menu") {
        this.formPosition=1;
        this.formChildPosition=0;
      }else if(keyCode === keyRight) {
        if(nameForm === "sidenav-menu") {
          this.formPosition=(
            (forms['highlight'].getAttribute('class') === 'hidden') 
            ? (
                (forms['rail-focused']) ? parseInt(forms['rail-focused'].getAttribute('data-y'))+6 : 6
              ) 
            : 5);
          this.formChildPosition=0;
        }
      }
    }else if(keyCode === keyDown || keyCode === keyUp) {
      let pos = ((keyCode === keyDown) ? (this.formPosition+1) : (this.formPosition-1));
      // eslint-disable-next-line
      if(forms[pos] && nameForm !== "destaque"
      // eslint-disable-next-line
      || nameForm === "destaque" && keyCode !== keyUp) {
        let el = forms[this.formPosition].parentElement.nextSibling;

        if(nameForm === "sidenav-menu"
        && keyCode === keyDown
        && !el) {
          this.formChildPosition=0;
        }else{
          this.formPosition=pos;
          this.formChildPosition=0;
        }
      }

      let elrailFocused = forms['rail-focused'];
      if(elrailFocused) {

        let vEixorail = elrailFocused.offsetLeft;
        let childrens = elrailFocused.getElementsByTagName('li');
        let p1 = (vEixorail === 0) ? 0 : (vEixorail*-1);

        for(let i=0;i<childrens.length;i++) {
          let p2 = (i === 0) ? 300 : ((i+1)*300);
            
          if(p1<=p2) {
            elrailFocused.setAttribute('data-xSel', String(i));
            break;
          }
        }
      }
    }

    let formtemOccurrence = 
    forms[this.formPosition];

    if(formtemOccurrence) {
      let railLastItemOccurrence = parseInt(formtemOccurrence.getAttribute('data-xSel'));
      if(railLastItemOccurrence>0 && !isNaN(railLastItemOccurrence)) {
        this.formChildPosition = parseInt(railLastItemOccurrence);
        formtemOccurrence.setAttribute('data-xSel', '0');
      }
    }

    forms[this.formPosition].elements[this.formChildPosition].focus();
  }

  render() {
    return (
        <StyledView>
          
            <Sidenav />
            <Rail />
          
        </StyledView>
      
    )
  }
}
