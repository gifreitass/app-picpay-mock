import { styled } from "nativewind"
import MainText from "../atoms/MainText"
import Title from "../atoms/Title"
import { View } from "react-native"

const StyledView = styled(View)

const Texts: React.FC<{ title: string, mainText: string }> = (props) => {
  return (
    <StyledView className="mt-4">
      <Title>{props.title}</Title>
      <MainText marginTop={16}>{props.mainText}</MainText>
    </StyledView>
  )
}

export default Texts