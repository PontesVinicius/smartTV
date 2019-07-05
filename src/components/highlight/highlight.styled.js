import styled from 'styled-components';


export const StyledHighlight = styled.div`
    background-image: url('${props => props.backImage}');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center right;
    width: 100%;
    display: block;
    object-fit: cover;
    position: relative;
    overflow: hidden;
    >img {
        position: absolute;
        right: 0;
        z-index: 5;
        padding: 20px;
        width: 150px;
    }
    >.wrapper {
        padding: 0 0 0 68px;
        width: 40%;
        min-width: 500px;
        height: 100%;
        vertical-align: middle;
        position: relative;
        >.info {
            position: relative;
            top: 5%;
            z-index: 3;
            >img {
                height: 80px;
            }
            >p{
                color: #DDD;
                margin-bottom: 2.8rem;
            }
            >form {
                &.hidden {
                    >button {
                        color: transparent;
                        border: 0;
                        left: -1000px;
                        position: relative;
                    }
                }
                >button {
                    transition: .5s all;
                    color: #FFF;
                    border-color: #FFF;
                    &:focus,
                    &:hover {
                        transform: scale(1.1);
                        background-color: #FFF;
                        border-color: #FFF;
                        color: #666;
                        box-shadow: none;
                    }
                    >svg {
                        margin-right: 5px;
                    }
                    &:last-child {
                        margin-left: 10px;
                    }
                }
            }
        }
        >.overlay {
            width: 100%;
            height: 100%;
            position: absolute;
            display: block;
            background-color: rgba(0, 0, 0, .80);
            z-index: 2;
            top: -45px;
            left: -60px;
            filter: blur(45px);
        }
    }
    > #movie {
        position: absolute;
        top: 0;
        left: 0;
        display: none;
        > video {
            object-fit: cover;
        }
    }
`