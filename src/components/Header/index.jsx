import styled from "styled-components";
import logo from "../../assets/Logo/logo.png";
import { Link, NavLink } from "react-router-dom";
import colors from "../../utils/style/styles"
import Selection from "./selectbox";
import {  useState } from "react";
import { useRef } from "react";
// import { country } from "./country";

const StyledNavBar = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: absolute;
    padding-right: 20px;
    width: 100%;
        right: 0px;
        top: 0px;
    background-color: ${colors.secondary};
`
const StyledImage = styled.img`
    width: 100px;
    height: 100px;
    margin-left: 20px;
`
const StyledDiv = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 30px;
    margin-right: 20px;
    padding-right: 80px;
    gap: 30px;
`
const StyledLink = styled(NavLink)`
    text-decoration: none;
    color: ${colors.third};
`
const StyledText = styled(Link)`
    display: flex;
    flex-direction: row;
    margin-top: 15px;
    position: relative;
    text-decoration: none;
    height: 22px;
`
const StyledButton = styled.p`
    display: flex;
    gap: 20px;
    color: ${colors.third};
    margin-top: 0px;
    margin-bottom: 40px;
`
const Arrow = styled.p`
    position: absolute;
        bottom: -8px;
        right:  -15px;
    margin-bottom: 10px;
    transform: rotate(180deg);
`

function Header(){

    const selectionRef = useRef(null)
    const handleBlur = (event) => {
        if (selectionRef.current && !selectionRef.current.contains(event.relatedTarget)) {
            setShow(false);
        }
    }

    const [show, setShow] = useState(false);
    const [selectname, setSelectedname] = useState("Cameroun");
    const [selectflag, setSelectedflag] = useState("/src/assets/flag/cameroun.webp");
    const handleSelect = (name,flag) => {
        setSelectedname(name);
        setSelectedflag(flag);
    }

    return show ? (
        <StyledNavBar>
            <StyledImage src={logo} alt="the_taxi"/>
            <StyledDiv>
                <StyledLink to={"/"}>
                    <p>Acceuil</p>
                </StyledLink>

                <StyledLink to={"/login"}>
                    <p>Connexion</p>
                </StyledLink>

                <StyledLink to={"join"}>
                    <p>Rejoignez-nous</p>
                </StyledLink>

                <StyledLink to={"help"}>
                    <p>Aide</p>
                </StyledLink>
                <StyledText 
                    onClick={() => {show ? setShow(false) : setShow(true);}}
                    onBlur={handleBlur}
                >
                    <StyledButton><img src={selectflag} alt="" width={"30px"} height={"20px"}/> {selectname}</StyledButton>
                    <Arrow>^</Arrow>
                </StyledText>
                <div ref={selectionRef}>
                    <Selection onSelect={handleSelect} setShow={setShow}/>
                </div>

            </StyledDiv>
        </StyledNavBar>
    ) : (
        <StyledNavBar>
            <StyledImage src={logo} alt="the_taxi"/>
            <StyledDiv>
                <StyledLink to={"/"}>
                    <p>Acceuil</p>
                </StyledLink>

                <StyledLink to={"/login"}>
                    <p>Connexion</p>
                </StyledLink>

                <StyledLink to={"join"}>
                    <p>Rejoignez-nous</p>
                </StyledLink>

                <StyledLink to={"help"}>
                    <p>Aide</p>
                </StyledLink>
                <StyledText 
                    onClick={() => {show ? setShow(false) : setShow(true);}}
                >
                    <StyledButton><img src={selectflag} alt="" width={"30px"} height={"20px"}/> {selectname}</StyledButton>
                    <Arrow>^</Arrow>
                </StyledText>
            </StyledDiv>
        </StyledNavBar>
    )
}

export default Header;