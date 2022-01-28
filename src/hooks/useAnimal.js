import { useEffect, useState } from 'react'
import axios from 'axios';

const cors = url => {
    return 'https://cors-anywhere.herokuapp.com/' + url;
} 

const AXOLOTL_API = 'https://axoltlapi.herokuapp.com/';
const DOG_API = 'https://place.dog/300/200';
const CAT_API = 'https://api.thecatapi.com/v1/images/search';

const getAxolotl = async (setUrl, setLoaded) => {
    const res = await axios.get(cors(AXOLOTL_API));
    setUrl(res.data.url);
    setLoaded(true);
}

const getCat = async (setUrl, setLoaded) => {
    const res = await axios.get(cors(CAT_API));
    console.log('aaa')
    setUrl(res.data[0].url);
    setLoaded(true);
}

const getDog = async (setUrl, setLoaded) => {
    const res = await axios.get(cors(DOG_API));
    console.log(res)
    setUrl(res.data[0].url);
    setLoaded(true);
}

export const useAnimal = (animal) => {
    
    const [imgUrl, setImgUrl] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    const getImg = () => {
        switch (animal) {
            case 'axolotl': getAxolotl(setImgUrl, setIsLoaded); break;
            case 'dog': getDog(setImgUrl, setIsLoaded); break;
            case 'cat': getCat(setImgUrl, setIsLoaded); break;
        }
    }

    const newImg = () => {
        setIsLoaded(false);
        getImg();
    }

    useEffect(getImg, [])
    
    return {
        imgUrl,
        isLoaded,
        newImg
    };
}