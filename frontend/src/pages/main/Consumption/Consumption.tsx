import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import MonthlyConsumption from '../Home/Container/MonthlyConsumption';

import { ConsumptionNavigationProps } from 'interfaces/navigation';
import BText from '@common/components/BText';
import colors from '@common/design/colors';
import { Spacing } from '@common/components/Spacing';
import { globalStyles } from '@common/design/globalStyles';
import MonthlyBenefit from './Container/MonthlyBenefit';
import ConsumptionHistory from './Container/ConsumptionHistory/ConsumptionHistory';
import Page from '@common/components/Page';

function Consumption({ navigation }: ConsumptionNavigationProps) {
  return (
    <Page>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.title}>
          <BText type="h2" color={colors.main}>
            김성용님
          </BText>
          <BText type="h2">의 이번달</BText>
        </View>
        <View>
          <Spacing rem="0.5" dir="row" />
          <BText type="h2">소비내역이에요</BText>
        </View>
        <Spacing rem="0.25" />
        <Spacing />
        <MonthlyBenefit />
        <Spacing />
        <ConsumptionHistory />
      </ScrollView>
    </Page>
  );
}

const styles = StyleSheet.create({
  title: {
    display: 'flex',
    flexDirection: 'row',
  },
});

export default Consumption;