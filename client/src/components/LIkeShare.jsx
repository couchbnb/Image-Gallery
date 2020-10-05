import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
display: flex;

  background-color: white;
  color: black;
  border-radius: 12px;

  flex-wrap: nowrap;
  border:  solid white;
  transition: all .5s ease;
  position: relative;
   span{
     margin:5px;
     font-size: 14px;
     line-height: 10px;
     text-decoration: underline;
   }
 :hover {
  background-color: #e7e7e7;
 }
`;

const LikeFrame = styled.div`

 svg{

   fill :${(props) => (props.isLiked ? 'none' : '#ff385c')};
 }
`;

function LikeShare(props) {
  const { isLiked } = props;
  console.log(isLiked, 'LikeShare');

  return (
    <div>

      <Button>

        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" display="block" fill="none" style={{ height: '16px', width: '16px' }} stroke="currentcolor" strokeWidth="2" overflow="visible">
          <path d="M27 18v9a2 2 0 01-2 2H7a2 2 0 01-2-2v-9M16 3v23V3zM6 13l9.293-9.293a1 1 0 011.414 0L26 13" />
        </svg>
        {' '}
        <span> Share</span>
      </Button>

      <Button onClick={((event) => {
        event.preventDefault();
        props.updateLike();
      })}
      >
        <LikeFrame isLiked={isLiked}>
          <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" display="block" style={{ height: '16px', width: '16px' }} stroke="currentcolor" strokeWidth="2" overflow="visible">
            <path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z" />
          </svg>
          {' '}
          <span>
            {'  '}
            {' '}
            Save
          </span>

        </LikeFrame>
      </Button>
    </div>

  );
}

export default LikeShare;
