import React from 'react'
import { View, StyleSheet, SafeAreaView, Linking } from 'react-native'
import MedicBleepLogo from '../components/MedicBleepLogo'
import { SettingsCell } from '../components'
import { colors } from '../config'
import { storeHistory, shiftReminders } from '../state/Settings'
import { useSelector, useDispatch } from 'react-redux'
import { selectStoreHistory, selectShiftReminders } from 'app/state/Settings'

const { white } = colors

const medicBleepAboutUsUrl = 'https://www.medicbleep.com/about.html'
const medicBleepFollowTwitterUrl = 'https://twitter.com/MedicBleep'

const SettingsScreen = ({}) => {
  const dispatch = useDispatch()
  const isStoreHistory = useSelector(selectStoreHistory)
  const isShiftRemindersAllow = useSelector(selectShiftReminders)

  const storeHistoryValueChanged = (value) =>
    isStoreHistory !== value ? dispatch(storeHistory(value)) : null
  const shiftReminderValueChanged = (value) =>
    isShiftRemindersAllow !== value ? dispatch(shiftReminders(value)) : null
  const aboutMbCellPressed = () => Linking.openURL(medicBleepAboutUsUrl)
  const followCellPressed = () => Linking.openURL(medicBleepFollowTwitterUrl)

  const { container, contentWrapper } = styles
  return (
    <SafeAreaView style={container}>
      <View style={contentWrapper}>
        <SettingsCell
          title={'Store History'}
          onCellPress={null}
          onSwitchValueChange={storeHistoryValueChanged}
          switchValue={isStoreHistory}
          titleNumLines={1}
          iconName={null}
        />
        <SettingsCell
          title={'Two Hour On Shift Reminders'}
          onCellPress={null}
          onSwitchValueChange={shiftReminderValueChanged}
          switchValue={isShiftRemindersAllow}
          titleNumLines={2}
          iconName={null}
        />
        <SettingsCell
          title={'About Medic Bleep'}
          onCellPress={aboutMbCellPressed}
          onSwitchValueChange={null}
          titleNumLines={1}
          iconName={'chevron-right'}
        />
        <SettingsCell
          title={'Follow @medicbleep on Twitter'}
          onCellPress={followCellPressed}
          onSwitchValueChange={null}
          titleNumLines={2}
          iconName={'chevron-right'}
        />
      </View>
      <MedicBleepLogo />
    </SafeAreaView>
  )
}

export default SettingsScreen

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: white },
  contentWrapper: { flex: 1, marginTop: 36 },
})
