import React, { useRef, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { philippineDestinations } from "../philippineDestinations";

export default function Home() {
  const ref = useRef<MapView | null>(null);
  const [isMapReady, setIsMapReady] = useState(false);

  return (
    <View style={{ width: "100%", height: "100%", zIndex: 99, elevation: 1 }}>
      <MapView
        style={styles.map}
        ref={ref}
        initialRegion={{
          latitude: 12.8797,
          longitude: 121.774,
          latitudeDelta: 12,
          longitudeDelta: 12,
        }}
        onLayout={() => {
          setIsMapReady(true);
        }}>
        {philippineDestinations.map(d => {
          return (
            <Marker
              key={d.lat + d.lng}
              coordinate={{ latitude: d.lat, longitude: d.lng }}
            />
          );
        })}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
