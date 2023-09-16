import { ActivityIndicator, Image, SafeAreaView, Text } from 'react-native'
import { containerStyle } from '../styles/mainStyles'
import { RouteProp } from '@react-navigation/native'
import { RootStackParamList } from '../navigators/Navigator'
import { useState } from 'react'
import { mediaUrl } from '../utils/Urls'

type SingleRouteProp = RouteProp<RootStackParamList, 'Single'>

type SingleProps = {
  route: SingleRouteProp
}

export const Single = ({ route }: SingleProps) => {
  const [isLoading, setIsLoading] = useState(true)
  const { singleMedia } = route.params

  const handleImageLoad = () => {
    setIsLoading(false)
  }

  console.log(mediaUrl)
  console.log(`${mediaUrl}/${singleMedia.filename}`)

  return (
    <SafeAreaView style={containerStyle.container}>
      {isLoading && <ActivityIndicator size="large" color="#0000ff" />}
      <Image
        source={{ uri: `${mediaUrl}/${singleMedia.filename}` }}
        onLoad={handleImageLoad}
        style={{ width: 200, height: 200 }}
      />
      <Text>{singleMedia.title}</Text>
      <Text>{singleMedia.description}</Text>
    </SafeAreaView>
  )
}
