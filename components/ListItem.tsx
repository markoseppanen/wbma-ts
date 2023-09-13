import { Image, Text, TouchableOpacity, View } from 'react-native'
import { listItemStyle } from '../styles'
import { MediaFile } from './List'

const uploads = 'http://media.mw.metropolia.fi/wbma/uploads'

export const ListItem = ({ description, thumbnails, title }: MediaFile) => {
  return (
    <TouchableOpacity style={listItemStyle.card}>
      <Image
        style={{ width: 100, height: 100 }}
        source={{ uri: `${uploads}/${thumbnails.w320}` }}
      />
      <View style={listItemStyle.textbox}>
        <Text style={listItemStyle.textboxHeader}>{title}</Text>
        <Text style={listItemStyle.text}>{description}</Text>
      </View>
    </TouchableOpacity>
  )
}
