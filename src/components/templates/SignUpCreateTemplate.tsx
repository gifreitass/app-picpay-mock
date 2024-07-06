import { styled } from "nativewind"
import { Text, View } from "react-native"
import LeftArrow from "../atoms/LeftArrow"
import Texts from "../molecules/Texts"
import InputText from "../atoms/InputText"
import ButtonAtom from "../atoms/ButtonAtom"

const StyledView = styled(View)
const StyledText = styled(Text)

const SignUpCreateTemplate = () => {
  return (
    <StyledView className="bg-white p-8 pt-16 h-full">
            <LeftArrow />
            <Texts title="Informe seus dados" mainText="Suas informações são necessárias para criar a conta e estão seguros com a gente." />
            <StyledView style={{ gap: 26, marginTop: 32 }}>
              <InputText placeholder="CPF (somente números" />
              <InputText placeholder="Data de nascimento (dd/mm/aaaa)" />
            </StyledView>
            <StyledView style={{ marginTop: 64, alignItems: "center", flex: 1 }}>
              <StyledText style={{ fontWeight: "bold", color: "#02664E" }}>Ao criar a sua conta, você concorda com os nossos termos e conhece nossa política</StyledText>
            </StyledView>
            <ButtonAtom pathOnPress="sign-up-number" width="100%" title="Continuar" background="#02664E" textColor="white" />
    </StyledView>
  )
}

export default SignUpCreateTemplate