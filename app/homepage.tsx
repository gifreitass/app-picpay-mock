
import CoverImage from "@/src/components/atoms/CoverImage";
import MainText from "@/src/components/atoms/MainText";
import Title from "@/src/components/atoms/Title";
import Buttons from "@/src/components/molecules/Buttons";
import { styled } from "nativewind";
import { Button, Text, View } from "react-native";

const StyledView = styled(View)
export default function HomePage() {
    return (
        <StyledView className="bg-white p-8 pt-16 h-full">
            <StyledView className="flex-1">
                <MainText marginTop={0}>Que bom ter você no Picpay</MainText>
                <Title>PicPay, a melhor experiencia de pagamento pague tudo em até 12x.</Title>
            </StyledView>
            <CoverImage></CoverImage>
            <Buttons />
        </StyledView>
    )
}
