import { Image, Pressable, ScrollView, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'
import { setBackgroundColorAsync } from 'expo-navigation-bar'
import { imgs } from '../../images'
import { colors, font, viewport } from '../../constants'
import { styles } from './home.styles'

const categories = [
  "Remote job", "Full time job", "Part time job", "Web developer", "Public relation"
]

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

export const Home = {
  Page: () => {
    return (
      <>
        <StatusBar animated showHideTransition={'fade'} barStyle={"dark-content"} />
        <View style={styles.header}>
          <View style={styles.HeaderLeft}>
            <Image source={imgs.user} resizeMode='cover' style={styles.userIcon} />
            <View>
              <Text style={styles.greetText}>Good morning</Text>
              <Text style={styles.userName}>Adzohonou Apelete</Text>
            </View>
          </View>
          <View style={styles.HeaderRight}>
            <Pressable style={styles.iconContainer}>
              <Image source={imgs.bell} style={styles.Icon} resizeMode='contain' />
            </Pressable>
            <Pressable style={styles.iconContainer}>
              <Image source={imgs.bars} style={styles.Icon} resizeMode='contain' />
            </Pressable>
          </View>
        </View>

        <ScrollView style={styles.container}>
          <Text style={styles.headerText}>Let’s find your jobs opportunity</Text>
          <View style={styles.searchBar}>
            <Image source={imgs.search} resizeMode='contain' style={styles.searchIcon} />
            <TextInput keyboardType='web-search' placeholder='Search your job' style={styles.searchInput} />
          </View>
          <View style={styles.categories}>
            {categories.map((e, i) => {
              return (
                <Pressable style={styles.ctgItem} key={i}>
                  <Text style={styles.itemText}>{e}</Text>
                </Pressable>
              )
            })}
            <Pressable style={[styles.ctgItem, { backgroundColor: colors.primary }]}>
              <Text style={[styles.itemText, { color: colors.white }]}>More</Text>
            </Pressable>
          </View>
          <Text style={styles.recommendationText}>Recommendations jobs</Text>
          <View style={styles.lists}>
            {array?.map((e, i) => {
              return (
                <View style={[styles.card, styles.shadowProp]} key={i}>
                  <View style={[styles.cardLine, { justifyContent: "flex-start", gap: 15 }]}>
                    <View style={styles.iconContainer}>
                      <View style={styles.greenbg} />
                      <Image source={imgs.company} resizeMode='contain' style={styles.companyIcon} />
                    </View>
                    <View style={styles.jobdetails}>
                      <View style={styles.jobTitle}>
                        <Text style={styles.titleText}>Junior UI/UX Designer</Text>
                      </View>
                      <View style={styles.enterprise}>
                        <Text style={styles.enterpriseText}>Moon Design Agency</Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.cardLine}>
                    <View style={styles.salary}>
                      <Text style={styles.title}>
                        Salary
                      </Text>
                      <View style={[styles.cardLine, {marginVertical: 0, paddingVertical: 0}]}>
                        <Text style={styles.amount}>
                          ($1.5k-2k)
                        </Text>
                        <Text>/month</Text>
                      </View>
                    </View>
                    <View style={styles.candidate}>
                      <Text style={styles.title}>
                        Candidates
                      </Text>
                      <Text style={styles.amount}>
                        450
                      </Text>
                    </View>
                  </View>
                  <View style={styles.cardLine}>
                    <Pressable style={[styles.ctgItem]}>
                      <Text style={[styles.itemText]}>Expert</Text>
                    </Pressable>
                    <Pressable style={[styles.ctgItem]}>
                      <Text style={[styles.itemText]}>Full time</Text>
                    </Pressable>
                    <Pressable style={[styles.ctgItem, { backgroundColor: colors.primary }]}>
                      <Text style={[styles.itemText, { color: colors.white }]}>Apply now</Text>
                    </Pressable>
                  </View>
                </View>
              )
            })}
          </View>
        </ScrollView>
      </>
    )
  }
}