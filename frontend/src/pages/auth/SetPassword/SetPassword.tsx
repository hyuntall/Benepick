import { SetPasswordNavigationProps } from 'interfaces/navigation';
import React from 'react';
import { Button, Text, View } from 'react-native';

function SetPassword({ navigation }: SetPasswordNavigationProps) {
  return (
    <View>
      <Text>간편 비밀번호 설정 페이지입니다.</Text>
      <Button title="카드사 선택하기" onPress={() => navigation.push('SelectCompany')} />
    </View>
  );
}

export default SetPassword;
