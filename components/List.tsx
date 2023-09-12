import { FlatList } from 'react-native'
import { ListItem } from './ListItem'
import { useEffect, useState } from 'react'

const url =
  'https://raw.githubusercontent.com/mattpe/wbma/master/docs/assets/test.json'

export const List = () => {
  const [mediaArray, setmediaArray] = useState([])

  const loadMedia = async () => {
    try {
      const response = await fetch(url)
      const responseJson = await response.json()
      setmediaArray(responseJson)
    } catch (error) {
      console.error('Error loading media', error)
    }
  }

  useEffect(() => {
    loadMedia()
  }, [])

  return (
    <FlatList
      data={mediaArray}
      keyExtractor={(_item, index) => index.toString()}
      renderItem={({ item }) => <ListItem singleItem={item} />}
    />
  )
}
