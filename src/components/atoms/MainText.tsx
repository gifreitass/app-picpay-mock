import { styled } from "nativewind"
import { Text } from "react-native"

const StyledText = styled(Text)

const MainText: React.FC<{ children: string, marginTop: number }> = (props) => { 
  const { children, marginTop } = props; 

  return (<StyledText style={{ marginTop: marginTop }} className="text-xs">{props.children}</StyledText>)
}

export default MainText