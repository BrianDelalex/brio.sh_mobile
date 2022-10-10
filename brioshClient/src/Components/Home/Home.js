import React, { useEffect, useRef, useState } from 'react';
import { styled } from 'nativewind';
import { Text, ScrollView, View, SafeAreaView } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ExecutionStackScreensList from '../StackScreensList';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */
const StyledText = styled(Text);
const StyledView = styled(View);
const StyledSafeAreaView = styled(SafeAreaView);
const Stack = createNativeStackNavigator();

const CommandExecutionInfoStack = ({ name, time, source, command }) => {
    return (
        <StyledSafeAreaView>
            <StyledView className='p-4'>
                <StyledText className="text-2xl font-bold text-ios-active">{name}</StyledText>
                <StyledText>Execution time: {time}s</StyledText>
                <StyledText>Command source: {source}</StyledText>
                <StyledText>Executed command: {command}</StyledText>
            </StyledView>
        </StyledSafeAreaView>
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
