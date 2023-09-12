import { Dimensions, Platform, StyleSheet } from 'react-native'
import Constants from 'expo-constants'

const HEADER_TEXT_SIZE = 20

const COLORS = {
  background: '#222b36',
  background2: '#1b2129',
  foreground: '#d0cfcf',
  accentColor1: '#b4bdb4',
  accentColor2: '#ac0035',
}

export const containerStyle = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'android' ? Constants.statusBarHeight : 0,
    backgroundColor: COLORS.background,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
})

export const listItemStyle = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 5,
    margin: 5,
    backgroundColor: COLORS.background2,
    width: Dimensions.get('window').width - 10,
    borderRadius: 10,
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  textbox: {
    flexDirection: 'column',
    flex: 2,
    padding: 5,
    paddingHorizontal: 10,
  },
  textboxHeader: {
    fontSize: HEADER_TEXT_SIZE,
    fontWeight: 'bold',
    color: COLORS.accentColor2,
  },
  text: {
    color: COLORS.foreground,
  },
})
