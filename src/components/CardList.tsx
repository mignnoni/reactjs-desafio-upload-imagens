import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [currentUrl, setCurrentUrl] = useState<string>('');

  function handleViewImage(url: string): void {
    setCurrentUrl(url);
    onOpen();
  }

  return (
    <>
      <SimpleGrid columns={[1, 2, 3]} spacing="40px">
        {cards.map(card => (
          // eslint-disable-next-line react/jsx-no-bind
          <Card data={card} key={card.url} viewImage={handleViewImage} />
        ))}
      </SimpleGrid>
      <ModalViewImage isOpen={isOpen} onClose={onClose} imgUrl={currentUrl} />
    </>
  );
}
