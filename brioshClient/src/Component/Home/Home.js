import React, { useEffect, useRef, useState } from 'react';
import { styled } from 'nativewind';
import { Text, ScrollView, View, SafeAreaView } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StackScreensList from '../StackScreensList/StackScreensList';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */
const StyledText = styled(Text);
const StyledView = styled(View);
const StyledSafeAreaView = styled(SafeAreaView);
const Stack = createNativeStackNavigator();

const CommandExecutionInfoStack = ({ name, time, source, command }) => {
    return (
        <StyledSafeAreaView className='p-4'>
            <StyledText className="font-2xl text-ios-active">{name}</StyledText>
            <StyledText>{time} seconds</StyledText>
            <StyledText>{source}</StyledText>
            <StyledText>{command}</StyledText>
        </StyledSafeAreaView>
    )
}

const DummyComponent = () => {
    return (
        <Text></Text>
    )
}

// const ListStack = ({ stackList, navigation }) => {
//     useEffect(() => {}, []);
//     return (
//         <StyledSafeAreaView>
//             <StyledView className='p-4'>
//                 <StyledText className="text-3xl text-ios-active font-bold">Home</StyledText>
//                 <ScrollView style={{ padding: 10, height: '95%' }} contentContainerStyle={{ flex: true, flexDirection: 'column', justifyContent: 'flex-start' }}>
//                     {/* {stackNavigation ? stackNavigation : null} */}
//                 </ScrollView>
//             </StyledView>
//         </StyledSafeAreaView>
//     )
// }

const Home = () => {
    const [stackScreens, setStackScreens] = useState([]);
    const isLoadingDone = useRef(false);
    useEffect(() => {
        if (isLoadingDone.current === false) {
            for (let i = 0; i < 5; i++) {
                setStackScreens(state => [...state, <Stack.Screen key={i} name={`Deployment ${i}`} children={() => <CommandExecutionInfoStack name={`Random command ${i}`} time={428} source='AWS' command='$ aws deploy' />}/>])
                isLoadingDone.current = true;
            }
        } else {
            console.log("Ok.");
        }
    }, [isLoadingDone.current])
    return (
        <Stack.Navigator>
            <Stack.Screen name="List" children={(props)=><StackScreensList navprops={props} List={stackScreens ? stackScreens : []}/>} options={{ headerShown: false }} />
            {stackScreens}
        </Stack.Navigator>
    )
}

// isInitialMount.current = false;
export default Home;
