import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { AppProvider } from './contexts';
import Routes from "./routes";

export default function App() {

    return (
        <NavigationContainer >
            <AppProvider>
                <Routes />
            </AppProvider>
        </NavigationContainer>
    );
}
