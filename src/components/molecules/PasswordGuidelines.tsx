import { styled } from "nativewind"
import { Text, View } from "react-native"

const StyledView = styled(View)
const StyledText = styled(Text)

const PasswordGuidelines: React.FC<{ text: string }> = (props) => {
  return (
    <StyledView className="flex-row items-center gap-2 mb-7">
      <StyledView className="w-[12px] h-[1px] bg-black" />
      <StyledText className="text-gray-400">{props.text}</StyledText>
    </StyledView>
  )
}

export default PasswordGuidelines