import { FlatList, Image, Pressable, SafeAreaView, ScrollView, Text, TextInput, TouchableHighlight, View } from 'react-native'
import { imgs } from '../../images'
import { colors, font, viewport } from '../../constants'
import { styles } from './home.styles'
import { StatusBar } from 'expo-status-bar'
import { JobCardLight, Tabsheader } from '../../components'

const categories = [
  { title: "Remote job" }, { title: "Full time job" }, { title: "Part time job" }, { title: "Web developer" }, { title: "Public relation"}
]

const array = [1, 2, 3, 4, 5, 6, 7, 8]

export function Home() {
  return (
    <View style={{ backgroundColor: colors.tabsBg, flex: 1, }}>
      <StatusBar style='auto' />
      <Tabsheader />
      <Text style={styles.headerText}>Let’s find your jobs opportunity</Text>
      <View style={styles.searchBar}>
        <Image source={imgs.search} resizeMode='contain' style={styles.searchIcon} />
        <TextInput keyboardType='web-search' placeholder='Search your job' style={styles.searchInput} />
      </View>
      <View style={styles.categories}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={<View style={{
            width: 10
          }} />}
          data={categories}
          keyExtractor={item => item?.id}
          renderItem={({item})=>{
            return (
              <>
                <TouchableHighlight style={styles.ctgItem} keyExtractor={item => item.id}>
                  <Text style={styles.itemText}>{item.title}</Text>
                </TouchableHighlight>
              </>
            )
          }}
        />
        <Pressable style={[styles.ctgItem, { backgroundColor: colors.primary }]}>
          <Text style={[styles.itemText, { color: colors.white }]}>More</Text>
        </Pressable>
      </View>
      <Text style={styles.subTitle}>Recommendations jobs</Text>

      <>
          <FlatList
            contentContainerStyle={styles.lists}
            centerContent={true}
            data={array}
            renderItem={e => <JobCardLight />}
            keyExtractor={item => item?.id}
          />
      </>

    </View>
  )
}