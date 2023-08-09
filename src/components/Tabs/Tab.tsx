import { StyleSheet, Text, View , FlatList } from 'react-native';
import React from 'react';
import BtnTab from './BtnTab';

interface Props{
    tabs: string[],
    activeTab: string,
    setActiveTab: any
}

const Tab = ({ tabs, activeTab, setActiveTab }: Props) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={tabs}   
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <BtnTab
            name={item}
            activeTab={activeTab}
            onHandleSearchType={() => setActiveTab(item)}
          />
        )}
        contentContainerStyle={{ }}
        keyExtractor={(item) => item}
      />
    </View>
  )
}

export default Tab

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        marginBottom: 8,
        alignItems: 'center'
    },
})