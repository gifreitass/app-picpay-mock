import { styled } from "nativewind"
import { Image, Text, View } from "react-native"
import LeftArrow from "../atoms/LeftArrow"
import ButtonAtom from "../atoms/ButtonAtom"

const StyledView = styled(View)
const StyledImage = styled(Image)
const StyledText = styled(Text)
const image = require("@/src/assets/images/check-mark.png")

const SignUpSuccessTemplate = () => {
  return (
    <StyledView className="bg-white p-8 pt-16 h-full">
      <LeftArrow />
      <StyledView className="flex-1 mt-40 items-center">
        <StyledImage className="h-32 w-32" source={image} />
        <StyledText className="text-[25px] w-2/3 text-center mt-4">Parabéns sua conta foi criada!</StyledText>
      </StyledView>
      <ButtonAtom title="Continuar" background="#02664E" textColor="white" width="100%" pathOnPress="/logged-in-home" /> 
    </StyledView>
  )
}

export default SignUpSuccessTemplate