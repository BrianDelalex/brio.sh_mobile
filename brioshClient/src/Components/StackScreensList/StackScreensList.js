import { styled } from "nativewind";
import React, { useEffect, useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from 'react-native-vector-icons/Ionicons'
const StyledView = styled(View);
const StyledText = styled(Text)
const StyledPressable = styled(Pressable)
const ExecutionStackScreensList = ({ navprops, navigation, List }) => {
    const [navList, setNavList] = useState([]);
    useEffect(() => {
        setNavList([]);
        List?.forEach((value, idx) => {
            setNavList(state => [...state,
            <StyledPressable onPress={() => { navprops.navigation.navigate(value.props.name) }} key={idx} className={`flex flex-row justify-around items-center ${idx % 3 === 0 ? 'bg-blue-50' : 'bg-red-50'} my-2 p-5 border-[1px] border-gray-300 shadow-sm rounded-lg`}>
                <StyledView>
                    <StyledText className='text-xl'>{value.props.name}</StyledText>
                    <StyledText>Deployment time: 429 seconds</StyledText>
                </StyledView>
                <StyledView>
                    {idx % 3 === 0 ? <Ionicons name="checkmark" size={32} color="#006ee6"/> : <Ionicons name="close" size={32} color="#ff6666"/>}
                </StyledView>
            </StyledPressable>])
        })
    }, [List])
    return (
        <SafeAreaView edges={["top","right","left"]}>
            <StyledView className="px-4 h-full">
                <StyledText className="text-ios-active text-3xl">Your commands:</StyledText>
                <ScrollView>
                    {navList}
                </ScrollView>
            </StyledView>
        </SafeAreaView>
    )
}

export default ExecutionStackScreensList;