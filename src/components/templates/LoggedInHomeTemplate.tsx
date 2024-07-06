import { styled } from "nativewind"
import { View } from "react-native"
import HomeSearchBar from "../organisms/HomeSearchBar"
import HomeCards from "../organisms/HomeCards"
import HomeActions from "../organisms/HomeActions"
import HomeOptions from "../organisms/HomeOptions"
import MenuBar from "../organisms/MenuBar"

const StyledView = styled(View)

const LoggedInHomeTemplate = () => {
  return (
    <StyledView className="relative bg-white p-4 pt-16 h-full" >
      <HomeSearchBar />
      <HomeCards />
      <HomeActions />
      <HomeOptions />
      <MenuBar />
    </StyledView>
  )
}

export default LoggedInHomeTemplate