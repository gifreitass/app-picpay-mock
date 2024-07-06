import { styled } from "nativewind"
import { Image, TextInput, View } from "react-native"

const StyledView = styled(View)
const StyledImage = styled(Image)
const StyledTextInput = styled(TextInput)
const icon = require("@/src/assets/images/icon.jpeg")
const search = require("@/src/assets/images/search.png")
const chat = require("@/src/assets/images/chat.png")
const notification = require("@/src/assets/images/bell.png")

const HomeSearchBar = () => {
  return (
    <StyledView className="flex-row gap-x-3 items-center">
      <StyledImage className="w-[41px] h-[41px] rounded-full" source={icon} />
      <StyledTextInput className="w-[214px] h-[40px] bg-[#EDEDED] rounded-[100px] px-6" placeholder="Buscar" />
      <StyledView className="bg-[#EDEDED] w-[41px] h-[41px] justify-center items-center rounded-full">
        <StyledImage className="w-[21px] h-[21px] p-[px]" source={chat} />
      </StyledView>
      <StyledView className="bg-[#EDEDED] w-[41px] h-[41px] justify-center items-center rounded-full">
        <StyledImage className="w-[21px] h-[21px] p-[px]" source={notification} />
      </StyledView>
    </StyledView>
  )
}

export default HomeSearchBar