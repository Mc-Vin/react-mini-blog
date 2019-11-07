import styled from 'styled-components';
import logoUrl from '../../static/img/logo.png';

//网站头部
export const HeaderWrapper = styled.div `
    position:relative;
    height:58px;
    border-bottom:1px solid #eee;
`;


export const Logo = styled.div`
    position:absolute;
    top:0;
    left:0;
    display:block;
    width:100px;
    height:58px;
    background: url(${logoUrl});
    background-size:contain;
`;

export const Nav = styled.div `
    width:892px;
    height:100%;
    margin:0 0 0 300px;
    float:left;
`;

export const NavItem = styled.div `
    &.fl {
        float:left;
    }
    &.fr {
        float:right;
    }
    &.active {
        color:#ea6f5a;
    }
    line-height:58px;
    padding:0 15px;
    font-size:17px;
`;

export const SearchItem = styled.div `
    position:relative;
    height:58px;
    float:left;
    i.iconfont{
        &.focus{
            background-color: #969696;
        }
        position:absolute;
        right:5px;
        top:13px;
        text-align:center;
        line-height:30px;
        width:30px;
        height:30px;
        border-radius:50%;
    }
`;

export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})
`
    &.focus{
        width:350px;
    }
    &.slide-enter{
        transition:all 0.3s ease-out;
    }
    &.slide-enter-active{
        width:350px;
    }
    &.slide-exit{
        transition:all 0.3s ease-in;
    }
    &.slide-exit-active{
        width:240px;
    }
    float:left;
    width:240px;
    height:38px;
    font-size:14px;
    box-sizing:border-box;
    background-color: #eee;
    border-radius:19px;
    border:1px solid #eee;
    outline:none;
    margin:9px 0 0 20px;
    padding:0 40px 0 20px;
    &::placeholder{
        font-size:12px;
    }
`;

export const SearchInfo = styled.div `
    position:absolute;
    top:58px;
    left:25px;
    padding: 20px 20px 10px;
    width:240px;
    color: #969696;
    background-color: #fff;
    box-shadow:0 0 8px rgba(0,0,0,.2);
    p.hot_search{
        font-size: 14px;
        margin-bottom:10px;
    }
    span.change{
        float:right;
        font-size:10px;
        vertical-align:middle;
        i{
        display:inline-block;
        width:30px;
        height:20px;
        transition:all 0.5s ease-in;
        transform-origin: center 50%;
        /* margin-right:50px; */
        box-sizing:border-box;
        vertical-align:middle;
        }
        i.change-another{
            margin-right:20px;
            color:red;
        }
    }
    a{
        float:left;
        padding:0 4px;
        margin:5px 5px;
        display:inline-block;
        font-size:10px;
        border:1px solid #eee;
        border-radius:2px;
        height:20px;
        line-height:20px;

    }
`;

export const Addition = styled.div `
    height:100%;
    float:right;
`;

export const Button = styled.button `
    &.login {
        float:left;
        width:80px;
        height:38px;
        margin:9px 5px 0 15px;
        border-radius:19px;
        color:#ea6f5a;
        background-color: #fff;
    }
    &.write {
        float:right;
        width:100px;
        height:40px;
        line-height:40px;
        margin:8px 20px 0;
        border-radius:20px;
        background-color: #ea6f5a;
        color:#fff;
    }
    outline:none;
    border:1px solid #ea6f5a;
    font-size:15px;
`;