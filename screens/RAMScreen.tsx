import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import styles from '../styles'
import * as React from 'react';
import { useState } from 'react';
import { Alert } from 'react-native';
import {Overlay, Input } from 'react-native-elements';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { areArraysEqual } from '@mui/base';



function getRisk() {
  const array = ['Low', 'Medium', 'High', 'Very High','Extremely High'];
  const randomIndex = Math.floor(Math.random() * array.length);
  const item = array[randomIndex];
  
  return item;
}



export default function RAMScreen() {
  const[visible,setVisible] = useState(false);
  const[riskState, setRiskState] = useState("Low");

  const toggleOverlay = () => {
    setVisible(!visible);
    var count:number = 0;
    if(isChecked1) count++;
    if(isChecked2) count++;
    if(isChecked3) count++;
    if(isChecked4) count++;
    if(isChecked5) count++;
    if(isChecked6) count++;
    if(isChecked7) count++;
    if(isChecked8) count++;
    if(isChecked9) count++;
    if(isChecked10) count++;
    if(isChecked11) count++;
    if(isChecked12) count++;

    if(count==12) setRiskState("Low");
    else if(count<12 && count>=10) setRiskState("Medium");
    else if(count<10 && count>=8) setRiskState("High");
    else if(count<8 && count>=6) setRiskState("Very High");
    else if(count<6 && count>=0) setRiskState("Extremely High");    
  }

  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);
  const [isChecked4, setIsChecked4] = useState(false);
  const [isChecked5, setIsChecked5] = useState(false);
  const [isChecked6, setIsChecked6] = useState(false);
  const [isChecked7, setIsChecked7] = useState(false);
  const [isChecked8, setIsChecked8] = useState(false);
  const [isChecked9, setIsChecked9] = useState(false);
  const [isChecked10, setIsChecked10] = useState(false);
  const [isChecked11, setIsChecked11] = useState(false);
  const [isChecked12, setIsChecked12] = useState(false);

    const handleChange1 = () =>{
      setIsChecked1(!isChecked1);
    }
    
    const handleChange2 = () =>{
      setIsChecked2(!isChecked2);
    }

    const handleChange3 = () =>{
      setIsChecked3(!isChecked3);
    }

    const handleChange4 = () =>{
      setIsChecked4(!isChecked4);
    }

    const handleChange5 = () =>{
      setIsChecked5(!isChecked5);
    }

    const handleChange6 = () =>{
      setIsChecked6(!isChecked6);
    }

    const handleChange7 = () =>{
      setIsChecked7(!isChecked7);
    }

    const handleChange8 = () =>{
      setIsChecked8(!isChecked8);
    }

    const handleChange9 = () =>{
      setIsChecked9(!isChecked9);
    }

    const handleChange10 = () =>{
      setIsChecked10(!isChecked10);
    }

    const handleChange11 = () =>{
      setIsChecked11(!isChecked11);
    }

    const handleChange12 = () =>{
      setIsChecked12(!isChecked12);
    }

  return (
    <View style={styles.container}>
    <FormGroup>
      <Text style={styles.title}>Risk Assessment Survey</Text>
      <FormControlLabel control={<Checkbox defaultChecked 
      checked={isChecked1}
      onChange={handleChange1}/>} label="I am feeling well today" />
      <FormControlLabel control={<Checkbox checked={isChecked2}
      onChange={handleChange2}/>} label="I had 7 hours of uninterrupted rest" />
      <FormControlLabel control={<Checkbox checked={isChecked3}
      onChange={handleChange3}/>} label="I do not have any past medical history" />
      <FormControlLabel control={<Checkbox checked={isChecked4}
      onChange={handleChange4}/>} label="I am recovered from illness" />
      <FormControlLabel control={<Checkbox checked={isChecked5}
      onChange={handleChange5}/>} label="I am wearing the waist band for my medical tagging purpose" />
      <FormControlLabel control={<Checkbox checked={isChecked6}
      onChange={handleChange6}/>} label="I have taken my temperature" />
      <FormControlLabel control={<Checkbox checked={isChecked7}
      onChange={handleChange7}/>} label="I drink at least 500ml of water before the activity" />
      <FormControlLabel control={<Checkbox checked={isChecked8}
      onChange={handleChange8}/>} label="I did not miss any lesson before this task" />
      <FormControlLabel control={<Checkbox checked={isChecked9}
      onChange={handleChange9}/>} label="The ground conditions is not hazardous" />
      <FormControlLabel control={<Checkbox checked={isChecked10}
      onChange={handleChange10}/>} label="None of my personal equipment or weapon is giving me discomfort" />
      <FormControlLabel control={<Checkbox checked={isChecked11}
      onChange={handleChange11}/>} label="My buddy is with me" />
      <FormControlLabel control={<Checkbox checked={isChecked12}
      onChange={handleChange12}/>} label="My buddy has completed his RAC" />
    </FormGroup>
    <Stack spacing={2} direction="row">
      <Button variant="contained" color="success" onClick={toggleOverlay}>Submit</Button>
    </Stack>
    <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
        <Text>Risk Level:</Text>
        <Text style={{fontWeight: 'bold', fontSize: 20}}> {riskState} </Text>
      </Overlay>
    </View>
  );
}