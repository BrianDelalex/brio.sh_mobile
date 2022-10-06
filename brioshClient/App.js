/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { styled } from 'nativewind';
import React from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

const StyledText = styled(Text);
const StyledView = styled(View);
const StyledScrollView = styled(ScrollView);
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView>
      <StatusBar barStyle={'light-content'} />
      <StyledView className="flex flex-col items-center h-screen">
        <StyledView className="p-4 w-11/12 bg-slate-900 rounded-xl mt-10">
          <StyledText className="text-white text-2xl text-left my-2">Latest activity:</StyledText>
          <StyledScrollView className="max-h-52">
            <StyledText className='text-white text-xl'>Build done in 9s</StyledText>
            <StyledText className='text-white text-xl'>Build done in 9s</StyledText>
            <StyledText className='text-white text-xl'>Build done in 9s</StyledText>
            <StyledText className='text-white text-xl'>Build done in 9s</StyledText>
            <StyledText className='text-white text-xl'>Build done in 9s</StyledText>
            <StyledText className='text-white text-xl'>Build done in 9s</StyledText>
            <StyledText className='text-white text-xl'>Build done in 9s</StyledText>
            <StyledText className='text-white text-xl'>Build done in 9s</StyledText>
            <StyledText className='text-white text-xl'>Build done in 9s</StyledText>
            <StyledText className='text-white text-xl'>Build done in 9s</StyledText>
            <StyledText className='text-white text-xl'>Build done in 9s</StyledText>
          </StyledScrollView>
        </StyledView>
        <StyledView className="p-4 w-11/12 bg-slate-900 rounded-xl mt-10">
          <StyledText className="text-white text-2xl text-left my-2">My rigs:</StyledText>
          <StyledText className='text-white text-xl'>Murphy: macOS 12.6</StyledText>
          <StyledText className='text-white text-xl'>Mooncake: Archlinux k:5.14</StyledText>
        </StyledView>
      </StyledView>
    </SafeAreaView>
  );
};

export default App;
