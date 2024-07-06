import { styled } from "nativewind"
import { Text, View } from "react-native" 
import Texts from "../molecules/Texts"
import LeftArrow from "../atoms/LeftArrow"
import InputText from "../atoms/InputText"
import ButtonAtom from "../atoms/ButtonAtom"
import { Link } from "expo-router"

const StyledView = styled(View)
const StyledText = styled(Text)

const SignUpCodeTemplate = () => {
  return (
    <StyledView className="bg-white p-8 pt-16 h-full">
      <LeftArrow />
      <Texts title="Informe o código de verificação" mainText="O código foi enviado pro número (83)98888-XXXX. Se ele não chegou, você pode pedir novamente." />
      <Link style={{ margin: 16 }} push href='/sign-up-number'>
        <StyledText style={{ color: "#02664E", fontWeight: "600", fontSize: 12, textAlign: "center" }}>Editar número</StyledText>
      </Link>
      <View style={{ marginTop: 18, flex: 1 }}>
        <InputText placeholder="Digite o código" />
      </View>
      <ButtonAtom title="Continuar" background="#02664E" textColor="white" width="100%" pathOnPress="/sign-up-mail" />
    </StyledView>
  )
}

export default SignUpCodeTemplate