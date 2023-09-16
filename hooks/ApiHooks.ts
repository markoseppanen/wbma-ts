import { apiBaseUrl as url } from '../utils/Urls'
import { MediaFile, MediaItem } from "../types/Media"
import { useEffect, useState } from "react"

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