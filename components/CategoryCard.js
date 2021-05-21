import React from 'react' 
import { TouchableOpacity, View, Text, StyleSheet, TouchableNativeFeedback, Platform } from 'react-native'

const CategoryCard = props => {

    let TouchableComponent = TouchableOpacity

    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableComponent = TouchableNativeFeedback
    }
    return(
        // make each grid item touchable, linked to the CategoryMeals container
        <View style={styles.gridItem}>
            <TouchableComponent style={{flex: 1}} onPress={props.onSelect} >
                <View style={{...styles.container, ...{backgroundColor: props.color}}}>
                    {/* place title from CATEGORIES data in Text tag */}
                    <Text style={styles.title} >{props.title}</Text>
                </View>
            </TouchableComponent>
        </View>
    )
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius: 10,
        overflow: 'hidden',
    },
    container: {
        flex: 1,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowRadius: 10,
        elevation: 3,
        padding: 10,
        justifyContent: 'flex-end',
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 21
    }
}) 

export default CategoryCard