import { styled } from "nativewind"
import ButtonAtom from "../atoms/ButtonAtom"
import { View } from "react-native"

const StyledView = styled(View)

const Buttons = () => {
  return (
    <StyledView className="flex-row justify-between">
      <ButtonAtom pathOnPress="sign-up-create" width="48%" background="white" textColor="#02664E" title="Criar conta"></ButtonAtom>
      <ButtonAtom pathOnPress="sign-up-create" width="48%" background="#02664E" textColor="white" title="Entrar"></ButtonAtom>
    </StyledView>
  )
}

export default Buttons