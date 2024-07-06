import { styled } from "nativewind"
import { Text, View } from "react-native" 
import Texts from "../molecules/Texts"
import LeftArrow from "../atoms/LeftArrow"
import InputText from "../atoms/InputText"
import ButtonAtom from "../atoms/ButtonAtom"

const StyledView = styled(View)

const SignUpMailTemplate = () => {
  return (
    <StyledView className="bg-white p-8 pt-16 h-full">
      <LeftArrow />
      <Texts title="Qual é o seu email?" mainText="Vamos te enviar todas as informações importantes sobre sua conta por lá!" />
      <View style={{ marginTop: 28, flex: 1 }}>
        <InputText placeholder="E-mail" />
      </View>
      <ButtonAtom title="Continuar" background="#02664E" textColor="white" width="100%" pathOnPress="/sign-up-cep" />
    </StyledView>
  )
}

export default SignUpMailTemplate