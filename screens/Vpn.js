import React, { useEffect, useState } from "react";
import {
  Animated,
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity,
  Text,
  View,
} from "react-native";
import {useNavigation} from '@react-navigation/native';
import globalStyles from '../styles/global';
const { vpnStyles } = globalStyles;
const { width } = Dimensions.get("window");
const BASE_UNIT = 8;

const slides = [
  {
    title: "Secured, forever.",
    description:
      "Secured Curabitur lobortis id lorem id bibendum. Ut id consectetur magna. Quisque volutpat augue enim, pulvinar lobortis.",
    img:
      "https://raw.githubusercontent.com/react-ui-kit/dribbble2react/master/vpn-app/assets/images/welcome.png",
  },
  {
    title: "Encrypted, forever.",
    description:
      "Encrypted Curabitur lobortis id lorem id bibendum. Ut id consectetur magna. Quisque volutpat augue enim, pulvinar lobortis.",
    img:
      "https://raw.githubusercontent.com/react-ui-kit/dribbble2react/master/vpn-app/assets/images/encrypted.png",
  },
  {
    title: "Privacy, forever.",
    description:
      "Privacy Curabitur lobortis id lorem id bibendum. Ut id consectetur magna. Quisque volutpat augue enim, pulvinar lobortis.",
    img:
      "https://raw.githubusercontent.com/react-ui-kit/dribbble2react/master/vpn-app/assets/images/privacy.png",
  },
];

const Dots = ({ scrollX }) => {
  const dotPosition = Animated.divide(scrollX, width);

  return (
    <View style={vpnStyles.dotWrapper}>
      {slides.map((item, index) => {
        const opacity = dotPosition.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [0.3, 1, 0.3],
          extrapolate: "clamp",
        });

        return <Animated.View key={`dot-${index}`} style={[vpnStyles.dot, { opacity }]} />;
      })}
    </View>
  );
};

const SlideTexts = ({ slideIndex }) => {
  const slide = slides[slideIndex];

  return (
    <>
      <Animated.Text style={vpnStyles.title}>{slide && slide.title}</Animated.Text>
      <Animated.Text style={vpnStyles.description}>{slide && slide.description}</Animated.Text>
    </>
  );
};

const SlideImages = ({ scrollX }) => {
  return (
    <View style={{ flex: 2 }}>
      <ScrollView
        horizontal
        pagingEnabled
        scrollEnabled
        decelerationRate={0}
        scrollEventThrottle={BASE_UNIT * 2}
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
          useNativeDriver: false,
        })}>
        {slides.map((item, index) => (
          <View key={`img-${index}`} style={vpnStyles.slideWrapper}>
            <Image source={{ uri: item.img }} resizeMode="contain" style={vpnStyles.slideImage} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const Vpn = () => {
  const navigator= useNavigation();
  const scrollX = new Animated.Value(0);
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    scrollX.addListener(({ value }) => {
      setSlideIndex(Math.floor(value / width));
    });
  });

  return (
    <View style={vpnStyles.container}>
      <SlideImages scrollX={scrollX} />
      <View style={vpnStyles.bottomWrapper}>
        <SlideTexts slideIndex={slideIndex} />
        <Dots scrollX={scrollX} />
        <Animated.View style={vpnStyles.buttonWrapper}>
          <TouchableOpacity activeOpacity={0.75} style={vpnStyles.buttonContainer} onPress={() => {navigator.push('Home')}}>
            <Text style={vpnStyles.buttonTitle}>GET STARTED</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </View>
  );
};



export default Vpn;
