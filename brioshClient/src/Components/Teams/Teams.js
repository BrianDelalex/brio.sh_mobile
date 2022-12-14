/*
    ** TheOrionsB
    ** nathan@nuz.sh
    ** Home.js
*/
import React from "react";
import { styled } from "nativewind";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const StyledView = styled(View);
const StyledText = styled(Text);

const Teams = () => {
    return (
        <SafeAreaView>
            <StyledView className="p-4">
                <StyledText className="text-3xl text-ios-active">Teams</StyledText>
            </StyledView>
        </SafeAreaView>
    )
}

export default Teams;