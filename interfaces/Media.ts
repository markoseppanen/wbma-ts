export interface MediaItem {
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