import React, { useState } from "react";
import styled from "styled-components";
import personAdd from "../../assets/icons/login.svg";
import { useSelector, useDispatch } from "react-redux";
import { toggleLanguage } from "../../actions";
import { login } from "../../actions";

const LanguageLoginContainer = styled.div`
  display: flex;
  height: 25px;
  width: 90px;
  cursor: pointer;
`;
const LoginIcon = styled.img`
  height: 20px;
  width: auto;
  margin: auto;
  margin-right: 5px;
`;
const LanguageButton = styled.button`
  background: transparent;
  margin: auto;
  height: 20px;
  width: auto;
  font-size: 14px;
  color: rgb(2, 77, 76);
  font-weight: 700;
  border: none;
  border-right: 1px solid black;
  border-left: 1px solid black;
  outline: none;
  cursor: pointer;
`;

const LanguageLogin = () => {
  const currLanguage = useSelector(state => state.currLanguage);

  const dispatch = useDispatch();

  let otherLanguage = currLanguage == "ar" ? "English" : "العربية";

  return (
    <LanguageLoginContainer>
      <LoginIcon alt="" src={personAdd} onClick={() => dispatch(login())} />
      <LanguageButton onClick={() => dispatch(toggleLanguage())}>
        {otherLanguage}
      </LanguageButton>
    </LanguageLoginContainer>
  );
};

export default LanguageLogin;
