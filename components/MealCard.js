import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native'

const MealCard = props => {
    return(
        <View style={styles.mealCard}>
            <TouchableOpacity onPress={props.onSelect}>
                <View>
                    <View style={{ ...styles.mealRow, ...styles.header}}>
                        <ImageBackground source={{uri: props.image}} style={styles.image}>
                            <View style={styles.titleContainer}>
                                <Text style={styles.title} numberOfLines={1} >{props.title}</Text>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={{...styles.mealRow, ...styles.detail}}>
                        <Text style={{fontFamily: 'open-sans'}}>{props.affordability}</Text>
                        <Text>{props.complexity}</Text>
                        <Text>{props.duration} Minutes</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    mealRow: {
        flexDirection: 'row',
    },
    mealCard: {
        height: 200,
        width: '100%',
        backgroundColor: '#ccc',
        marginTop: 20,
        borderRadius: 10,
        overflow: 'hidden',
    },
    header: {
        height: '90%'
    },
    detail: {
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '10%'
    },
    image: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 21,
        color: 'white',
    },
    titleContainer: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingVertical: 5,
        paddingHorizontal: 12,
    }
})

export default MealCard