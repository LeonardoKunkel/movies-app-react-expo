import { nowPlayingAction } from '@/core/actions/movies/now-playing.action';
import { Text, View } from 'react-native';

const RootLayout = () => {

  nowPlayingAction();

  return (
    <View>
      <Text className='text3xl'>RootLayout</Text>
    </View>
  )
}

export default RootLayout