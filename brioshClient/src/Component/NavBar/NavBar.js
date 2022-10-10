import { styled } from "nativewind";
import React from "react";
import { View, Text } from "react-native";

const StyledText = styled(Text);
const StyledView = styled(View);

const NavBar = () => {
    return (
        <View>
            <StyledText className="text-white">yeh</StyledText>
        </View>
    )
}

export default NavBar;