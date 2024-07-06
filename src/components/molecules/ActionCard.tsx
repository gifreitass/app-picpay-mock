import { styled } from "nativewind"
import { Image, ImageSourcePropType, Text, View } from "react-native"

const StyledView = styled(View)
const StyledImage = styled(Image)
const StyledText = styled(Text)

type ActionNames = "pix" | "boleto" | "celular" | "cobrança"

const ActionCard: React.FC<{ name: ActionNames, text: string }> = (props) => {
  const { name, text } = props;

  const images: Record<ActionNames, ImageSourcePropType> = {
    pix: require("@/src/assets/images/pix.png"),
    boleto: require("@/src/assets/images/google-docs.png"),
    celular: require("@/src/assets/images/smartphone.png"),
    cobrança: require("@/src/assets/images/chat.png")
  }
  
  return (name === 'pix'? (
    <StyledView className="w-24 items-center mr-1.5 gap-y-3">
      <StyledView className="bg-[#00A589] w-[90px] h-20 rounded-xl justify-center items-center">
        <StyledImage className="w-6 h-6" source={images.pix} />
      </StyledView>
      <StyledView className="items-center">
        <StyledView className="bg-black rounded-full">
          <StyledText className="text-xs text-white px-1">ATÉ 12X</StyledText>
        </StyledView>
        <StyledText>{text}</StyledText>
      </StyledView>
    </StyledView>) :
      (<StyledView className="w-24 items-center mr-1.5 gap-y-3">
        <StyledView className="bg-[#EDEDED] w-[90px] h-20 rounded-xl justify-center items-center">
          <StyledImage className="w-6 h-6" source={images[name]} />
        </StyledView>
        <StyledText className="text-center w-16">{text}</StyledText>
      </StyledView>))
}

export default ActionCard