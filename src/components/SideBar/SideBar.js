import React, { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { typeSearchWord } from "../../actions";

const SideBarButton = styled.button`
  background: transparent;
  border: 1px solid black;
  margin-right: 5px;
  padding: 5px 10px 5px 10px;
  cursor: pointer;
  font-family: Lato;
  :hover {
    color: #008174;
  }
`;
const SideBarSearchBar = styled.input`
  border: 1px solid black;
  width: 90%;
  margin: 30px 0px 30px 0px;
  height: 20px;
  font-family: Lato;
  padding: 5px;
`;

const SideBar = () => {
  const searchWord = useSelector(state => state.search);
  const dispatch = useDispatch();

  const search = () => {};

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <SideBarButton onClick={() => dispatch(typeSearchWord(""))}>
        Clear
      </SideBarButton>
      <SideBarButton
        onClick={search}
        style={{ background: "black", color: "white" }}
      >
        Apply
      </SideBarButton>
      <SideBarSearchBar
        type="text"
        value={searchWord}
        onChange={e => dispatch(typeSearchWord(e.target.value))}
        placeholder="Search"
      />
    </div>
  );
};

export default SideBar;
