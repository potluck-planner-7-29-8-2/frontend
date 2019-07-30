import styled from 'styled-components'
import { LoginContainer } from '../index'

export const SignUpContainer = styled(LoginContainer)`
    width: 900px;
    flex-direction: row;
    justify-content: space-between;
    padding: 75px 0;
    height: 500px; 
    font-family: ${({theme}) => theme.poppinsFont};
    font-weight: 400;


    .sign_up_inner{
        width: 49%;
        height: 400px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        padding-left: 34px;
    }

    .image{
        padding-right: 15px;
        img{
            max-width: 100%;
        }
        a{
            font-size: ${({theme}) => theme.smallFont};
            color: #222;
            line-height: 1.8;
            text-decoration: underline;
        }
    }

    .sign_up_error{
        color: #dd2c00;
        font-size: ${({theme}) => theme.tinyFont};
    }
`
