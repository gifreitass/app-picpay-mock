import { styled } from "nativewind"
import { View } from "react-native"
import CardOption from "../molecules/CardOption"

const StyledView = styled(View)

const HomeOptions = () => {
  return (
    <StyledView className="mt-4">
      <CardOption name="cartao" text="Cartão" />
      <CardOption name="emprestimo" text="Empréstimo" />
      <CardOption name="cartao" text="Cartão" />
      <CardOption name="emprestimo" text="Empréstimo" />
    </StyledView>
  )
}

export default HomeOptions