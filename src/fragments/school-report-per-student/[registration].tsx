import React, { useState } from 'react';
import {
  StyleSheet,
  Dimensions,
  View,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
// import Pdf from 'react-native-pdf';
import { app } from '../../../../firebase';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';

export default function SchoolReportPerStudent() {
  const [fileUrl, setFileUrl] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  const storage = getStorage(app);

  getDownloadURL(ref(storage, 'nathandb/curriculum.pdf'))
    .then((url) => {
      const xhr = new XMLHttpRequest();
      xhr.responseType = 'blob';
      xhr.onload = (event) => {
        const blob = xhr.response;
      };
      xhr.open('GET', url);
      xhr.send();

      setFileUrl(url);
      setLoading(false);
    })
    .catch((error) => {
      // Handle any errors
    });

  if (loading)
    return (
      <SafeAreaView
        style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
      >
        <ActivityIndicator size={'large'} />
      </SafeAreaView>
    );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        {/* <Pdf
          trustAllCerts={false}
          source={{
            uri: fileUrl,
            cache: true,
          }}
          onLoadComplete={(numberOfPages, filePath) => {
            console.log(`Number of pages: ${numberOfPages}`);
          }}
          onPageChanged={(page, numberOfPages) => {
            console.log(`Current page: ${page}`);
          }}
          onError={(error) => {
            console.log(error);
          }}
          onPressLink={(uri) => {
            console.log(`Link pressed: ${uri}`);
          }}
          style={styles.pdf}
        /> */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 25,
  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
