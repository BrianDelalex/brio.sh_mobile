/*
    ** TheOrionsB
    ** nathan@nuz.sh
    ** Home.js
*/

import React, { useEffect, useRef, useState } from 'react';
import { styled } from 'nativewind';
import { Text, ScrollView, View, SafeAreaView } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ExecutionStackScreensList from '../StackScreensList';
import Separator from '../Separator/Separator';
import Ionicons from 'react-native-vector-icons/Ionicons';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */
const StyledText = styled(Text);
const StyledView = styled(View);
const StyledSafeAreaView = styled(SafeAreaView);
const Stack = createNativeStackNavigator();

const CommandExecutionInfoStack = ({ name, time, source, command }) => {
    return (
        <SafeAreaView edges={["top", "right", "left"]}>
            <StyledView className="h-full max-h-full flex flex-col">
                 <StyledView className='h-[15%] flex flex-row items-left justify-around z-20 shadow-md'>
                    <StyledView className="bg-ios-inactive bg-opacity-5  w-1/3 flex flex-col justify-center items-center">
                        <Ionicons name="hourglass-outline" color="#FFF" size={30} />
                        <StyledText className='text-white text-xl'>39s</StyledText>
                    </StyledView>
                    <StyledView className="bg-ios-inactive bg-opacity-5 w-1/3 flex flex-col justify-center items-center">
                        <Ionicons name="terminal-outline" color="#FFF" size={30} />
                        <StyledText className='text-white text-xl'>AWS</StyledText>
                    </StyledView>
                    <StyledView className="bg-ios-inactive bg-opacity-5 w-1/3 flex flex-col justify-center items-center">
                        <Ionicons name="help-outline" color="#FFF" size={30} />
                        <StyledText className='text-white text-xl'>0</StyledText>
                    </StyledView>
                </StyledView>
                <StyledView className='h-[10%] flex flex-col  justify-center bg-slate-700 z-10  shadow-md px-2'>
                    <StyledText className="text-gray-100 text-lg ">$ aws deploy --now</StyledText>
                </StyledView>
                <StyledView className="bg-slate-700 h-[75%]">
                    <ScrollView>
                        <StyledText className=" p-4  text-gray-400 ">
                           por incididunt ut labore et dolore magna aliqua. Tristique senectus et netus et malesuada fames ac. Tempor orci eu lobortis elementum nibh tellus molestie. Massa eget egestas purus viverra accumsan in nisl nisi.
                            Lom dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique senectus et netus et malesuada fames ac. Tempor orci eu lobortis elementum nibh tellus molestie. Massa eget egestas purus viverra accumsan in nisl nisi.
                        </StyledText>
                    </ScrollView>
                </StyledView >
            </StyledView>
        </SafeAreaView>
    )
}
{/* <StyledText className='text-ios-active text-xl'>Command logs:</StyledText>
<Separator/> */}


const Home = () => {
    const [stackScreens, setStackScreens] = useState([]);
    const isLoadingDone = useRef(false);
    useEffect(() => {
        if (isLoadingDone.current === false) {
            for (let i = 0; i < 10; i++) {
                setStackScreens(state => [...state, <Stack.Screen key={i} name={`Random Command ${i}`} children={() => <CommandExecutionInfoStack name={`Random command ${i}`} time={428} source='AWS' command='$ aws deploy' />} />])
                isLoadingDone.current = true;
            }
        }
    }, [isLoadingDone.current])
    return (
        <Stack.Navigator>
            <Stack.Screen name="List" children={(props) => <ExecutionStackScreensList navprops={props} List={stackScreens ? stackScreens : []} />} options={{ headerShown: false }} />
            {stackScreens}
        </Stack.Navigator>
    )
}

// isInitialMount.current = false;
export default Home;
