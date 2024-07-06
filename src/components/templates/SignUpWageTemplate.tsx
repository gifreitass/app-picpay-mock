import { styled } from "nativewind"
import { Text, View } from "react-native"
import LeftArrow from "../atoms/LeftArrow"
import Texts from "../molecules/Texts"
import RadioButtonGroup, { RadioButtonItem } from "expo-radio-button";
import React from "react";
import ButtonAtom from "../atoms/ButtonAtom";

const StyledView = styled(View)

const SignUpWageTemplate = () => {
  const [selectedValue, setSelectedValue] = React.useState("renda");

  return (
    <StyledView className="bg-white p-8 pt-16 h-full"> 
      <LeftArrow />
      <Texts title="Informe sua renda" mainText="Some os ganhos que você recebe por mês (salário bruto, pensão, etc)." />
      <StyledView className="mt-6 flex-1">
        <RadioButtonGroup containerStyle={{ gap: 18, flex: 1 }} onSelected={(value: string) => setSelectedValue(value)} selected={selectedValue} radioBackground="#02664E">
          <RadioButtonItem value="1" label={
            <Text style={{ marginLeft: 10 }}>De R$ 0,00 até R$ 1.000,00</Text>
          } />
          <RadioButtonItem value="2" label={
            <Text style={{ marginLeft: 10 }}>De R$ 0,00 até R$ 1.000,00</Text>
          } />
          <RadioButtonItem value="3" label={
            <Text style={{ marginLeft: 10 }}>De R$ 0,00 até R$ 1.000,00</Text>
          } />
          <RadioButtonItem value="4" label={
            <Text style={{ marginLeft: 10 }}>De R$ 0,00 até R$ 1.000,00</Text>
          } />
          <RadioButtonItem value="5" label={
            <Text style={{ marginLeft: 10 }}>De R$ 0,00 até R$ 1.000,00</Text>
          } />
          <RadioButtonItem value="6" label={
            <Text style={{ marginLeft: 10 }}>De R$ 0,00 até R$ 1.000,00</Text>
          } />
          <RadioButtonItem value="7" label={
            <Text style={{ marginLeft: 10 }}>De R$ 0,00 até R$ 1.000,00</Text>
          } />
          <RadioButtonItem value="8" label={
            <Text style={{ marginLeft: 10 }}>De R$ 0,00 até R$ 1.000,00</Text>
          } />
          <RadioButtonItem value="9" label={
            <Text style={{ marginLeft: 10 }}>De R$ 0,00 até R$ 1.000,00</Text>
          } />
          <RadioButtonItem value="10" label={
            <Text style={{ marginLeft: 10 }}>De R$ 0,00 até R$ 1.000,00</Text>
          } />
          <RadioButtonItem value="11" label={
            <Text style={{ marginLeft: 10 }}>De R$ 0,00 até R$ 1.000,00</Text>
          } />
          <RadioButtonItem value="12" label={
            <Text style={{ marginLeft: 10 }}>De R$ 0,00 até R$ 1.000,00</Text>
          } />
        </RadioButtonGroup>
        <ButtonAtom title="Continuar" background="#02664E" textColor="white" width="100%" pathOnPress="/sign-up-password" />
      </StyledView>
    </StyledView>
  )
}

export default SignUpWageTemplate