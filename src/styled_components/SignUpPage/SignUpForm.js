import styled from 'styled-components'

export const StyledSignUpForm = styled.form`
    h1{
        margin-bottom: 35px;
        line-height: 1.66;
        font-weight: bold;
        color: #222;
        font-family: ${({theme}) => theme.poppinsFont};
        font-size: ${({theme}) => theme.hugeFont};
    }
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 100%;
    height: 100%;
`


export const SignUpInput = styled.input`
    width: 100%;
    display: block;
    border: none;
    border-bottom: 1px solid #999;
    padding: 6px 30px;
    font-family: ${({theme}) => theme.poppinsFont};
    outline: none;
    font-size: ${({theme}) => theme.smallFont};
`