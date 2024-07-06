import { styled } from "nativewind"
import { Text, View } from "react-native" 
import Texts from "../molecules/Texts"
import LeftArrow from "../atoms/LeftArrow"
import InputText from "../atoms/InputText"
import ButtonAtom from "../atoms/ButtonAtom"

const StyledView = styled(View)

const SignUpCepTemplate = () => {
  return (
    <StyledView className="bg-white p-8 pt-16 h-full">
      <LeftArrow />
      <Texts title="Informe seu CEP" mainText="Esses dados são necessários para validação e segurança da sua conta." />
      <View style={{ marginTop: 28 }}>
        <InputText placeholder="CEP" />
      </View>
      <Text style={{ color: "#02664E", fontWeight: "600", fontSize: 12, textAlign: "center", margin: 24, flex: 1 }}>Descobrir meu CEP</Text>
      <ButtonAtom title="Continuar" background="#02664E" textColor="white" width="100%" pathOnPress="/sign-up-address" />
    </StyledView>
  )
}

export default SignUpCepTemplate