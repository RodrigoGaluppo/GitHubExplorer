import styled from "styled-components"

export const bodyInfo= styled.section`

    height:100%;
    max-width: width 700px;

`

export const Header=styled.header`
    display:flex;
    align-items:center;
    justify-content:space-between;

    a{
        display:flex;
        align-items:center;
        text-decoration:none;
        color:#a8a8b3;
        transition:0.2s;
        svg{
            margin-right:4px;
        }
        &:hover{
            color:#666;
        }
    }
`

export const RepositoryInfo = styled.section`
    margin-top:80px;
    header{
        display:flex;
        align-items:center;
        img{
            width:120px;
            height:120px;
            border-radius:50%;
        }
        div{
            margin-left:25px;
            strong{
                font-size:36px;
                color:#3d3d4d;
            }
            p{
                font-size:18px;
                color:#737380;
                margin-top:4px;
            }
        }
    }
    ul{
        display:flex;
        list-style:none;
        margin-top:40;
        
        li{ 
            & + li{
                margin-left:80px;
            }
            strong{
                display:block;
                font-size:36px;
                color:#3d3d4d;
            }
            span{
                display:block;
                font-size:20px;
                color:#6c6c80;
            }
        }
    }

`

export const Issues = styled.div`

    margin-top:80px;

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
