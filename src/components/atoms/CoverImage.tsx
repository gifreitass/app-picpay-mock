import { styled } from "nativewind"
import { ImageBackground } from "react-native"

const image = require("@/src/assets/images/bg-image.png")
const StyledImageBackground = styled(ImageBackground)

const CoverImage = () => {
  return (
    <StyledImageBackground className="w-[580px] h-[540px] absolute bottom-0" source={image} resizeMode="cover" />
  )
}

export default CoverImage 