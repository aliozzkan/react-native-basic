import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthenticationNavigator } from "./navigations";

const Root = () => {
  const [isLogged, setLogged] = useState();
  return (
    <NavigationContainer independent={true}>
      <AuthenticationNavigator />
    </NavigationContainer>
  );
};

export default Root;
