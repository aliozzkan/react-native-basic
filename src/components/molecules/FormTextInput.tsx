import React from "react";
import {
  useFormContext,
  useController,
  RegisterOptions,
} from "react-hook-form";
import {TextInputProps as RNTextInputProps} from 'react-native'
import { useEffect } from "react";
import Box from "../atoms/Box";
import Text from "../atoms/Text";
import TextInput from "./TextInput";

interface FormTextInputProps {
  name: string;
  defaultValue: string;
  rules?: Omit<
    RegisterOptions<any, any>,
    "valueAsNumber" | "valueAsDate" | "setValueAs"
  >;
}

const FormTextInput = ({name, rules, ...props}: FormTextInputProps & RNTextInputProps) => {
  const { control, setValue, trigger } = useFormContext();
  const {
    field: { ref, onChange, onBlur, value, ...inputProps },
    fieldState: { invalid, isTouched, isDirty },
  } = useController({
    name: name,
    defaultValue: props.defaultValue,
    control,
    rules: rules,
  });
  useEffect(() => {
    trigger(name);
  }, [value]);
  return (
    <TextInput
      invalid={invalid}
      value={value}
      onChangeText={(value) => {
        setValue(name, value);
      }}
      {...props}
    />
  );
};

export default FormTextInput;
