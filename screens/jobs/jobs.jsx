import { FlatList, Image, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors, font, viewport } from "../../constants"
import { Jobcard, Tabsheader } from '../../components'
import { imgs } from '../../images'


const categories = [
  { title: "Remote job" }, { title: "Full time job" }, { title: "Part time job" }, { title: "Web developer" }, { title: "Public relation" }
]

const array = [1, 2, 3, 4, 5, 6, 7, 8]

export function Jobs() {
  return (
    <View style={styles.container}>
      <Tabsheader useBackBtn />
      <Text style={styles.headerText}>Browse jobs</Text>
      <View style={styles.searchBar}>
        <Image source={imgs.search} resizeMode='contain' style={styles.searchIcon} />
        <TextInput keyboardType='web-search' placeholder='Search your job' style={styles.searchInput} />
      </View>
      {/* <Text style={styles.subTitle}>Suggestions</Text> */}
      <View style={styles.categories}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={<View style={{
            width: 10
          }} />}
          data={categories}
          renderItem={({ item }) => {
            return (
              <>
                <TouchableOpacity style={styles.ctgItem} keyExtractor={item => item.id}>
                  <Text style={styles.itemText}>{item.title}</Text>
                </TouchableOpacity>
              </>
            )
          }}
        />
        <TouchableOpacity style={[styles.ctgItem, { backgroundColor: colors.primary }]}>
          <Text style={[styles.itemText, { color: colors.white }]}>More</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.subTitle}>Suggestions</Text>
      <>
          <FlatList
          showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.lists}
            centerContent={true}
            data={array}
            renderItem={e => <Jobcard />}
            keyExtractor={item => item.id}
          />
      </>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.tabsBg
  },
  lists: {
    justifyContent: "center",
    paddingHorizontal: 15,
    // marginBottom: viewport.height / 2.6
  },
  subTitle: {
    fontSize: 20,
    fontFamily: font.p6,
    marginTop: 20,
    marginHorizontal: 15
  },
  headerText: {
    fontFamily: font.p6,
    fontSize: 30,
    maxWidth: "65%",
    paddingHorizontal: 15,
  },
  searchBar: {
    flexDirection: "row",
    marginVertical: 15,
    marginHorizontal: 15,
    gap: 10,
    paddingHorizontal: 25,
    paddingVertical: 15,
    backgroundColor: colors.iconbg,
    borderRadius: 999,
    alignItems: 'center'
  },
  searchInput: {
    color: colors.dark,
    fontFamily: font.p4,
    width: "80%"
  },
  searchIcon: {
    width: 25,
    height: 25,
  },
  categories: {
    flexDirection: "row",
    gap: 20,
    marginHorizontal: 15,
    marginVertical: 10
  },
  ctgItem: {
    backgroundColor: colors.iconbg,
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 999,
  },
  itemText: {
    fontFamily: font.p4
  },
})