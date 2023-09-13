import { FlatList } from 'react-native'
import { ListItem } from './ListItem'
import { useEffect, useState } from 'react'

const url = 'http://media.mw.metropolia.fi/wbma'

interface MediaItem {
  file_id: number
  filename: string
  filesize: number
  title: string
  description: string
  user_id: number
  media_type: string
  mime_type: string
  time_added: string
}

export interface MediaFile {
  file_id: number
  filename: string
  filesize: number
  title: string
  description: string
  user_id: number
  media_type: string
  mime_type: string
  time_added: string
  thumbnails: {
    w640: string
    w320: string
    w160: string
  }
}

export const List = () => {
  const [mediaArray, setmediaArray] = useState<MediaFile[]>([])

  const loadMedia = async () => {
    try {
      const response = await fetch(`${url}/media`)
      const responseJson = await response.json()

      const media = await Promise.all(
        responseJson.map(async (item: MediaItem) => {
          const response = await fetch(`${url}/media/${item.file_id}`)
          const mediaJson = await response.json()
          return mediaJson
        })
      )
      setmediaArray(media)
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
      renderItem={({ item }) => <ListItem {...item} />}
    />
  )
}
