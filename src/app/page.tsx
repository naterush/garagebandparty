'use client';
// pages/index.tsx
import { useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

const Home: NextPage = () => {
  const [currentSong, setCurrentSong] = useState<HTMLAudioElement | null>(null);
  const [currentSongURL, setCurrentSongURL] = useState<string | null>(null);

  const playSong = (songUrl: string) => {
    if (currentSong) {
      currentSong.pause();
    }
    if (songUrl === currentSongURL) {
      setCurrentSong(null);
      setCurrentSongURL(null);
      return;
    }

    const audio = new Audio(songUrl);
    setCurrentSong(audio);
    setCurrentSongURL(songUrl);
    audio.play();
  };

  return (
    <div>
      <Head>
        <title>GarageBand Party</title>
        <meta name="description" content="Listen to our GarageBand party songs!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-white flex flex-col items-center justify-center py-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col items-center">
            <div className="w-64 h-64 border shadow-lg rounded-lg cursor-pointer transform transition duration-500 hover:rotate-3" onClick={() => playSong('forgetting_and_remembering.mp3')}>
              <Image src="forgetting_and_remembering.jpg" alt="Forgetting and Remembering Album Cover" className="w-full h-full object-cover"/>
              <span style={{top: '-20px', right: '0'}} className="absolute transform rotate-15 text-2xl text-yellow-400">👑</span>
            </div>
            <p className="mt-2 text-gray-700 text-base text-center">
              Forgetting and Remembering <br/> (Bristol to Central Park) <br/>
              <span className="text-sm text-green-500">~ Gus, Maggie, Miles, Sav</span> <br/>
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-64 h-64 border shadow-lg rounded-lg overflow-hidden cursor-pointer transform transition duration-500 hover:rotate-3" onClick={() => playSong('octopussy_disco.mp3')}>
              <Image src="octopussy_disco.jpg" alt="Octopussy Disco Album Cover" className="w-full h-full object-cover"/>
            </div>
            <p className="mt-2 text-gray-700 text-base text-center">
              Octopussy <br/> Disco <br/>
              <span className="text-sm text-green-500">~ Nate, Noah, Nick, Shalan</span>
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home;
