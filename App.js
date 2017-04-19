import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { compose, withProps, withHandlers } from 'recompose';

const app = ({ hello, clickMe }) => (
  <View style={styles.container}>
    <Text onPress={clickMe}>{hello}</Text>
  </View>
);

export default compose(
  withProps((props) => ({
    hello: 'world',
  })),
  withHandlers({
    clickMe: () => () => {
      console.log('Clicked');
    }
  })
)(app);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
