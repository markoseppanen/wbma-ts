import { MediaFile, MediaItem } from "../interfaces/Media"
import { useEffect, useState } from "react"

const url = 'http://media.mw.metropolia.fi/wbma'

export const useLoadMedia = () => {
  
  const [mediaArray, setMediaArray] = useState<MediaFile[]>([])

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
      setMediaArray(media)
    } catch (error) {
      console.error('Error loading media', error)
    }
  }

  useEffect(() => {
    loadMedia()
  }, [])
  
  return mediaArray
}