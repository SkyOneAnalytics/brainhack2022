import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { ImageBackground, ScrollView } from 'react-native';
import { RootTabScreenProps } from '../types';
import styles from '../styles'
import { ReactChild, ReactFragment, ReactPortal } from 'react';
import CountdownTimer from '../components/CountdownTimer';

const ItemList = (props: { name: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; }) => {
  return (
    <View style={styles.itemList}>
      <Text>{props.name}</Text>
    </View>
  );
}

export default function TrainingScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Today's Activities</Text>
      <View style={styles.programmeBox}>
        <View style={styles.listItem}>
          <ItemList name='5BX' />
          <ItemList name='Army Recruitment Talk' />
          <ItemList name='Mealtime Regime' />
          <ItemList name='Lunch' />
          <ItemList name='Admin Time' />
          <ItemList name='24KM Route March' />
          <ItemList name='Wash Up' />
          <ItemList name='Lights Out' />
        </View>
      </View>
    </View>
  );
}
