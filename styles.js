import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
    },
    countdownTimer: {
      cursor: "pointer",
      border: "transparent",
      borderRadius: "0px",
      padding: "0px 10px 0px 10px",
      backgroundColor: "transparent",
      width: '100%',
      flexDirection: 'column',
    },
    helloBar: {
      top: 0,
      backgroundColor: 'grey',
      width: '100%',
      padding: 10,
    },
    image: {
      flex: 1,
      resizeMode: 'cover',
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    title2: {
      fontSize: 20,
      fontWeight: 'bold',
      alignSelf: 'flex-start,'
    },
    statusTitle: {
      fontSize: 30,
      fontWeight: 'bold',
      alignSelf: 'flex-start',
      padding: 10,
    },
    statusBox: {
      backgroundColor: '#FF8552',
      alignItems: 'center',
      justifyContent: 'center',
      width: '80%', 
      borderRadius: 10,
      marginVertical: 10,
    },
    messageBox: {
      alignContent: 'center',
      backgroundColor: 'transparent',
      padding: 20,
    },
    messageText: {
      fontSize: 40,
      fontWeight: 'bold',
    },
    listItem: {
      width: '80%',
      alignItems: 'flex-start',
    },
    itemList: {
      width: '100%', 
      backgroundColor:'#D3EBCD', 
      margin: 5, 
      padding: 10,
      borderRadius: 5,
    },
    programmeBox: {
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
    },
    separator: {
      marginVertical: 30,
      height: 1,
      width: '80%',
    },
    link: {
      marginTop: 15,
      paddingVertical: 15,
    },
    linkText: {
      fontSize: 14,
      color: '#2e78b7',
    },
    getStartedContainer: {
      alignItems: 'center',
      marginHorizontal: 50,
    },
    homeScreenFilename: {
      marginVertical: 7,
    },
    codeHighlightContainer: {
      borderRadius: 3,
      paddingHorizontal: 4,
    },
    getStartedText: {
      fontSize: 17,
      lineHeight: 24,
      textAlign: 'center',
    },
    helpContainer: {
      marginTop: 15,
      marginHorizontal: 20,
      alignItems: 'center',
    },
    helpLink: {
      paddingVertical: 15,
    },
    helpLinkText: {
      textAlign: 'center',
    },
  });