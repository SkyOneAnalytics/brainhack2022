import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { ImageBackground, ScrollView } from 'react-native';
import { RootTabScreenProps } from '../types';
import styles from '../styles'
import { ReactChild, ReactFragment, ReactPortal } from 'react';


const ItemList = (props: { name: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; }) => {
  return (
    <View style={styles.itemList}>
      <Text>{props.name}</Text>
    </View>
  );
}

export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {
  return (
    <ScrollView>
      <View style={styles.container}>
      <View style={styles.helloBar}>
          <Text style={{left: '10%'}}>Hello REC DOLPH XIA</Text>
      </View>
      <View style={styles.statusBox}>
          <Text style={styles.statusTitle}>Status: </Text>
          <View style={styles.messageBox}>
            <Text style={styles.messageText}>Risk Assessment Incomplete </Text>
            <Text style={{fontSize: 20, fontStyle: 'italic'}} onPress={() => navigation.navigate('RAMSurvey')} >
              Please complete your RAM Survey in the next tab
            </Text>    
          </View>
      <Text style={{alignSelf:'flex-start', padding: 10}}>
        RAM Status will reset in 00:00:00H
      </Text>      
      </View>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <View style={styles.programmeBox}>
        <Text style={styles.title2} onPress={() => navigation.navigate('Training')}>Training Programme for 13 June 2022</Text>
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
    </ScrollView>
  );
}


