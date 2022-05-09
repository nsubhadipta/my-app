import { StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get("window");
const BASE_UNIT = 8;

const globals = StyleSheet.create({
  container:{
    padding:24
  }
});
 const loginStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
 const loginStyles1 = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  const vpnStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    slideWrapper: {
      width,
      alignItems: "center",
    },
    slideImage: {
      width: width / 1.5,
      height: "100%",
    },
    title: {
      textAlign: "center",
      fontSize: BASE_UNIT * 3,
      fontWeight: "bold",
    },
    description: {
      textAlign: "justify",
      fontSize: BASE_UNIT * 2,
      marginHorizontal: BASE_UNIT * 3,
      marginVertical: BASE_UNIT * 2,
    },
    bottomWrapper: {
      flex: 1,
      justifyContent: "flex-end",
    },
    buttonTitle: {
      color: "#FFFFFF",
      marginHorizontal: BASE_UNIT * 6,
      marginVertical: BASE_UNIT,
      fontWeight: "bold",
    },
    buttonContainer: {
      backgroundColor: "#00A9FC",
      borderRadius: BASE_UNIT * 2,
    },
    buttonWrapper: {
      alignItems: "center",
      margin: BASE_UNIT * 3,
    },
    dotWrapper: {
      flex: 0,
      flexDirection: "row",
      justifyContent: "center",
      marginVertical: BASE_UNIT,
    },
    dot: {
      flex: 0,
      width: BASE_UNIT,
      height: BASE_UNIT,
      margin: BASE_UNIT / 2,
      borderRadius: BASE_UNIT,
      backgroundColor: "gray",
    },
  });



  export default {globals, loginStyles, loginStyles1, vpnStyles}