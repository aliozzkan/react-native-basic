import React, { FC, useRef } from "react";
import { AuthNaviProps } from "../navigations/AuthNavi";
import { KeyboardAvoidingView, ScrollView } from "react-native";
import {
  Box,
  Text,
  Form,
  FormTextInput,
  FormHandle,
  Button,
} from "../components";
import TextInput from "../components/molecules/TextInput";

const LoginScreen: FC<AuthNaviProps<"Login">> = () => {
  const formRef = useRef<FormHandle>(null);

  function handleSubmit() {
    formRef.current?.onSubmit();
  }

  return (
    <ScrollView keyboardDismissMode="on-drag">
      <KeyboardAvoidingView>
        <Box p="l">
          <Form<{ name: string; password: string; }>
            formRef={formRef}
            onValid={(data) => {
              console.log(data);
            }}
            onInvalid={() => {
              console.log("Invalid");
            }}
            onChange={() => {}}
          >
            <FormTextInput
              defaultValue="Ali"
              name="name"
              rules={{ required: true }}
            />
            <FormTextInput
              defaultValue=""
              name="password"
              secureTextEntry
              rules={{ required: true }}
            />
          </Form>
          <Button
            label="Submit"
            onPress={() => {
              handleSubmit();
            }}
          />
        </Box>
      </KeyboardAvoidingView>
    </ScrollView>

  );
};

export default LoginScreen;
