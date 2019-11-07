import styled from 'styled-components';

export const HomeWrapper=styled.div`
    overflow:hidden;
    width:960px;
    margin:0 auto;
`;

export const HomeLeft=styled.div`
    float:left;
    margin-left:15px;
    padding-top:30px;
    width:625px;
    img.banner_img{
        width:625px;
        height:270px;
    }
`;

export const HomeRight=styled.div`
    float:right;
    width:240px;
`;

export const TopicWrapper=styled.div`
    overflow:hidden;
    padding:20px 0 10px 0;
    margin-left:-18px;
`;

export const TopicItem=styled.div`
    float:left;
    height:32px;
    line-height:32px;
    margin-left:18px;
    margin-bottom:10px;
    padding-right:10px;
    background-color: #f7f7f7;
    font-size:14px;
    color:#000;
    border:1px solid #dcdcdc;
    border-radius:4px;
    .topic_img{
        display:block;
        float:left;
        width:32px;
        height:32px;
        margin-right:10px;
        margin-bottom:10px;
    }
`;

export const ListWrapper=styled.div`
    width:100%;
`;

export const ListItem=styled.div`
    overflow:hidden;
    width:100%;
    height:136px;
    border-bottom:1px solid #f0f0f0;
    margin-bottom:10px;
    padding:10px 0;
    div.wrapper{
        float:left;
        width:458px;
        h1.list_header{
        color:#333;
        font-size:18px;
        font-weight:700;
        line-height:1.5;
        padding-bottom:10px;
        }
        p.list_text{
            color:#999;
            font-size:13px;
            line-height:24px;
            padding-bottom:10px;
        }
        div.list_footer{
            color:#b4b4b4;
            font-size:12px;
        }
        i{
            margin:0 10px;
        }
    }
    img.list_img{
        float:right;
        width:150px;
        height:100px;
    }
`;

export const LoadMore=styled.div`
    width:80%;
    height:50px;
    line-height:50px;
    margin:30px auto;
    background-color: #a5a5a5;
    text-align:center;
    border-radius:10px;
    color:#fff;
    font-size:20px;
    cursor: pointer;
`;


export const RecommendWrapper = styled.div`
	margin: 30px 0;
	width: 280px;
`;

export const RecommendItem = styled.div`
	img{
        width: 280px;
        height: 50px;
        /* background-size: contain; */
    }
`;