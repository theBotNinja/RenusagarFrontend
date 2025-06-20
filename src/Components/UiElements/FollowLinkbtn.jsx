import React from "react";
import { useContext } from "react";
import styled from "styled-components";
import { Theme } from "../../Context/Theme";

const FollowLinkbtn = ({ text }) => {
  const [isDark, changetheme] = useContext(Theme);
  return (
    <StyledWrapper>
      <button className="cta">
        <span
          className={`${
            isDark ? "text-blue-400" : "text-blue-800"
          } hover-underline-animation`}
        >
          {" "}
          {text}{" "}
        </span>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .cta {
    border: none;
    background: none;
    cursor: pointer;
  }

  .cta span {
    padding-bottom: 5px;
    letter-spacing: 3px;
    font-size: 13px;
    padding-right: 15px;
    text-transform: uppercase;
  }

  .hover-underline-animation {
    position: relative;
    padding-bottom: 20px;
  }

  .hover-underline-animation:after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: rgba(10, 10, 200, 0.7);
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  .cta:hover .hover-underline-animation:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;

export default FollowLinkbtn;
