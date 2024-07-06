import { router } from 'expo-router';
import { styled } from "nativewind"
import { Button, DimensionValue, View } from "react-native"

const StyledButton = styled(Button)
const StyledView = styled(View)

const ButtonAtom: React.FC<{ title: string, background: string, textColor: string, width: DimensionValue, pathOnPress: string }> = (props) => {
  const { title, background, textColor, width, pathOnPress } = props;

  return (
    <StyledView style={{ backgroundColor: background, width: width }} className='rounded-xl shadow-xl'> 
      <StyledButton onPress={() => router.push(pathOnPress)} color={textColor} title={title}></StyledButton>
    </StyledView>
  )
}

export default ButtonAtom