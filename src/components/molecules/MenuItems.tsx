import { styled } from "nativewind"
import { Image, ImageSourcePropType, Text, View } from "react-native"

const StyledView = styled(View)
const StyledImage = styled(Image)
const StyledText = styled(Text)

type MenuNames = "inicio" | "carteira" | "conta" | "shop" | "menu" 

const MenuItems: React.FC<{ name: MenuNames, text: string }> = (props) => {
  const images: Record<MenuNames, ImageSourcePropType> = {
    inicio: require("@/src/assets/images/home.png"),
    carteira: require("@/src/assets/images/credit-card.png"),
    conta: require("@/src/assets/images/WalletOutlined.png"),
    shop: require("@/src/assets/images/shopping-bag.png"),
    menu: require("@/src/assets/images/align-justify.png")
  }

  return (
    props.name == 'inicio' ? (
      <StyledView className="h-16 w-16 items-center justify-center gap-y-1 bg-[#009E80] rounded-full">
      <StyledImage source={images.inicio}/> 
      <StyledText className="text-xs text-white">{props.text}</StyledText>
    </StyledView>
  ) : (
    <StyledView className="items-center gap-y-1">
      <StyledImage source={images[props.name]}/>
      <StyledText className="text-xs">{props.text}</StyledText>
    </StyledView>
  )
)
}

export default MenuItems