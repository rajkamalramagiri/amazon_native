import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import StarRating from 'react-native-star-rating';
import {Card, CardItem, Right} from 'native-base';
class RecommendedCardItem extends Component {
  render() {
    return (
      <CardItem>
        <View>
          <Image style={{height: 90, width: 60}} source={this.props.imageUri} />
        </View>
        <Right
          style={{
            flex: 1,
            alignItems: 'flex-start',
            height: 90,
            paddingHorizontal: 20,
          }}>
          <Text>{this.props.itemName}</Text>
          <Text style={{color: 'grey', fontSize: 11}}>
            {this.props.itemCreator}
          </Text>
          <Text style={{fontSize: 14, color: '#c4402f'}}>
            {this.props.itemPrice}
          </Text>
          <Text>
            {' '}
            <Text style={{color: 'grey', fontWeight: '500', fontSize: 11}}>
              You Save :
            </Text>
            ${this.props.savings}
          </Text>
          <StarRating
            disabled={true}
            maxStars={5}
            rating={this.props.rating}
            starSize={12}
            fullStarColor="orange"
            emptyStarColor="orange"
          />
        </Right>
      </CardItem>
    );
  }
}

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default RecommendedCardItem;
