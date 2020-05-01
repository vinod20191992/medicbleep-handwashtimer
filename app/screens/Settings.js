import React from 'react'
import { View, StyleSheet, SafeAreaView } from 'react-native'
import MedicBleepLogo from '../components/MedicBleepLogo'
import { SettingsCell } from '../components'
import { colors } from '../config'

const { white } = colors

const Settings = ({ started }) => {
  const storeHistoryValueChanged = (value) => {}
  const shiftReminderValueChanged = (value) => {}
  const aboutMbCellPressed = () => {}
  const followCellPressed = () => {}

  const { container, contentWrapper } = styles
  return (
    <SafeAreaView style={container}>
      <View style={contentWrapper}>
        <SettingsCell
          title={'Store History'}
          onCellPress={null}
          onSwitchValueChange={storeHistoryValueChanged}
          titleNumLines={1}
          iconName={null}
        />
        <SettingsCell
          title={'Two Hour On Shift Reminders'}
          onCellPress={null}
          onSwitchValueChange={shiftReminderValueChanged}
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

export default Settings

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: white },
  contentWrapper: { flex: 1, marginTop: 36 },
})
