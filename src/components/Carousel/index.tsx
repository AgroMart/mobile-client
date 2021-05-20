import React, { useState, useCallback, useRef } from 'react';
import { View, Dimensions, Image } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Img1 from '../../assets/carrousel1.png';
import Img2 from '../../assets/carrousel2.png';
import Img3 from '../../assets/carrousel3.png';

import { colors } from '../../styles';

type ItemProps = {
  image: string;
};

const imagesUrl = [
  {
    image: Img1,
  },
  {
    image: Img2,
  },
  {
    image: Img3,
  },
];

const CustomCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [carouselItems] = useState<ItemProps[]>(imagesUrl);
  const ref = useRef(null);

  const windowWidth = Dimensions.get('window').width;

  const renderItem = useCallback(({ item }) => {
    return (
      <Image
        source={item.image}
        style={{ width: '100%', flex: 1 }}
        resizeMode="contain"
      />
    );
  }, []);

  return (
    <View>
      <View>
        <Carousel
          layout="default"
          ref={ref}
          data={carouselItems}
          sliderWidth={windowWidth}
          itemWidth={windowWidth}
          renderItem={renderItem}
          onSnapToItem={(index: number) => setActiveIndex(index)}
        />
      </View>
      <Pagination
        dotsLength={imagesUrl.length}
        activeDotIndex={activeIndex}
        containerStyle={{
          position: 'relative',
          top: '-12%',
        }}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 8,
          opacity: 1,
          backgroundColor: `${colors.white}`,
        }}
        inactiveDotOpacity={0.7}
        inactiveDotScale={0.8}
      />
    </View>
  );
};

export default CustomCarousel;
