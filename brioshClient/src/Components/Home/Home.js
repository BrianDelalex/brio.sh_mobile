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
        <StyledSafeAreaView className="flex flex-col p-4">
            <StyledView className='p-4 flex flex-row items-left justify-around'>
                <StyledView className="bg-ios-inactive bg-opacity-5  w-1/3 h-28 flex flex-col justify-center items-center">
                    <Ionicons name="hourglass-outline" color="#FFF" size={30} />
                    <StyledText className='text-white text-xl'>39s</StyledText>
                </StyledView>
                <StyledView className="bg-ios-inactive bg-opacity-5 w-1/3 h-28 flex flex-col justify-center items-center">
                    <Ionicons name="terminal-outline" color="#FFF" size={30} />
                    <StyledText className='text-white text-xl'>AWS</StyledText>

                </StyledView>
                <StyledView className="bg-ios-inactive bg-opacity-5 w-1/3 h-28 flex flex-col justify-center items-center">
                    <Ionicons name="help-outline" color="#FFF" size={30} />
                    <StyledText className='text-white text-xl'>0</StyledText>

                </StyledView>
            </StyledView>
            <StyledText className="bg-slate-700 mx-4 text-gray-100 text-lg p-4">$ aws deploy --now</StyledText>
            <StyledView className="p-2 h-[95%]">
                <StyledText className='text-ios-active text-xl'>Command logs:</StyledText>
                <Separator/>
                <StyledView className="max-h-[50%] mt-1 p-4 bg-slate-700 rounded-md">
                    <ScrollView>
                        <StyledText className=" text-gray-400 ">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique senectus et netus et malesuada fames ac. Tempor orci eu lobortis elementum nibh tellus molestie. Massa eget egestas purus viverra accumsan in nisl nisi.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique senectus et netus et malesuada fames ac. Tempor orci eu lobortis elementum nibh tellus molestie. Massa eget egestas purus viverra accumsan in nisl nisi.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique senectus et netus et malesuada fames ac. Tempor orci eu lobortis elementum nibh tellus molestie. Massa eget egestas purus viverra accumsan in nisl nisi.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique senectus et netus et malesuada fames ac. Tempor orci eu lobortis elementum nibh tellus molestie. Massa eget egestas purus viverra accumsan in nisl nisi.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique senectus et netus et malesuada fames ac. Tempor orci eu lobortis elementum nibh tellus molestie. Massa eget egestas purus viverra accumsan in nisl nisi.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique senectus et netus et malesuada fames ac. Tempor orci eu lobortis elementum nibh tellus molestie. Massa eget egestas purus viverra accumsan in nisl nisi.
                        </StyledText>
                    </ScrollView>
                </StyledView >
            </StyledView>
        </StyledSafeAreaView >
    )
}


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
