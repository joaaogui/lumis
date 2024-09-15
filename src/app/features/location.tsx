"use client";

import { Flex } from "@/components/flex";
import { APIProvider, InfoWindow, Map, Marker } from "@vis.gl/react-google-maps";

export const Location = () => {
  const mapContainerStyle = {
    width: "100%",
    height: "400px",
  };

  const center = {
    lat: -15.80462,
    lng: -47.90140,
  };

  return (
    <Flex>
      <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""}>
        <Map
          style={{ width: "800px", height: "450px" }}
          defaultCenter={center}
          defaultZoom={18}
          gestureHandling={"greedy"}
          disableDefaultUI={true}
        >
          <Marker position={center} />
          
          <InfoWindow position={center} >
            <div>
              <h4>Lumis Estética</h4>
              <p>Centro Empresarial Santa Cruz</p>
              <p>SEPS 705/905 BL A - Asa Sul, Brasília - DF, 70390-055</p>
            </div>
          </InfoWindow>
        </Map>
      </APIProvider>
    </Flex>
  );
};
