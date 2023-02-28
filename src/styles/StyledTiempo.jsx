import styled from "styled-components";

export const Contenedor = styled.div`
    width: 400px;
    vertical-align: middle;
    white-space: nowrap;
    position: relative;

    input#buscador {
        width: 400px;
        height: 50px;
        background: #ebebeb;
        border: none;
        font-size: 12pt;
        float: left;
        color: #63717f;
        padding-left: 45px;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        border-radius: 5px;
        transition-duration: 0.3s;
    }

    input#buscador::-webkit-input-placeholder {
        color: #65737e; 
    }

    #buscador::-webkit-search-cancel-button {
        position:relative;
        right:5px; 
    }

    input#buscador:focus, input#buscador:hover, input#buscador:active {
        outline:none;
        background: #ffffff;
        border:1px solid rgb(220,220,220);
    }

    @media only screen and (max-width: 900px) {
        width: 310px;

        input#buscador {
            width: 310px;
        }
    }

    @media only screen and (max-width: 600px) {
        width: 270px;

        input#buscador {
            width: 270px;
        }
    }
`

export const BuscadorOpcion = styled.div`
    width: 78%;
    height: 1px;
    justify-content: center;
    margin-top: -20px;

    @media only screen and (max-width: 900px){
        width: 310px;
    }
    
    @media only screen and (max-width: 600px) {
        width: 270px;
    }
`

export const BuscadorOpciones = styled.div`
    width: 400px;
    text-align: left;
    padding: 15px;
    cursor: pointer;
    font-size: 1em;
    font-family: 'Lucida Sans';
    margin: auto;
    border-radius: 2px;
    align-self: start; 
    position: relative;
    background: rgba(250,250,250,0.8);
    z-index: 2;

    &:hover {
        background: rgba(250,250,250,1);
    }

    &:active {
        background: rgba(250,250,250,1);
    }

    &:focus {
        background: rgba(250,250,250,1);
    }
    
    @media only screen and (max-width: 900px) {
        width: 100%
    }
`
