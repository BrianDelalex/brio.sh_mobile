import { styled } from "nativewind";
import React, { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const StyledView = styled(View);
const StyledText = styled(Text)
const ExecutionStackScreensList = ({ navprops, navigation, List }) => {
    const [navList, setNavList] = useState([]);
    useEffect(() => {
        setNavList([]);
        List?.forEach((value, idx) => {
            setNavList(state => [...state,
            <StyledView onTouchEnd={() => navprops.navigation.navigate(value.props.name)} key={idx} className='bg-gray-100 my-2 p-5 shadow-sm rounded-lg'>
                <StyledText className='text-xl  font-bold'>{value.props.name}</StyledText>
                <StyledText className="text-ios-active font-bold">Success</StyledText>
                <StyledText>Deployment time: 429 seconds</StyledText>
            </StyledView>])
        })
    }, [List])
    return (
        <SafeAreaView>
            <StyledView className="p-4 h-full">
                <StyledText className="text-ios-active text-3xl font-bold">Exens</StyledText>
                <ScrollView>
                    {navList}
                </ScrollView>
            </StyledView>
        </SafeAreaView>
    )
}

export default ExecutionStackScreensList;