import React from "react";

import { NavigationContainer } from '@react-navigation/native';
import { AppProvider, Routes } from "./src";

export default function App() {

  return (
    <NavigationContainer >
      <AppProvider>
      <Routes />
      </AppProvider>
    </NavigationContainer>
  );
}
