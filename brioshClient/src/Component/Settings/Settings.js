import React from "react";
import { styled } from "nativewind";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const StyledView = styled(View);
const StyledText = styled(Text);

const Settings = () => {
    return (
        <SafeAreaView>
            <StyledView className="p-4">
                <StyledText className="text-3xl text-ios-active font-bold">Settings</StyledText>
            </StyledView>
        </SafeAreaView>
    )
}

export default Settings;