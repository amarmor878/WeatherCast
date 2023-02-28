import styled, { createGlobalStyle } from "styled-components";

export const GlobalFonts = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Akshar:wght@300&family=Montserrat:wght@100&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300&display=swap');

  body {
    font-family: 'Quicksand', sans-serif;
  }
`;

export const TCStyle = styled.div`
  height: 100%;
  width: 80%;
  margin:0;
  padding: 20px;
  padding-bottom: 0px;
`;

export const TCImgFav = styled.img`
  position: absolute;
  width: 25px;
  top: 10px;
  left: 10px;
`;

export const TCPrincipal = styled.div`
  display: flex;
  align-items: center;
    @media only screen and (max-width: 900px) {
        display: block;
        align-items: center;
    }
`;

export const TCNombre = styled.h2`
  font-family: 'Montserrat', sans-serif;
  display: inline-block;
    @media only screen and (max-width: 900px) {
        display: block;
    }
`;

export const TCTempActual = styled.h4`
  font-family: 'Akshar', sans-serif;
  display: inline-block;
  margin-left: 20px;
    @media only screen and (max-width: 900px) {
        display: inline-block;
        margin-left: 20px;
    }
`;

export const TCTemp = styled.div`
  display: inline-block;
  margin-left: 15px;
    @media only screen and (max-width: 900px) {
        display: inline-block;
        margin-left: 15px;
    }
`;

export const TCTempMax = styled.h4`
  font-family: 'Akshar', sans-serif;
  color:rgb(242, 64, 64);
`;

export const TCTempMin = styled.h4`
  font-family: 'Akshar', sans-serif;
  color:rgb(87, 87, 211);
`;

export const TCVientoLluvia = styled.div`
  display: inline-block;
  margin-left: 15px;
`;

export const TCViento = styled.h4`
  font-family: 'Akshar', sans-serif;
`;

export const TCLluvia = styled.h4`
  font-family: 'Akshar', sans-serif;
`;

export const TCDescrip = styled.h2`
  font-family: 'Quicksand', sans-serif;
  display: inline-block;
  color: white;
  margin-left: 30px;
`;

export const PronTitulo = styled.h2`
  font-family: 'Montserrat', sans-serif;
  margin-top: 20px;
  margin-bottom: 20px;
`;
