import React from 'react';
import styled from 'styled-components';
import LikeShare from './LikeShare.jsx';
import Rating from './Rating.jsx';

const RatingWrapper = styled.div`

display: flex;
align-items: flex-start;
grid-area: rating;
color: #717171;
width: 300px;
`;

const Title = styled.div`
grid-area: title;
display:flex;
flex-direction: row;
font-size: 26px !important!;
line-height:30px!important!;
text-align:start!important!;
font-weight: normal !important!;
padding: 0 !important!;
`;

const Star = styled.div`
grid-area: star;

      cursor: pointer;
      position: relative;
      overflow: visible;
      stroke: #ff385c;
      fill: #ff385c;
      align: center;
      font-size: 14px !important;
      padding-bottom: 5px;
      /* line-height:15px !important; */

    img{
      position: sticky;
      height: 15px;
      width: 15px;
      top: 50%;
      left: 40rh;
        }

`;

const Location = styled.div`

cursor: pointer;
position: auto;
grid-area: location;
text-decoration: underline;
top:100%;
`;
const LikeWrapper = styled.div`
display: flex;
align-items: center;
grid-area: likeShare;

`;
const HeaderWrapper = styled.div`
position: relative;
width: 1280px;
display: inline-grid;
overflow: visible!important!;
flex-wrap: nowrap;
align-items: center;

margin:16px;

grid-gap:0px;
grid-template-columns: 100px 100px 250px auto auto auto 200px;
grid-template-rows:  50px 25px;
  grid-template-areas:   " title title title title . . . "
                        " star rating  location location . . likeShare ";

`;

function Header({ data, updateLike, isSuperHost }) {
  const { location } = data[0];
  const city = location.split(',')[0];
  const { name } = data[0];
  const isLiked = isSuperHost;
  const { reviews } = data[0];
  const { rating } = data[0];
  return (

    <div>
      <HeaderWrapper>
        <Title city={city} name={name}>
          <div className="title">
            <h1 tabIndex="-1">
              {name}
              {' '}
              in
              {city}
            </h1>
          </div>
        </Title>

        <Star data={reviews}>
          <div>

            <img src="star.png" />
            <b>{rating}</b>
            {' '}

            {(`(${reviews || ''})`)}

            <div>{}</div>

          </div>
        </Star>

        <RatingWrapper data={location}>
          <Rating data={data} />
        </RatingWrapper>
        <Location>
          {location}
        </Location>
        <LikeWrapper>
          <LikeShare isLiked={isLiked} updateLike={updateLike} />
        </LikeWrapper>
      </HeaderWrapper>
    </div>

  );
}

export default Header;
