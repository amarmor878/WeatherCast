import styled from "styled-components";

export const PronPrinci = styled.div`
    display: inline-block;
    font-family: 'Akshar';
    padding: 0px 9px 0px 9px;
    border-left: 1px solid rgb(88, 88, 222);
    border-right: 1px solid rgb(88, 88, 222);
`

export const PronTemp = styled.h4`
    text-align: center;
`

export const PronLluvia = styled.h4`
    text-align: center;
    margin: 15px;
`

export const PronViento = styled.h4`
    text-align: center;
`

export const PronVel = styled.h4`
    text-align: center;

    span {
        font-size: var(--sizeForecastVelocity);
    }
`

export const PronHora = styled.h4`
    text-align: center;
`

export const PronGrupo = styled.div`
    display: flex;
    overflow-x: scroll;
    overflow-y: hidden;

    
`
