import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: ${(props) => props.theme.bgColor};
`;
const H1 = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

const Btn = styled.button`
  color: ${(props) => props.theme.btnColor};
`;

const Form = () => {
  const [value, setValue] = useState("");
  //타입을 줘야하는데, React 내부에 FormEvent 같은 함수는 구글링
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    console.log(event.currentTarget.value); // ReactJs Typescript의 사람들은 currentTarget 사용을 택함
    //  == 크게 다르지 않음  console.log(event.target.value);
    const {
      currentTarget: { value },
    } = event;
    setValue(value);
  };

  //   React.리액트함수<어떤놈이 이 이벤트를 만들고 발생시키는지>
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("hello", value);
  };

  return (
    <Container>
      <form onSubmit={onSubmit}>
        <input
          value={value}
          onChange={onChange}
          type="text"
          placeholder="userNmae"
        />
        <Btn>
          <H1>Log in</H1>
        </Btn>
      </form>
    </Container>
  );
};
export default Form;
