import { Image, Text, TouchableOpacity, View } from 'react-native'
import { listItemStyle } from '../styles/mainStyles'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { MediaFile } from '../types/Media'
import { useNavigation } from '@react-navigation/native'
import { RootStackParamList } from '../navigators/Navigator'

const uploads = 'http://media.mw.metropolia.fi/wbma/uploads'

export const ListItem = (singleMedia: MediaFile) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>()

  return (
    <TouchableOpacity
      style={listItemStyle.card}
      onPress={() => {
        navigation.navigate('Single', { singleMedia })
      }}
    >
      <Image
        style={{ width: 100, height: 100 }}
        source={{ uri: `${uploads}/${singleMedia.thumbnails.w320}` }}
      />
      <View style={listItemStyle.textbox}>
        <Text style={listItemStyle.textboxHeader}>{singleMedia.title}</Text>
        <Text style={listItemStyle.text}>{singleMedia.description}</Text>
      </View>
    </TouchableOpacity>
  )
}
