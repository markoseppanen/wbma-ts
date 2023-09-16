import { ActivityIndicator, Image, SafeAreaView, Text } from 'react-native'
import { containerStyle } from '../styles/mainStyles'
import { RouteProp } from '@react-navigation/native'
import { RootStackParamList } from '../navigators/Navigator'
import { useState } from 'react'
import { mediaUrl } from '../utils/Urls'
import { COLORS } from '../styles/colors'

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

  return (
    <SafeAreaView style={containerStyle.container}>
      {isLoading && (
        <ActivityIndicator size="large" color={COLORS.accentColor1} />
      )}
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
