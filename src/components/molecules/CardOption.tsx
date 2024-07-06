import { styled } from "nativewind"
import { Image, ImageSourcePropType, Text, View } from "react-native"

const StyledView = styled(View)
const StyledText = styled(Text)
const StyledImage = styled(Image)

type OptionsNames = "cartao" | "emprestimo" 

const CardOption: React.FC<{ name: OptionsNames, text: string }> = (props) => {
  const images: Record<OptionsNames, ImageSourcePropType> = {
    cartao: require("@/src/assets/images/credit-card.png"),
    emprestimo: require("@/src/assets/images/payment.png"), 
  }

  return (
    <StyledView className="flex-row h-[66px] bg-[#EDEDED] rounded-xl justify-between items-center px-8 mb-3">
      <StyledText>{props.text}</StyledText>
      <StyledImage source={images[props.name]} />
    </StyledView>
  )
}

export default CardOption