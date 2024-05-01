import React, { useState, useEffect } from 'react';
import {XCircleIcon,ChatBubbleLeftRightIcon, HandThumbUpIcon, InformationCircleIcon  } from "@heroicons/react/24/solid";


function HomePage() {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://nincsugynokbackend-env.eba-tpxptp52.eu-central-1.elasticbeanstalk.com/api/houses/')
      .then(response => response.json())
      .then(data => setItems(data))
      .catch(err => {
        console.error("Error fetching items", err);
        setError("Failed to fetch data");
      });
  }, []);

  const Blob = () => (
    <div className="relative text-center p-8 mb-10">
      <div className="absolute top-0 right-0 h-24 w-1/5 bg-yellow-500 rounded-bl-full flex items-center justify-end">
        <div className="relative z-10 mx-2 text-lg font-bold uppercase text-white text-right">
          ingatlankereskedésnek az új szintje
        </div>
      </div>
    </div>
  );

  const SearchBar = () => (
    <div className="flex flex-col md:flex-row items-center justify-center p-8 bg-gray-800 rounded-md gap-4">
      <select className="px-10 py-2 border rounded w-full md:w-auto" defaultValue="Lakás">
        <option value="Lakás">Lakás</option>
        <option value="Ház">Ház</option>
        <option value="Garázs">Garázs</option>
      </select>
      <input
        type="text"
        placeholder="Hol keresel?"
        className="px-4 py-2 border rounded w-full"
      />
      <select className="px-14 py-2 border rounded w-full md:w-auto" defaultValue="10 millió Ft alatt">
        <option value="10 millió Ft alatt">10 millió Ft alatt</option>
        <option value="10-20 millió Ft">10-20 millió Ft</option>
        <option value="20-30 millió Ft">20-30 millió Ft</option>
        <option value="30 millió Ft felett">30 millió Ft felett</option>
      </select>
      <button className="bg-sky-500 text-white font-semibold px-4 py-2 rounded w-full md:w-auto hover:bg-sky-400 ease-in-out duration-50">
        Keresés
      </button>
    </div>
  );
  
  const FeatureBox = ({ IconComponent, description }) => (
    <div className="group transition  transform border-2 p-4 cursor-pointer">
      <div className="flex justify-center">
        <IconComponent className="h-12 w-12 text-gray-800 group-hover:text-sky-500 duration-100 ease-in-out group-hover:scale-110" />
      </div>
      <p className="mt-2 text-sm text-center">{description}</p>
    </div>
  );

  return (
    <>
    <Blob />
      <div className="container mx-auto px-20 py-8">
        <div className="flex-col items-center px-16"> 
          <h1 className="text-5xl font-semibold text-gray-800 mb-5 text-center">
            Ingatlanok közvetlenül az eladóktól
          </h1>
          <SearchBar />
        </div>
        <div className="flex justify-center">
          <button className="bg-sky-500 text-white font-bold text-2xl px-14 py-3 rounded-lg my-8 hover:bg-sky-400 ease-in-out duration-50 hover:scale-105">
            Ingyenes hirdetésfeladás
          </button>
        </div>

 
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          <div className="flex flex-col lg:col-span-2">
            <div className="flex-grow grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FeatureBox
                IconComponent={XCircleIcon}
                description="Itt az idő, hogy nemet mondjunk az ingatlankereskedők hihetetlen nagy jutalékára, és megadjuk az embereknek azt amire mindig is vágytak. Ingatlanosok nélküli fair kereskedést."
              />
              <FeatureBox
                IconComponent={ChatBubbleLeftRightIcon}
                description="Meguntad, hogy folyamatosan hívnak téged ingatlanügynökök és erősködnek, hogy igenis velük köss üzletet? Semmi gond. Bérelj fel egy díszpécsert aki az igazi, vásárlói szándékkal rendelkező ügyfeleket irányítja át neked!"
              />
            </div>
            <div className="bg-gray-800 text-center p-4 uppercase font-bold text-white">
              ELADÓKNAK
            </div>
          </div>
          
          <div className="flex flex-col lg:col-span-2">
            <div className="flex-grow grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FeatureBox
                IconComponent={HandThumbUpIcon}
                description="Összekötünk közvetlenül az eladókkal. Az ingatlanközvetítői sikerdíj mentes ingatlanár javíthatja az alkupozíciódat is."
              />
              <FeatureBox
                IconComponent={InformationCircleIcon}
                description="Segítünk, hogy hozzáférj fontos információkhoz. Például a pontos cím csak időpontegyeztetéskor derüljön ki."
              />
            </div>
            <div className="bg-gray-800 text-center p-4 uppercase font-bold text-white">
              VÉVŐKNEK
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <h2 className="text-xl font-bold mb-4">Items List</h2>
        <ul className="list-disc pl-5">
          {items.map(item => (
            <li key={item.id} className="mb-2">
              {item.description}: {item.price}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default HomePage;