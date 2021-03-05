import React, { useState, useCallback, useRef } from 'react';
import { View, Dimensions, Image } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

import { colors } from '../../styles';

type ItemProps = {
  image: string;
};

const imagesUrl = [
  {
    image:
      'https://comps.canstockphoto.com.br/fazenda-alface-filas-banco-de-fotos_csp5956244.jpg',
  },
  {
    image:
      'https://media-cdn.tripadvisor.com/media/photo-s/12/51/e0/0b/vista-da-chegada-na-pousada.jpg',
  },
  {
    image:
      'https://media-cdn.tripadvisor.com/media/photo-s/12/51/e0/0b/vista-da-chegada-na-pousada.jpg',
  },
  {
    image:
      'https://media-cdn.tripadvisor.com/media/photo-s/12/51/e0/0b/vista-da-chegada-na-pousada.jpg',
  },
  {
    image:
      'https://media-cdn.tripadvisor.com/media/photo-s/12/51/e0/0b/vista-da-chegada-na-pousada.jpg',
  },
];

const CustomCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [carouselItems] = useState<ItemProps[]>(imagesUrl);
  const ref = useRef(null);

  const windowWidth = Dimensions.get('window').width;

  const renderItem = useCallback(({ item }) => {
    return <Image source={{ uri: item.image as string }} style={{ flex: 1 }} />;
  }, []);

  return (
    <View style={{ height: '25%' }}>
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
