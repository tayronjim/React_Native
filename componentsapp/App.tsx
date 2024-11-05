import React from "react";
import './gesture-handler';
import './src/presentation/icons/iconsLibrary';
import { NavigationContainer } from "@react-navigation/native";
import { Navigator } from "./src/presentation/navigator/Navigator";

function App() {
    return (
      <NavigationContainer>
          <Navigator />
        </NavigationContainer>
    );
}

export default App;

