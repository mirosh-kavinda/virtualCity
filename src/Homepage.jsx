import React ,{useState,useEffect} from "react";
import Spinner from "./components/Spinner/Spinner";
import { Canvas } from "@react-three/fiber";
import {
  Stage,
  Environment,
  OrbitControls,
} from "@react-three/drei";

import env from './images/evening_road_01_2k.hdr';
import { CarModel } from "./components/Dutsan";
import { TowerModel } from "./components/Tower_house_design";
import {AncientBuildModel} from './components/18th_century_city_building_low_poly';


const Homepage = () => {

  const [loading, setLoading] = useState(true);
  useEffect(() => {
   
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const { color } = { color: "#b75222" };
  return (
    <>
      {loading ? (
        <div className="canvas">
          <Spinner />
        </div>
      ) : (
        <div className="canvas">
          <Canvas shadows camera={{ position: [-10, 0, -120], fov: 70 }}>
            <hemisphereLight
              intensity={0.5}
              color="white"
              groundColor="white"
              placeholder="ff"
            />
            <Environment
              files={env}
              ground={{ height: 5, radius: 40, scale: 20 }}
              
            />
        
            <TowerModel position={[-11, 0, 10]} />
            <TowerModel position={[14, 0, 10]} />
            <TowerModel position={[15, 0, 10]} />
            <AncientBuildModel position={[7, 5, 22]} />
            <OrbitControls
              autoRotateSpeed={0.65}
              zoomSpeed={0.85}
              minPolarAngle={Math.PI / 2.3}
              maxPolarAngle={Math.PI / 2.55}
            />

            <Stage
              intensity={1.5}
              environment="city"
              adjustCamera={3}
              position={[100, 0, 10]}
            >
              <CarModel color={color} position={[1, 100, 1]} />
            </Stage>
          </Canvas>
        </div>
      )}
    </>
  );
};

export default Homepage;
