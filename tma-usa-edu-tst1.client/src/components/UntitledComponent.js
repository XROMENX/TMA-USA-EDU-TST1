import React, { Component } from "react";
import styled, { css } from "styled-components";
import GoogleMapReact from "google-map-react";

function UntitledComponent(props) {
  return (
    <Container {...props}>
      <MapView>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "YOUR_API_KEY" }}
          defaultZoom={4}
          provider="MapView.PROVIDER_GOOGLE"
          defaultCenter={{
            latitude: 37.78825,
            lat: 20.5937,
            lng: 78.9629
          }}
          customMapStyle="Standard"
        />
      </MapView>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const MapView = styled.div`
  height: 247px;
  width: 341px;
`;

export default UntitledComponent;
