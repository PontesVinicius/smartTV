import styled from 'styled-components'

import { MdPlayArrow } from 'react-icons/md'

export const RailStyled = styled.div`
    position: absolute;
    bottom: 0;
    height: 382px;
    width: 100%;
    box-shadow: 0 -270px 40px rgba(0, 0, 0, .95) inset;
    > .wrapper {
        //overflow: hidden;
        height: 100%;
        position: relative;

        > .row {
            box-sizing: border-box;
            position: absolute;
            top: 0;
            //bottom: 0;
            width: 100%;
            height: 100%;
            //height: 350px;
            //overflow-y: hidden;
            //overflow-x: hidden;
            //scroll-behavior: smooth;
            z-index: 3;
            margin: 0;
            //background-color: #000;
            transition: all 0.5s;

            >form {
                position: relative;
                //overflow: hidden;
                //scroll-behavior: smooth;
                height: 200px;
                width: 100%;
                transition: all 0.5s;
                padding: 30px 0 0 0;
                left: 0px;

                >#markY,
                >.markX{
                    position: absolute;
                    width: 300px;
                    height: 150px;
                    border: 2px solid #FFF;
                    transition: all 0.5s;
                    z-index: 5;
                    left: 66px;
                    top: 30px;
                }
                >.markX {
                    display: none;
                }
                >h5 {
                    color: #FFF;
                    position: fixed;
                    left: 66px;
                    z-index: 1;
                    margin: -35px 0 0 0;
                    opacity: 0;
                    transition: opacity .5s;
                }
                &[name=rail-focused],
                &[name=rail-out] {
                    >h5,
                    >.col {
                        opacity: .99;
                    }
                    &+[name=rail] {
                        >h5,
                        >.col {
                            opacity: .99;
                        }
                    }
                }

                >.col {
                    width: 100%;
                    opacity: 0;
                    transition: opacity .5s;
                    > div {
                        position: relative;
                        top: -5px;
                    }
                    > ul {
                        //padding: 0 97px;
                        padding: 0 0 0 51px;
                        margin-bottom: 0;
                        //transition: $duration;
                        //transform: translate3d($moveLeft, 0, 0);
                        
                        > li {
                            display: table-cell;
                            transition: all 0.5s;
                            transform-origin: center left;
                            &:hover,
                            &[focused=true] {
                                //transform: scale($growFactor);
                                & ~ li {
                                    //transform: translate3d($moveRight, 0, 0);
                                }
                            }
                            > button {
                                background-color: transparent;
                                border: 0;
                                padding: 0;
                                box-shadow: none;
                        }
                    }
                }
            }
        }
    }}
`

export const ThumbStyled = styled.div`
    background-image: url('${props => props.imageBack}');
    position: relative;
    background-position: center center;
    background-size: cover;
    margin-right: 5px;
    width: 300px;
    height: 150px;
    object-fit: cover;
`;

export const PlayerStyled = styled(MdPlayArrow)`
    color: white;
    width: 17rem;
    height: 10rem;
    transition-duration: .5s;
    display: flex;
    `
