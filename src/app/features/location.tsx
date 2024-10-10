"use client";

import { Flex } from "@/components/flex";
import {
  APIProvider,
  InfoWindow,
  Map,
  Marker,
} from "@vis.gl/react-google-maps";

export const Location = () => {
  const mapContainerStyle = {
    width: "100%",
    height: "400px",
  };

  const center = {
    lat: -15.80462,
    lng: -47.9014,
  };

  return (
    <Flex className="flex-col justify-center items-center w-full">
      <Flex className="text-4xl md:text-5xl font-bold mb-8 ">Localização</Flex>
      <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? ""}>
        <Map
          style={mapContainerStyle}
          defaultCenter={center}
          defaultZoom={18}
          gestureHandling={"greedy"}
          disableDefaultUI={true}
        >
          <Marker position={center} />

          <InfoWindow position={center}>
            <div>
              <h4 className="text-lg font-bold">Lumis Estética</h4>
              <p className="text-base">Centro Empresarial Santa Cruz</p>
              <p className="text-base">
                SEPS 705/905 BL A - Asa Sul, Brasília - DF, 70390-055
              </p>
              <a
                className="text-lg text-blue-500"
                href="https://www.google.com/maps/place/Centro+Empresarial+Santa+Cruz/@-15.8076298,-47.9012638,15.25z/data=!4m6!3m5!1s0x935a3089fdf08cf3:0xb9399ac3abad0be1!8m2!3d-15.8046061!4d-47.9014275!16s%2Fg%2F11b6hffw_5?entry=ttu&g_ep=EgoyMDI0MTAwNy4xIKXMDSoASAFQAw%3D%3D"
              >
                Direções / Como chegar ?
              </a>
            </div>
          </InfoWindow>
        </Map>
      </APIProvider>
    </Flex>
  );
};
