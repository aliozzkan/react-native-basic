import React, { FC, useState, useRef } from "react";
import {
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  TouchableOpacity,
} from "react-native";
import { FontFamily } from "../../LoadAssets";
import { responsiveSizes } from "../../theme";
import Box from "../atoms/Box";
import Text from "../atoms/Text";

type TextInputProps = RNTextInputProps & {
  invalid?: boolean;
};

const TextInput: FC<TextInputProps> = ({invalid, ...props}) => {
  const [isFocus, setFocus] = useState<boolean>(false);
  const [value, setValue] = useState<string>(
    props.value || props.defaultValue || ""
  );
  const inputRef = useRef<RNTextInput>(null);

  const isLabelPlaceholder = isFocus || !!value;
  return (
    <TouchableOpacity
      onPress={() => {
        inputRef.current?.focus();
      }}
    >
      <Box
        mb="m"
        backgroundColor="white"
        p="m"
        py="s"
        borderRadius="s"
        position="relative"
        borderWidth={1}
        borderColor={invalid ? "red.400" : "gray.100"}

      >
        <Box
          position="absolute"
          left={responsiveSizes.m}
          top={isLabelPlaceholder ? "20%" : "45%"}
        >
          <Text
            color="gray.600"
            fontSize={
              isLabelPlaceholder ? responsiveSizes.s : responsiveSizes.m
            }
            fontFamily={FontFamily.MonserratSemibold}
          >
            Username
          </Text>
        </Box>
        <Box mt="m" mb="xs">
          <RNTextInput
            ref={inputRef}
            {...props}
            onChangeText={(text) => {
              setValue(text);
              if (props.onChangeText) {
                props.onChangeText(text);
              }
            }}
            onBlur={(e) => {
              setFocus(false);
              if (props.onBlur) {
                props.onBlur(e);
              }
            }}
            onFocus={(e) => {
              setFocus(true);
              if (props.onFocus) {
                props.onFocus(e);
              }
            }}
            style={{
              fontFamily: FontFamily.RalewayRegular,
              fontSize: responsiveSizes.m,
              lineHeight: responsiveSizes.l,
            }}
          />
        </Box>
      </Box>
    </TouchableOpacity>
  );
};

export default TextInput;
