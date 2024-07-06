import { styled } from "nativewind"
import { Text, View } from "react-native"
import MenuItems from "../molecules/MenuItems"

const StyledView = styled(View)

const MenuBar = () => {
  return (
    <StyledView className="absolute bottom-0 w-screen h-24 bg-[#EDEDED] rounded-t-2xl flex-row justify-around items-center px-4">
      <MenuItems name="inicio" text="Início" />
      <MenuItems name="carteira" text="Carteira" />
      <MenuItems name="conta" text="Conta" />
      <MenuItems name="shop" text="Shop" />
      <MenuItems name="menu" text="Menu" />
    </StyledView>
  )
}

export default MenuBar