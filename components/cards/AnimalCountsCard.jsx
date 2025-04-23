import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from '../../styles/components/cards/AnimalCountsCardStyles.js';

export default function AnimalCountsCard({ galloCount, gallinaCount, pollitoCount, openScreen }) {
  
  return (
    <TouchableOpacity onPress={openScreen} >
      <View style={styles.cardContainer}>
      <View style={styles.animalRow}>
        <View style={styles.animalItem}>
          <Image source={require('../../assets/img/gallina-icon.png')} style={styles.animalImage} />
          <Text style={styles.animalCount}>{gallinaCount}</Text>
        </View>
        <View style={styles.animalSmallItem}>
          <Image source={require('../../assets/img/pollito-icon.png')} style={styles.animalSmallImage} />
          <Text style={styles.animalSmallCount}>{pollitoCount}</Text>
        </View>
        <View style={styles.animalItem}>
          <Text style={styles.animalCount}>{galloCount}</Text>
          <Image source={require('../../assets/img/gallo-reverse-icon.png')} style={styles.animalImage} />
        </View>
      </View>
      </View>
    </TouchableOpacity>
  );
}