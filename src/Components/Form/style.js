import styled from "styled-components";

export const FormStructure = styled.form`
    width: 95%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 350px;
    margin: 0 auto;

    @media (min-width: 425px){
        width: 420px;
    }
`

export const Input = styled.input`
    width: 85%;
    height: 45px;
    padding: 10px;
    margin: 10px 0;
    border-radius: 8px;
    border: none;
    background-color: rgb(255,0,0, 0.2);
    color: whitesmoke;
    font-family: 'Poppins', sans-serif;

    ::placeholder {
        color: whitesmoke;
    }
`

export const Button = styled.button`
    width: 50%;
    height: 45px;
    padding: 10px;
    margin: 10px 0;
    border-radius: 8px;
    border: none;
    font-family: 'Poppins', sans-serif;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 1rem;
    background-color: #033A92;
    color: whitesmoke;
    cursor: pointer;
    transition: all ease 0.3s;

    :hover {
        background-color: rgb(255,255,255);
        color: firebrick;
        transition: all ease 0.3s;
    }
    
`