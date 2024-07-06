import { styled } from "nativewind"
import { Text, View } from "react-native"

const StyledView = styled(View)
const StyledText = styled(Text)

const SmallTexts: React.FC<{ title: string, subtitle: string }> = (props) => {
  return (
    <StyledView className="mt-3">
      <StyledText className="font-semibold">{props.title}</StyledText>
      <StyledText className="mt-2" style={{ marginTop: 6 }}>{props.subtitle}</StyledText>
    </StyledView>
  )
}

export default SmallTexts