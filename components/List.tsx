import { FlatList } from 'react-native'
import { ListItem } from './ListItem'
import { useLoadMedia } from '../hooks/ApiHooks'

const url = 'http://media.mw.metropolia.fi/wbma'

export const List = () => {
  const mediaArray = useLoadMedia()

  return (
    <FlatList
      data={mediaArray}
      keyExtractor={(_item, index) => index.toString()}
      renderItem={({ item }) => <ListItem {...item} />}
    />
  )
}
