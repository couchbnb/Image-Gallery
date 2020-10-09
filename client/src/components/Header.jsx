import React from 'react';
import styled from 'styled-components';
import LikeShare from './LikeShare.jsx';
import Rating from './Rating.jsx';

const Title = styled.div`
grid-area: title;
display:flex;
font-size: 26px !important!;
line-height:30px!important!;
text-align:start!important!;
font-weight: normal !important!;
padding: 0 !important!;
`;

const RatingWrapper = styled.div`
grid-area: rating;
color: #717171;

span{
  margin: 4px ;
  a, a:visited {
    color:  #717171;
  };

`;

const LikeWrapper = styled.div`
grid-area: likeShare;
`;
const HeaderWrapper = styled.div`
width: 1280px;
display: grid;
overflow: visible!important!;
flex-wrap: nowrap !important!;

margin:30px !important;

grid-gap:0px;
grid-template-columns: auto auto auto auto auto 20px;
grid-template-rows: 50px 40px;
  grid-template-areas:  "title title title . . ."
                        "rating . . . .likeShare";
                        align-items: center;
`;

function Header({ data, updateLike, isSuperHost}) {
  const { location } = data[0];
  const city = location.split(',')[0];
  const { name } = data[0];
  const isLiked = isSuperHost


  return (

    <div>
      <HeaderWrapper>

        <Title city={city} name={name}>
          <div className="title">
            <h1 tabIndex="-1">
              {name} in {city}
            </h1>
          </div>
        </Title>

        <RatingWrapper data={location}>
          <Rating data={data}/>
          <span><a href="https://airbnb.com/s/San%20Francisco,California,United%20States/homes"><b>{location}</b></a></span>
        </RatingWrapper>
        <LikeWrapper>
          <LikeShare isLiked={isLiked} updateLike ={updateLike} />
        </LikeWrapper>
      </HeaderWrapper>
    </div>

  );
}

export default Header;
