import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import styles from '../styles'
import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function RAMScreen() {
  return (
    <View style={styles.container}>
    <FormGroup>
      <Text style={styles.title}>Risk Assessment Survey</Text>
      <FormControlLabel control={<Checkbox defaultChecked />} label="I am feeling well today" />
      <FormControlLabel control={<Checkbox />} label="I had 7 hours of uninterrupted rest" />
      <FormControlLabel control={<Checkbox />} label="I do not have any past medical history" />
      <FormControlLabel control={<Checkbox />} label="I am recovered from illness" />
      <FormControlLabel control={<Checkbox />} label="I am wearing the waist band for my medical tagging purpose" />
      <FormControlLabel control={<Checkbox />} label="I have taken my temperature" />
      <FormControlLabel control={<Checkbox />} label="I drink at least 500ml of water before the activity" />
      <FormControlLabel control={<Checkbox />} label="I did not miss any lesson before this task" />
      <FormControlLabel control={<Checkbox />} label="The ground conditions is not hazardous" />
      <FormControlLabel control={<Checkbox />} label="None of my personal equipment or weapon is giving me discomfort" />
      <FormControlLabel control={<Checkbox />} label="My buddy is with me" />
      <FormControlLabel control={<Checkbox />} label="My buddy has completed his RAC" />
    </FormGroup>
    <Stack spacing={2} direction="row">
      <Button variant="contained" color="success">Submit</Button>
    </Stack>
    </View>
  );
}