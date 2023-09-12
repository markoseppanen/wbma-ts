import { Image, Text, TouchableOpacity, View } from 'react-native'
import { listItemStyle } from '../styles'

type ListItemProps = {
  singleItem: {
    description: string
    thumbnails: {
      w160: string
    }
    title: string
  }
}

export const ListItem = ({ singleItem }: ListItemProps) => (
  <TouchableOpacity style={listItemStyle.card}>
    <Image
      style={{ width: 100, height: 100 }}
      source={{ uri: singleItem.thumbnails.w160 }}
    />
    <View style={listItemStyle.textbox}>
      <Text style={listItemStyle.textboxHeader}>{singleItem.title}</Text>
      <Text style={listItemStyle.text}>{singleItem.description}</Text>
    </View>
  </TouchableOpacity>
)
