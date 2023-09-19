// PDFExportComponent.js
import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
  },
  content: {
    fontSize: 12,
  },
});

const PDFExportComponent = () => {
  return (
    <Document>
      <Page style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.title}>Contenu à exporter en PDF</Text>
          <Text style={styles.content}>
            Ceci est le contenu que vous souhaitez exporter en PDF.
          </Text>
        </View>
      </Page>
    </Document>
  );
};

export default PDFExportComponent;
