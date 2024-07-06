import { styled } from "nativewind"
import { Text } from "react-native"

const StyledText = styled(Text)

const Title: React.FC<{ children: string }> = (props) => {
  return (
    <StyledText style={{ fontSize: 22, fontWeight: "bold", paddingTop: 8 }} className="">{props.children}</StyledText>
  )
}

export default Title