import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.dotsContainer}>
        <View style={styles.dot}></View>
        <View style={styles.dot}></View>
        <View style={styles.dot}></View>
        <View style={styles.dot}></View>
        <View style={styles.dot}></View>
      </View>
      
      <View style={styles.mainRectangle}>
        <View style={styles.insideBtnRightBottom}></View>
        <View style={styles.insideBtnRight}></View>
        <View style={styles.insideBtnLeft}></View>
      </View>

      <View style={styles.designRow}>
        <Text style={styles.designText}>Design</Text>
        <View style={styles.designDot}></View>
      </View>

      <View style={styles.rectanglesContainer}>
        <View style={styles.rectangle}></View>
        <View style={styles.rectangle}></View>
        <View style={styles.rectangle}></View>
      </View>

      <View style={styles.bottomDotsContainer}>
        <View style={styles.dot}></View>
        <View style={styles.dot}></View>
        <View style={styles.dot}></View>
        <View style={styles.dot}></View>
      </View>
      

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingBottom: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
    padding: 20
  },
  dot: {
    width: 50,
    height: 50,
    borderRadius: 50,
    margin: 10,
    backgroundColor: 'black',
  },
  dotsContainer: {
    flexDirection: 'row',
  },
  mainRectangle: {
    width: '100%',
    position: 'relative',
    height: 300,
    borderRadius: 30,
    margin: 10,
    backgroundColor: 'black',
  },
  insideBtn: {
    width: 70,
    height: 40,
    backgroundColor: 'white',
    position: 'absolute',
    margin: 10,
    borderRadius: 30,
  },
  insideBtnLeft: {
    width: 70,
    height: 40,
    backgroundColor: 'white',
    position: 'absolute',
    margin: 10,
    borderRadius: 30,
    left: 10,
  },
  insideBtnRight: {
    width: 70,
    height: 40,
    backgroundColor: 'white',
    position: 'absolute',
    margin: 10,
    borderRadius: 30,
    right: 10,
  },
  insideBtnRightBottom: {
    width: 70,
    height: 40,
    backgroundColor: 'white',
    position: 'absolute',
    margin: 10,
    borderRadius: 30,
    bottom: 10,
    right: 10,
  },
  designRow: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
  },
  designText: {
    fontSize: 20,
    margin: 10,
  },
  designDot: {
    width: 30,
    height: 30,
    borderRadius: 50,
    margin: 10,
    backgroundColor: 'black',
  },
  rectanglesContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    margin: 20
  },
  rectangle: {
    width: 100,
    height: 200,
    borderRadius: 30,
    margin: 5,
    backgroundColor: 'black',
  },
  bottomDotsContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  }

});
