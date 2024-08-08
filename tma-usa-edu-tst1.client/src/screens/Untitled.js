import React, { Component } from "react";
import styled, { css } from "styled-components";
import UntitledComponent from "../components/UntitledComponent";
import EntypoIcon from "react-native-vector-icons/dist/Entypo";

function Untitled(props) {
  return (
    <>
      <Rect>
        <UniMap>Uni-Map</UniMap>
      </Rect>
      <Button2>
        <ButtonOverlay>
          <UntitledComponent
            style={{
              height: 226,
              width: 313
            }}
          ></UntitledComponent>
        </ButtonOverlay>
      </Button2>
      <Button3>
        <ButtonOverlay>
          <Rect11>
            <Rect16></Rect16>
            <Rect17></Rect17>
            <Rect18></Rect18>
          </Rect11>
          <Rect12>
            <Rect19></Rect19>
            <Rect20></Rect20>
            <Rect21></Rect21>
          </Rect12>
          <Rect13></Rect13>
          <Rect14></Rect14>
          <Rect15></Rect15>
          <Rect3>
            <Rect9></Rect9>
            <Rect10></Rect10>
          </Rect3>
          <EntypoIcon
            name="location"
            style={{
              top: 7,
              left: 23,
              position: "absolute",
              color: "rgba(128,128,128,1)",
              fontSize: 40,
              height: 43,
              width: 40
            }}
          ></EntypoIcon>
          <UniName>uni-name</UniName>
        </ButtonOverlay>
      </Button3>
    </>
  );
}

const Rect = styled.div`
  width: 314px;
  height: 43px;
  background-color: #E6E6E6;
  border-radius: 13px;
  flex-direction: column;
  display: flex;
  margin-top: 71px;
  margin-left: 29px;
`;

const ButtonOverlay = styled.button`
 display: block;
 background: none;
 height: 100%;
 width: 100%;
 border:none
 `;
const UniMap = styled.span`
  font-family: Alfa Slab One;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  text-align: center;
  font-size: 25px;
  flex: 1 1 0%;
  margin-bottom: 1px;
  margin-top: 6px;
  margin-left: 1px;
  display: flex;
  flex-direction: column;
`;

const Button2 = styled.div`
  width: 313px;
  height: 229px;
  border-radius: 14px;
  flex-direction: column;
  display: flex;
  margin-top: 16px;
  align-self: center;
  border: none;
`;

const Button3 = styled.div`
  width: 313px;
  height: 395px;
  border-width: 1px;
  border-color: rgba(207,209,218,1);
  border-radius: 13px;
  flex-direction: column;
  margin-top: 18px;
  margin-left: 30px;
  border-style: solid;
`;

const Rect11 = styled.div`
  flex: 0.17 1 0%;
  background-color: rgba(155,155,155,1);
  flex-direction: row;
  display: flex;
`;

const Rect16 = styled.div`
  flex: 0.33 1 0%;
  background-color: rgba(252, 252, 252,1);
  display: flex;
  flex-direction: column;
`;

const Rect17 = styled.div`
  flex: 0.33 1 0%;
  background-color: rgba(207, 207, 207,1);
  display: flex;
  flex-direction: column;
`;

const Rect18 = styled.div`
  flex: 0.33999999999999997 1 0%;
  background-color: rgba(222, 222, 222,1);
  display: flex;
  flex-direction: column;
`;

const Rect12 = styled.div`
  flex: 0.17 1 0%;
  background-color: rgba(219, 219, 219,1);
  flex-direction: row;
  display: flex;
`;

const Rect19 = styled.div`
  flex: 0.33 1 0%;
  background-color: rgba(252, 252, 252,1);
  display: flex;
  flex-direction: column;
`;

const Rect20 = styled.div`
  flex: 0.33 1 0%;
  background-color: rgba(250, 250, 250,1);
  display: flex;
  flex-direction: column;
`;

const Rect21 = styled.div`
  flex: 0.33999999999999997 1 0%;
  background-color: rgba(237, 237, 237,1);
  display: flex;
  flex-direction: column;
`;

const Rect13 = styled.div`
  flex: 0.17 1 0%;
  background-color: rgba(217, 217, 217,1);
  display: flex;
  flex-direction: column;
`;

const Rect14 = styled.div`
  flex: 0.17 1 0%;
  background-color: rgba(255, 255, 255,1);
  display: flex;
  flex-direction: column;
`;

const Rect15 = styled.div`
  flex: 0.1499999999999999 1 0%;
  background-color: rgba(210, 210, 210,1);
  display: flex;
  flex-direction: column;
`;

const Rect3 = styled.div`
  flex: 0.17 1 0%;
  background-color: rgba(236, 236, 236,1);
  margin: 1px;
  flex-direction: row;
  display: flex;
`;

const Rect9 = styled.div`
  flex: 0.26 1 0%;
  background-color: rgba(230, 230, 230,1);
  display: flex;
  flex-direction: column;
`;

const Rect10 = styled.div`
  flex: 0.74 1 0%;
  background-color: rgba(216, 216, 216,1);
  display: flex;
  flex-direction: column;
`;

const UniName = styled.span`
  font-family: Roboto;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 30px;
  width: 217px;
  text-align: center;
  left: 89px;
  top: 12px;
  font-size: 20px;
`;

export default Untitled;
