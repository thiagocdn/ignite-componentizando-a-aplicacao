import { useState } from 'react';

import { Content } from './components/Content';
import { SideBar } from './components/SideBar';

import './styles/global.scss';

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

export function App() {
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>({} as GenreResponseProps);

  const handleSelectGenre = (genre: GenreResponseProps) => {
    setSelectedGenre(genre)
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar
        handleSelectGenre={handleSelectGenre}
      />
      <Content selectedGenre={selectedGenre} />
    </div>
  )
}