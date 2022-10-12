/*
    ** TheOrionsB
    ** nathan@nuz.sh
    ** Home.js
*/
import React from "react";
import { View } from "react-native";
import { styled } from "nativewind";

const StyledView = styled(View);
const Separator = () => {
    return (<StyledView className="h-[1px] self-center bg-ios-active w-[90%]" />);
}

export default Separator;