import { styled } from "nativewind"
import { Image, Text, View } from "react-native"
import LeftArrow from "../atoms/LeftArrow"
import Texts from "../molecules/Texts"
import PhotoTips from "../molecules/PhotoTips"
import ButtonAtom from "../atoms/ButtonAtom"

const StyledView = styled(View)
const StyledImage = styled(Image)
const StyledText = styled(Text)
const image = require("@/src/assets/images/photo.png")

const SignUpConfirmationTemplate = () => {
  return (
    <StyledView className="bg-white p-8 pt-16 h-full">
      <LeftArrow />
      <Texts title="Confirme que é você" mainText="Por segurança, envie a foto do seu rosto" />
      <StyledView className="items-center mt-6">
        <StyledImage className="w-32 h-32" source={image} />
      </StyledView>
      <StyledText className="mt-6 font-semibold">Dicas para tirar sua foto:</StyledText>
      <StyledView className="mt-6 flex-1">
        <PhotoTips name="no-glasses" text="Não use óculos , boné e máscara" />
        <PhotoTips name="smartphone" text="Posicione o celular na frente do seu rosto;"/>
        <PhotoTips name="lamp" text="Escolha um lugar iluminado;" />
        <PhotoTips name="docs" text="Esteja com seu documento por perto, pode ser que precise dele." />
      </StyledView>
      <ButtonAtom title="Continuar" background="#02664E" textColor="white" width="100%" pathOnPress="/sign-up-success" /> 
    </StyledView>
  )
}

export default SignUpConfirmationTemplate