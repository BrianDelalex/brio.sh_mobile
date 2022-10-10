import React, { useEffect, useRef, useState } from 'react';
import { styled } from 'nativewind';
import { Text, ScrollView, View, SafeAreaView } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ExecutionStackScreensList from '../StackScreensList';
import Separator from '../Separator/Separator';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */
const StyledText = styled(Text);
const StyledView = styled(View);
const StyledSafeAreaView = styled(SafeAreaView);
const Stack = createNativeStackNavigator();

const CommandExecutionInfoStack = ({ name, time, source, command }) => {
    return (
        <StyledSafeAreaView className="flex flex-col p-4">
            <StyledText className="p-4 text-ios-active text-3xl">Details:</StyledText>
            <Separator />
            <StyledView className='p-4 flex flex-col items-left'>
                <StyledText className="">Execution time: {time}s</StyledText>
                <StyledText className="">Command source: {source}</StyledText>
                <StyledText className="">Executed command: {command}</StyledText>
                <StyledText className="">Exit code: 0</StyledText>
            </StyledView>
            <StyledText className="p-4 text-ios-active text-3xl">Logs:</StyledText>
            <Separator />
            <StyledView className="p-2 h-[95%]">
                <StyledView className="max-h-[50%] p-4 bg-gray-800 rounded-md">
                    <ScrollView>
                        <StyledText className="text-gray-600 ">
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
            for (let i = 0; i < 5; i++) {
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
