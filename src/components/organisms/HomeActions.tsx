import { styled } from "nativewind"
import { Text, View } from "react-native"
import ActionCard from "../molecules/ActionCard"

const StyledView = styled(View)
const StyledText = styled(Text)

const HomeActions = () => {
  return (
    <StyledView className="mt-5">
      <StyledText className="text-sm">Pro dia a dia</StyledText>
      <StyledView className="flex-row mt-5">
        <ActionCard text="Pix" name="pix"/>
        <ActionCard text="Pagar boleto" name="boleto"/>
        <ActionCard text="Recarga de celular" name="celular"/>
        <ActionCard text="Cobrar alguém" name="cobrança"/>
      </StyledView>
    </StyledView>
  )
}

export default HomeActions