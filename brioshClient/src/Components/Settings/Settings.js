/*
    ** TheOrionsB
    ** nathan@nuz.sh
    ** Home.js
*/

import React from "react";
import { styled } from "nativewind";
import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from 'react-native-vector-icons/Ionicons'
const StyledView = styled(View);
const StyledText = styled(Text);

const Settings = () => {
    return (
        <SafeAreaView edges={["right", "left"]}>
            <StyledView className=" h-full">
                <StyledView className="h-[30%] bg-slate-400 shadow-2xl z-10 flex flex-col justify-around">
                    <SafeAreaView edges={['top']} style={{ paddingHorizontal: 20 }}>
                        <StyledText className="text-white text-3xl">Settings</StyledText>
                    </SafeAreaView>
                    <StyledView className="mx-4 mt-2 p-4 rounded bg-slate-800 flex flex-row justify-between items-center">
                        <StyledView>
                            <StyledText className="text-white text-xl">My account</StyledText>
                            <StyledText className="text-slate-200 text-md">nathan@nuz.sh</StyledText>
                        </StyledView>
                        <StyledView className="">
                            <Ionicons name="chevron-forward-outline" color="#FFF" size={36} />
                        </StyledView>
                    </StyledView>
                </StyledView>
                <StyledView className="h-[80%] bg-slate-600">
                    <ScrollView>
                        <StyledView className="px-2 mt-5">
                            <StyledView className="my-2 rounded-lg bg-slate-800">
                                <StyledView className="p-3 flex flex-row justify-between border-b-[1px] items-center border-slate-700">
                                    <StyledText className="text-white text-lg">Setting X</StyledText>
                                    <Ionicons name="chevron-forward-outline" color="#FFF" size={22} />
                                </StyledView>
                                <StyledView className="p-3 flex flex-row justify-between border-b-[1px] items-center border-slate-700">
                                    <StyledText className="text-white text-lg">Setting X</StyledText>
                                    <Ionicons name="chevron-forward-outline" color="#FFF" size={22} />
                                </StyledView>
                                <StyledView className="p-3 flex flex-row justify-between items-center border-slate-700">
                                    <StyledText className="text-white text-lg">Setting X</StyledText>
                                    <Ionicons name="chevron-forward-outline" color="#FFF" size={22} />
                                </StyledView>
                            </StyledView>
                        </StyledView>
                        <StyledView className="px-2">
                            <StyledView className="my-2 rounded-lg bg-slate-800">
                                <StyledView className="p-3 flex flex-row justify-between border-b-[1px] items-center border-slate-700">
                                    <StyledText className="text-white text-lg">Setting X</StyledText>
                                    <Ionicons name="chevron-forward-outline" color="#FFF" size={22} />
                                </StyledView>
                                <StyledView className="p-3 flex flex-row justify-between border-b-[1px] items-center border-slate-700">
                                    <StyledText className="text-white text-lg">Setting X</StyledText>
                                    <Ionicons name="chevron-forward-outline" color="#FFF" size={22} />
                                </StyledView>
                                <StyledView className="p-3 flex flex-row justify-between items-center border-slate-700">
                                    <StyledText className="text-white text-lg">Setting X</StyledText>
                                    <Ionicons name="chevron-forward-outline" color="#FFF" size={22} />
                                </StyledView>
                            </StyledView>
                        </StyledView>
                        <StyledView className="px-2">
                            <StyledView className="my-2 rounded-lg bg-slate-800">
                                <StyledView className="p-3 flex flex-row justify-between border-b-[1px] items-center border-slate-700">
                                    <StyledText className="text-white text-lg">Setting X</StyledText>
                                    <Ionicons name="chevron-forward-outline" color="#FFF" size={22} />
                                </StyledView>
                                <StyledView className="p-3 flex flex-row justify-between border-b-[1px] items-center border-slate-700">
                                    <StyledText className="text-white text-lg">Setting X</StyledText>
                                    <Ionicons name="chevron-forward-outline" color="#FFF" size={22} />
                                </StyledView>
                                <StyledView className="p-3 flex flex-row justify-between items-center border-slate-700">
                                    <StyledText className="text-white text-lg">Setting X</StyledText>
                                    <Ionicons name="chevron-forward-outline" color="#FFF" size={22} />
                                </StyledView>
                            </StyledView>
                        </StyledView>
                    </ScrollView>
                </StyledView>
            </StyledView>
        </SafeAreaView >
    )
}

export default Settings;