"use client";

import React, { createContext, useContext, useEffect, useState } from 'react';

interface LocationContextType {
  stateName: string;
  districts: string[];
  isLoading: boolean;
  permissionGranted: boolean;
}

const LocationContext = createContext<LocationContextType>({
  stateName: "Jharkhand",
  districts: [],
  isLoading: true,
  permissionGranted: false,
});

export const useLocation = () => useContext(LocationContext);

export function LocationProvider({ children }: { children: React.ReactNode }) {
  const [stateName, setStateName] = useState<string>("Jharkhand");
  const [districts, setDistricts] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [permissionGranted, setPermissionGranted] = useState<boolean>(false);

  // Helper to load districts for a state
  const loadDistricts = (targetState: string) => {
    // The user requested to ONLY show locations where we actually have properties,
    // and to include pincodes. All current properties are in Dhanbad, Jharkhand.
    const activeLocations = [
      "Dhanbad - Kailashpuram (826004)",
      "Dhanbad - Baliapur Road (826007)",
      "Dhanbad - Kusum Vihar (826005)",
      "Dhanbad - New Karmik Nagar (826004)",
      "Dhanbad - Memco More (826004)"
    ];
    
    // We can still sort them alphabetically for a cleaner UI
    setDistricts(activeLocations.sort());
  };

  useEffect(() => {
    // Initial load for default (Jharkhand)
    loadDistricts("Jharkhand");

    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          setPermissionGranted(true);
          try {
            const { latitude, longitude } = position.coords;
            // Use Nominatim for reverse geocoding
            const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=10`);
            const data = await res.json();
            
            const detectedState = data.address?.state;
            if (detectedState) {
              setStateName(detectedState);
              loadDistricts(detectedState);
            }
          } catch (error) {
            console.error("Error fetching state from coordinates:", error);
          } finally {
            setIsLoading(false);
          }
        },
        (error) => {
          console.log("Location permission denied or error:", error);
          // Fallback is already Jharkhand
          setIsLoading(false);
        },
        { timeout: 10000 }
      );
    } else {
      setIsLoading(false);
    }
  }, []);

  return (
    <LocationContext.Provider value={{ stateName, districts, isLoading, permissionGranted }}>
      {children}
    </LocationContext.Provider>
  );
}
