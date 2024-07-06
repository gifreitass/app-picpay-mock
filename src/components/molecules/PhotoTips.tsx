import { styled } from "nativewind"
import { Image, Text, View } from "react-native"

const StyledView = styled(View)
const StyledText = styled(Text)
const StyledImage = styled(Image)

const noGlassesImage = require("@/src/assets/images/no-glasses.png")
const smartphone = require("@/src/assets/images/smartphone.png")
const docs = require("@/src/assets/images/google-docs.png")
const lamp = require("@/src/assets/images/light-bulb.png")

const PhotoTips: React.FC<{ name: string, text: string }> = (props) => {
  return (
    <StyledView className="flex-row gap-4 border-b-[1px] border-[#B6B6B6] py-4 items-center">
      {props.name === "smartphone" && <StyledImage className="w-6 h-6" source={smartphone} />}
      {props.name === "lamp" && <StyledImage className="w-6 h-6" source={lamp} />}
      {props.name === "no-glasses" && <StyledImage className="w-6 h-6" source={noGlassesImage} />}
      {props.name === "docs" && <StyledImage className="w-6 h-6" source={docs} />}
      <StyledText className="text-[13px] w-4/5">{props.text}</StyledText>
    </StyledView>
  )
}

export default PhotoTips