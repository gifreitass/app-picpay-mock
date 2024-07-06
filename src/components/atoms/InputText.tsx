import { styled } from "nativewind"
import { TextInput } from "react-native"

const StyledTextInput = styled(TextInput)

const InputText: React.FC<{ placeholder: string }> = (props) => {
  return (
    <StyledTextInput
      className="border-b border-b-[rgba(124, 124, 124, 1)] p-3 rounded-t-lg"
      style={{ backgroundColor: "rgba(124, 124, 124, 0.2)" }}
      placeholder={props.placeholder}
    />
  )
}

export default InputText

//verde borda: rgba(48, 182, 86, 1)
//verde fundo: rgba(48, 182, 86, 0.2)