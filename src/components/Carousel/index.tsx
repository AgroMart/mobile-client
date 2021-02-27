/* eslint-disable react/no-unused-prop-types */
import React, { useState, useCallback, useRef } from 'react';
import { View, Dimensions, Image } from 'react-native';

import Carousel, { Pagination } from 'react-native-snap-carousel';

type ItemProps = {
  image: string;
};

type RenderItemProps = {
  item: ItemProps;
  index: number;
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

  const renderItem = useCallback(({ item }: RenderItemProps) => {
    return <Image source={{ uri: item.image }} style={{ flex: 1 }} />;
  }, []);

  return (
    <View style={{ height: '22%' }}>
      <View>
        <Carousel
          layout="tinder"
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
          backgroundColor: '#fff',
        }}
        inactiveDotOpacity={0.7}
        inactiveDotScale={0.8}
      />
    </View>
  );
};

export default CustomCarousel;
