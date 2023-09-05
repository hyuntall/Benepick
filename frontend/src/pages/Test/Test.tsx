import React from 'react';
import { Text, View } from 'react-native';
import AlarmButton from '../../common/components/AlarmButton';

import IconButton from '@common/components/IconButton';
import SubmitButton from '@common/components/SubmitButton';
import BText from '@common/components/BText';
import { Spacing } from '@common/components/Spacing';
import BInput from '@common/components/BInput';

function Test() {
  return (
    <View>
      <View style={{ display: 'flex', flexDirection: 'row' }}>
        <AlarmButton isAlarmed={false} onPress={() => console.log('알람크릭')} />
        <Spacing rem="5" dir="row" />
        <IconButton name="ChatBot" />
      </View>
      <SubmitButton title="제출버튼입니다" onPress={() => console.log('제출크릭')} />
      <BText type="h1">제목입니다.</BText>
      <BText type="h2">부제목입니다.</BText>
      <BText type="h3">부부제목입니다.</BText>
      <BText type="bold">볼드체입니다.</BText>
      <BText type="p">볼드체입니다.</BText>
      <BInput placeholder="인풋입니다" />
    </View>
  );
}

export default Test;
