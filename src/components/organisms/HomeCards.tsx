import { styled } from "nativewind"
import { Button, Image, Text, View } from "react-native"

const StyledView = styled(View)
const StyledText = styled(Text)
const StyledImage = styled(Image)
const StyledButton = styled(Button)
const rightArrow = require("@/src/assets/images/right-arrow.png")
const hide = require("@/src/assets/images/hide.png")

const HomeCards = () => {
  return (
    <StyledView className="items-center mt-5 flex-row gap-x-3">
      <StyledView className="w-[350px] h-[220px] bg-[#00A589] rounded-xl px-[18px] py-[20px]">
        <StyledView className="flex-row justify-between">
          <StyledText className="text-white">Conta</StyledText>
          <StyledView className="flex-row items-center gap-2">
            <StyledText className="text-white text-sm">Ver extrato</StyledText>
            <StyledImage className="w-4 h-4" source={rightArrow} />
          </StyledView>
        </StyledView>
        <StyledView className="mt-4">
          <StyledText className="text-xl text-white">Saldo</StyledText>
          <StyledText className="text-xl text-white font-semibold">R$ 123,45</StyledText>
        </StyledView>
        <StyledView className="mt-4 px-2 flex-row items-center justify-between">
          <StyledView className="flex-row">
            <StyledText className="text-white">Limite especial:</StyledText>
            <StyledText className="text-white font-bold"> R$ 500,00</StyledText>
          </StyledView>
          <StyledImage className="w-5 h-5" source={hide}/>
        </StyledView>
        <StyledView className='mt-4 shadow-xl bg-white rounded-full'> 
          <StyledButton color="black" title="Guardar dinheiro"></StyledButton>
        </StyledView>
      </StyledView>
      <StyledView className="w-[350px] h-[220px] bg-[#00A589] rounded-xl"></StyledView>
    </StyledView>
  )
}

export default HomeCards