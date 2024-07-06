import { Link, router } from "expo-router"
import { styled } from "nativewind"
import { Image, TouchableHighlight } from "react-native"

const image = require("@/src/assets/images/left-arrow.png")

const StyledImage = styled(Image)

const LeftArrow: React.FC = () => {
  const handleClick = () => {
    router.back()
  }

  return (
    <TouchableHighlight onPress={handleClick} underlayColor="#FFF">
      <StyledImage className="w-5 h-5" source={image} />
    </TouchableHighlight>
  )
}

export default LeftArrow