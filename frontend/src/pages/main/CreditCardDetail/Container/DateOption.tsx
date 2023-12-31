import React from 'react';
import { View, Modal, TouchableHighlight, StyleSheet } from 'react-native';

import MonthButton from './DateOption/MonthButton';

import BText from '@common/components/BText';
import SvgIcons from '@common/assets/SvgIcons';
import SubmitButton from '@common/components/SubmitButton';
import colors from '@common/design/colors';
import IconButton from '@common/components/IconButton';
import { Spacing } from '@common/components/Spacing';

import { DateOptionProps } from '@interfaces/creditCard';
import useDateOption from 'hooks/useDateOption';

function DateOption({
  selectedDate,
  showModal,
  setShowModal,
  selectDate,
  setSelectedDate,
}: DateOptionProps) {
  const { months } = useDateOption();
  return (
    <View>
      <TouchableHighlight underlayColor="transparent" onPress={() => setShowModal(true)}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <BText type="h2">{`${selectedDate.month}월`}</BText>
          <SvgIcons name={showModal ? 'Down' : 'Up'} />
        </View>
      </TouchableHighlight>

      <Modal
        animationType="fade"
        transparent={true}
        visible={showModal}
        onRequestClose={() => setShowModal(false)}
      >
        <View style={styles.modal}>
          <View style={styles.dateContainer}>
            <View style={styles.yearContainer}>
              <IconButton
                name="ArrowLeft"
                size={40}
                onPress={() => setSelectedDate({ ...selectedDate, year: selectedDate.year - 1 })}
              />
              <BText type="h2">{selectedDate.year}</BText>
              <IconButton
                name="ArrowRight"
                size={40}
                onPress={() => setSelectedDate({ ...selectedDate, year: selectedDate.year + 1 })}
              />
            </View>
            <View style={styles.monthContainer}>
              {months.map((month) => (
                <View key={month} style={{ width: '33.3%', padding: 10 }}>
                  <MonthButton
                    month={month}
                    isSelected={month === selectedDate.month}
                    // isDisabled={true}
                    onSelect={() => setSelectedDate({ ...selectedDate, month })}
                  />
                </View>
              ))}
            </View>
            <Spacing />
            <View
              style={{
                width: '100%',
                backgroundColor: colors.main,
              }}
            >
              <SubmitButton
                title="닫기"
                onPress={() => selectDate(selectedDate.month, selectedDate.year)}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  dateContainer: {
    backgroundColor: colors.white,
    height: 'auto',
    borderRadius: 10,
  },
  yearContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  monthContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DateOption;
