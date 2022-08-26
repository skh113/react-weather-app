import React from "react";
import styled from "styled-components";

function Weather() {
  return (
    <Wrapper>
      <Image src="images/weather-illustration.webp" alt="weather-status" />
      <Info>
        <h2>Seems like a nice Weather!</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam sequi
          consequuntur porro possimus veniam enim accusamus, debitis facere
        </p>
      </Info>
      <Search>
        <Input type="text" placeholder="Enter your City" />
        <Button class="button">Get</Button>
      </Search>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100%;
  width: 400px;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  align-items: center;
  box-shadow: 2.8px 2.5px 4.2px rgba(0, 0, 0, 0.028),
    9.4px 8.5px 14.1px rgba(0, 0, 0, 0.042), 42px 38px 63px rgba(0, 0, 0, 0.07);
  justify-content: space-between;
  background-color: rgba(125, 108, 255, 0.12);
`;

const Image = styled.img`
  width: 500px;
  height: 410px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
`;

const Search = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  text-align: center;
  padding: 5px 10px;
  border-radius: 5px;
`;

const Button = styled.button`
  background-color: hsl(245, 75%, 52%);
  color: whitesmoke;
  width: 70%;
  cursor: pointer;
  margin: 20px;
  font-size: 1.5rem;
  font-weight: 700;
  transition: 500ms;
  border: none;
  border-radius: 5px;

  &:hover {
    border-radius: 30px;
    background-color: hsl(245, 100%, 43%);
  }
`;

export default Weather;
