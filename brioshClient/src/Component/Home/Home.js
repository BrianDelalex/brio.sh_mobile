import React from 'react';
import { styled } from 'nativewind';
import { Text, ScrollView, View, SafeAreaView } from 'react-native';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */
const StyledText = styled(Text);
const StyledView = styled(View);
const StyledSafeAreaView = styled(SafeAreaView);

const Home = () => {
  return (
    <StyledSafeAreaView>
      <StyledView className='p-4'>
        <StyledText className="text-3xl text-ios-active font-bold">Home</StyledText>
        <ScrollView style={{ padding: 10, height: '95%' }} contentContainerStyle={{ flex: true, flexDirection: 'column', justifyContent: 'flex-start' }}>
          <StyledView className='bg-gray-100 my-2 p-5 shadow-sm rounded-lg'>
            <StyledText className='text-xl  font-bold'>Deployment 1</StyledText>
            <StyledText className="text-ios-active font-bold">Success</StyledText>
            <StyledText>Deployment time: 429 seconds</StyledText>
          </StyledView>
          <StyledView className='bg-gray-100 my-2 p-5 shadow-sm rounded-lg'>
            <StyledText className='text-xl  font-bold'>Deployment 2</StyledText>
            <StyledText className="text-ios-active font-bold">Success</StyledText>
            <StyledText>Deployment time: 429 seconds</StyledText>
          </StyledView>
          <StyledView className='bg-gray-100 my-2 p-5 shadow-sm rounded-lg'>
            <StyledText className='text-xl  font-bold'>Deployment 3</StyledText>
            <StyledText className="text-ios-active font-bold">Success</StyledText>
            <StyledText>Deployment time: 429 seconds</StyledText>
          </StyledView>
        </ScrollView>
      </StyledView>
    </StyledSafeAreaView>
  )
}

export default Home;