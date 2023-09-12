import { Image, Text, TouchableOpacity, View } from 'react-native'
import { listItemStyle } from '../styles'

type ListItemProps = {
  description: string
  thumbnails: {
    w160: string
  }
  title: string
}

export const ListItem = ({ thumbnails, title, description }: ListItemProps) => (
  <TouchableOpacity style={listItemStyle.card}>
    <Image
      style={{ width: 100, height: 100 }}
      source={{ uri: thumbnails.w160 }}
    />
    <View style={listItemStyle.textbox}>
      <Text style={listItemStyle.textboxHeader}>{title}</Text>
      <Text style={listItemStyle.text}>{description}</Text>
    </View>
  </TouchableOpacity>
)
