import { styled } from "nativewind"
import { Image, View, Text } from "react-native"
import LeftArrow from "../atoms/LeftArrow"
import Texts from "../molecules/Texts"
import InputText from "../atoms/InputText"
import SmallTexts from "../molecules/SmallTexts"
import { Link } from "expo-router"
import Checkbox from "expo-checkbox"
import React from "react"
import ButtonAtom from "../atoms/ButtonAtom"

const StyledView = styled(View)
const image = require("@/src/assets/images/edit.png")

const SignUpAddressTemplate = () => {
  const [isChecked, setChecked] = React.useState(false)

  return (
    <StyledView className="bg-white p-8 pt-16 h-full">
      <LeftArrow />
      <Texts mainText="Esses dados são necessários para validação e segurança da sua conta." title="Complete o endereço" />
      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
        <SmallTexts title="CEP" subtitle="02345-000" />
        <Link push href='/sign-up-cep'><Image style={{ width: 24, height: 24, marginTop: -10 }} source={image} /></Link>
      </View>
      <StyledView style={{ gap: 26, marginTop: 26 }}>
        <InputText placeholder="Rua" />
        <InputText placeholder="Número" />
      </StyledView>
      <View style={{ flexDirection: "row", marginTop: 20, gap: 10 }}>
        <Checkbox style={{ borderRadius: 5, borderWidth: 1 }} color={isChecked ? '#02664E' : undefined} value={isChecked} onValueChange={setChecked} />
        <Text style={{ fontWeight: "500", fontSize: 13 }}>Sem número</Text>
      </View>
      <StyledView style={{ gap: 26, marginTop: 32 }}>
        <InputText placeholder="Complemento (opcional)"
         />
        <InputText placeholder="Bairro" />
      </StyledView>
      <View style={{ marginTop: 10, flex: 1 }}>
        <SmallTexts title="Cidade" subtitle="São Paulo" />
        <SmallTexts title="Estado (UF)" subtitle="SP" />
      </View>
      <ButtonAtom title="Continuar" background="#02664E" textColor="white" width="100%" pathOnPress="/sign-up-wage"/>
      <Link style={{ margin: 16 }} push href='/sign-up-cep'>
        <Text style={{ color: "#02664E", fontWeight: "600", fontSize: 14, textAlign: "center" }}>Editar CEP</Text>
      </Link>
    </StyledView>
  )
}

export default SignUpAddressTemplate