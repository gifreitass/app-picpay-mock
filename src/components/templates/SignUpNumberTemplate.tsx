import { styled } from "nativewind"
import { View } from "react-native"
import LeftArrow from "../atoms/LeftArrow"
import Texts from "../molecules/Texts"
import InputText from "../atoms/InputText"
import ButtonAtom from "../atoms/ButtonAtom"

const StyledView = styled(View)

const SignUpNumberTemplate = () => {

  return (
    <StyledView className="bg-white p-8 pt-16 h-full">
      <LeftArrow/>
      <Texts title="Qual é o seu número de celular?" mainText="Por segurança, vamos te enviar um código via SMS pra garantir que este é o seu telefone"/>
      <View style={{ gap: 26, marginTop: 32, flex: 1 }}>
        <InputText placeholder="DDD e número de celular" />
      </View>
      <ButtonAtom title="Continuar" background="#02664E" textColor="white" width="100%" pathOnPress="/sign-up-code" />
    </StyledView>
  )
}

export default SignUpNumberTemplate