import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ListarProdutoScreen, FormProdutoScreens } from '../screens';

const AppStack = createNativeStackNavigator();

export default function AppRoutes() {
  return (
    <AppStack.Navigator initialRouteName="listar-produto">
      <AppStack.Screen
        name="listar-produto"
        component={ListarProdutoScreen}
        options={() => {
          return {
            headerShown: false,
          }
        }} />
      <AppStack.Screen
        name="form-produto"
        component={FormProdutoScreens}
        options={() => {
          return {
            headerShown: false,
          }
        }} />
    </AppStack.Navigator>
  );
}