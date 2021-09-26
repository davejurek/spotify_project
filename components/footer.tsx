import styled from "styled-components";

const FooterComponent = styled.footer`
    height: 91px;
    width: 100vw;
    background-color: #181818;
    display: flex;
    justify-content: center;
    align-items: center;
`;

// export default Footer;


export default function Footer(){
    return (
        <FooterComponent>
            <h1>Teste</h1>
        </FooterComponent>
    );
}