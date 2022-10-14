import React, {useState} from "react";
import GestureFlipView from 'react-native-gesture-flip-card';

const Card = (props) => {

    const renderFront = () => {
        return (
          <View style={styles.frontStyle}>
            <Text style={{fontSize: 25, color: '#fff'}}>{'Front'}</Text>
          </View>
        );
      };
      
      const renderBack = () => {
        return (
          <View style={styles.backStyle}>
            <Text style={{fontSize: 25, color: '#fff'}}>{'Back'}</Text>
          </View>
        );
      };

    return (
        <View style={styles.container} className="card">
        <GestureFlipView width={300} height={500}>
            {renderBack()}
            {renderFront()}
            </GestureFlipView>
        </View>
      
    )

}

export default Card;