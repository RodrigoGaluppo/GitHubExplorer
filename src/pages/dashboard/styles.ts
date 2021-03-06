import styled, {css} from "styled-components"
import { shade } from "polished"

interface FormProps {
    hasError:boolean
}

const Title = styled.h1`
    font-size:40px;
    color:#3A3A3A;
    margin-top:50px;
    max-width:400px;
    line-height:50px;

`
const Form = styled.form<FormProps>`

    margin-top:50px;
    max-width:700px;
    display:flex;

    input{
        padding-left:10px;
        flex:1;
        height:70px;
        padding:0 24px;
        border:0;
        border-radius:5px 0 0 5px;
        & ::placeholder{
            color:#a8a8b3;
        }
        color:#3a3a3a;
        border:2px solid white;

        ${(props)=>{
            return props.hasError && css`
                border-color:#c53030;
                border-right:0;
            `
        }}
    }
    button{
        width:210px;
        height:70px;
        background:#04D361;
        border-radius: 0px 5px 5px 0;
        border:0;
        color:#FFF;
        font-weight:bold;
        transition:background-color 0.1s;
        &:hover{
            background:${shade(0.2,"#04D361")}
        }
    }
    
`
const Repositories = styled.div`

    margin-top:80px;
    max-width:700px;
    a{
        background:#fff;
        border-radius:5px;
        width:100%;
        padding:24px;
        display:block;
        text-decoration:none;

        display:flex;
        align-items:center
        {}
        img{
            width:64px;
            height:64px;
            border-radius:50%;
        }
        div{
            margin-left:16px;
            strong{
                font-size:20px;
                color:#3D3D4D;
            }
            p{
                font-size:18px;
                color:#A8A8B3;
                margin-top:4px;
            }
        }
        svg{
            margin-left:auto;
            color:#cbcbd6;
        }

        transition:0.5s;
        & + a {
            margin-top:20px;
        }
        &:hover{
            transform:translateX(20px)
        }
    }
    
    

`
const Error = styled.span`
    display:block;
    color:#c53030;
    margin-top:8px;

`

export { Title,Form,Repositories,Error }
