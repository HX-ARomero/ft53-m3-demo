import styled from "styled-components";

const CustomTitle = styled.h2`
  text-align: right;
`;

const CustomDiv = styled.div`
  text-align: right;
  background-color: rgba(0, 255, 255, 0.1);
  border-radius: 10px;
  padding: 20px;
`;

const Register = () => {
  return (
    <CustomDiv>
      <CustomTitle>Componente Register</CustomTitle>
      <button>Registrar</button>
    </CustomDiv>
  );
};

export default Register;
