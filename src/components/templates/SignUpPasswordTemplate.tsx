import { styled } from "nativewind"
import { Text, View } from "react-native"
import LeftArrow from "../atoms/LeftArrow"
import Texts from "../molecules/Texts"
import InputText from "../atoms/InputText"
import PasswordGuidelines from "../molecules/PasswordGuidelines"
import ButtonAtom from "../atoms/ButtonAtom"

const StyledView = styled(View)
const StyledText = styled(Text)

const SignUpPasswordTemplate = () => {
  return (
    <StyledView className="bg-white p-8 pt-16 h-full">
      <LeftArrow />
      <Texts title="Crie sua senha" mainText="A senha de 8 dígitos é usada pra acessar sua 
conta e concluir seus pagamentos." />
      <View style={{ gap: 26, marginTop: 20 }}>
        <InputText placeholder="Senha" />
      </View>
      <StyledText className="mt-6 text-xs font-semibold">Orientações pra criar sua senha:</StyledText>
      <StyledView className="mt-6 flex-1">
        <PasswordGuidelines text="Ter no mínimo 8 dígitos;" />
        <PasswordGuidelines text="Não pode ter números sequenciais, como 123;" />
        <PasswordGuidelines text="Não pode ter número repetidos, como 111." />
      </StyledView>
    <ButtonAtom title="Continuar" background="#02664E" textColor="white" width="100%" pathOnPress="/sign-up-confirmation" />
    </StyledView>
  )
}

export default SignUpPasswordTemplate