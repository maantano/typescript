import { useState } from "react";
import styled from "styled-components";

interface ContainerProps {
  bgColor: string;
  borderColor: string;
}

const Container = styled.div<ContainerProps>`
  width: 100px;
  height: 100px;
  background-color: ${(props) => props.bgColor};
  border-radius: 100px;
  border: 3px solid ${(props) => props.borderColor};
`;

// 예전에는 이런식으로 사용함
// const x = (a:number, b:number)=>a+b

interface CircleProps {
  bgColor: string; // required props
  borderColor?: string; // optional props
  text?: string; // optional props
}

const Circle = ({
  bgColor,
  borderColor,
  text = "default text",
}: CircleProps) => {
  const [value, setValue] = useState<number | string>(0);
  setValue("1234");
  setValue(1);
  return (
    <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}>
      {text}
    </Container>
  );
  //CircleProps에는 borderColor 가 optional props 이지만 Containerprops에는 required props이기 때문에,
  //borderColor가 없을때 defqult값을 쭘

  // const Circle = (props: CircleProps) => {
  //   return <Container bgColor={props.bgColor} />;
};

export default Circle;

// interface sayHelloProps {
//   name: string;
//   age: number;
// }

// const sayHello = (playerObj: sayHelloProps) =>
//   `Hello ${playerObj.name} you are ${playerObj.age}`;

// sayHello({ name: "nico", age: 10 });
// // sayHello({ name: "nico", age: 10, hello: 120 });
