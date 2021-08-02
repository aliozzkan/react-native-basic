import React, { FC } from "react";
import { AuthNaviProps } from "../navigations/AuthNavi";
import { Box, Text, Button } from "../components";
import { Ionicons } from "@expo/vector-icons";
import { colors, responsiveSizes } from "../theme";
import TextInput from "../components/molecules/TextInput";

const HomeScreen: FC<AuthNaviProps<"Home">> = (props) => {
  return (
    <Box>
      <Text
        variant="header"
        textTransform="uppercase"
        px="l"
        mt="m"
        color="teal.400"
      >
        Siemens
      </Text>
      <Box px="l">
        <Button
          label="Login"
          size="m"
          colorScheme="teal"
          leftIcon="log-in"
          onPress={() => { props.navigation.navigate("Login") }}
        />
      </Box>
    </Box>
  );
};

export default HomeScreen;
