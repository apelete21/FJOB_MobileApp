import { Image, Pressable, StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native'
import React from 'react'
import { colors, font } from '../constants'
import { imgs } from '../images'

export function Jobcard({data}) {
  return (
      <View style={[styles.card, styles.shadowProp]}>
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
                  <View style={[styles.cardLine, { marginVertical: 0, paddingVertical: 0 }]}>
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
}

export function JobCardLight() {
  return (
      <TouchableNativeFeedback>
          <View style={[styles.card, styles.shadowProp]}>
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
          </View>
      </TouchableNativeFeedback>
  )
}


const styles = StyleSheet.create({
    companyIcon: {
        width: "65%",
        height: "65%",
        backgroundColor: colors.primary,
    },
    iconContainer: {
        position: "relative",
        width: 62,
        height: 62,
        backgroundColor: colors.primary,
    },
    greenbg: {
        backgroundColor: colors.primary,
        borderRadius: 999,
        position: "absolute",
        width: "100%",
        height: '100%',
    },
    title: {
        fontSize: 12,
        fontFamily: font.p3
    },
    amount: {
        fontSize: 25,
        fontFamily: font.p6,
        textAlign: "right"
    },
    titleText: {
        fontFamily: font.p7,
        fontSize: 18,
    },
    enterpriseText: {
        fontFamily: font.p6,
        fontSize: 12,
        color: colors.tertiary
    },
    cardLine: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: 17
    },
    shadowProp: {
        shadowColor: "rgba(0,0,0,0.3)",
        elevation: 10,
    },
    card: {
        backgroundColor: colors.white,
        borderRadius: 25,
        paddingVertical: 20,
        paddingHorizontal: 28,
        marginVertical: 10,
    },
    lists: {
        alignItems: "center",
    },
    subTitle: {
        fontSize: 20,
        fontFamily: font.p6,
        marginTop: 20,
    },
    categories: {
        flexDirection: "row",
        flexWrap: 'wrap',
        gap: 20,
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
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: colors.tabsBg,
        paddingHorizontal: 15,
        paddingVertical: 20
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
    container: {
        paddingHorizontal: 15,
        paddingBottom: 50,

    },
    HeaderLeft: {
        gap: 10,
        flexDirection: "row",
        alignItems: "center"
    },
    userIcon: {
        width: 50,
        height: 50,
    },
    greetText: {
        fontFamily: font.p4,
        fontSize: 12,
        color: colors.tertiary
    },
    userName: {
        fontFamily: font.p6
    },
    HeaderRight: {
        flexDirection: "row",
        gap: 20,
        alignItems: "center",
    },
    iconContainer: {
        width: 50,
        height: 50,
        backgroundColor: colors.iconbg,
        borderRadius: 999,
        alignItems: 'center',
        justifyContent: 'center'
    },
    Icon: {
        width: "50%",
        height: "50%",

    }
})