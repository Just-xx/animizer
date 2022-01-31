import { useEffect, useState } from 'react'
import axios from 'axios';

const corsOn = true;
const cors = url => {
    if (corsOn)
        return 'https://cors-anywhere.herokuapp.com/' + url;
    else
        return url;
} 

const AXOLOTL_API = 'https://axoltlapi.herokuapp.com/';
const DOG_API = 'https://place.dog/300/200';
const CAT_API = 'https://api.thecatapi.com/v1/images/search';



const getAxolotl = async (setUrl, setIsFetched) => {
    const res = await axios.get(cors(AXOLOTL_API));
    setUrl(res.data.url);
    setIsFetched(true);
}

const getCat = async (setUrl, setIsFetched) => {
    const res = await axios.get(cors(CAT_API));
    setUrl(res.data[0].url);
    setIsFetched(true);
}

const getDog = async (setUrl, setIsFetched) => {
    setUrl(DOG_API);
    setIsFetched(true);
}

export const useAnimal = (animal) => {
    
    const [imgUrl, setImgUrl] = useState(null);
    const [isFetched, setIsFetched] = useState(false);
    const [error, setError] = useState(false);

    const getImg = async () => {
        try {
            switch (animal) {
                case 'axolotl': await getAxolotl(setImgUrl, setIsFetched); break;
                case 'dog': await getDog(setImgUrl, setIsFetched); break;
                case 'cat': await getCat(setImgUrl, setIsFetched); break;
            }
        }
        catch (e) {
            setError(true);
        }
    }

    const newImg = () => {
        setError(false);
        setIsFetched(false);
        getImg();
    }

    useEffect(getImg, [])
    
    return {
        imgUrl,
        isFetched,
        newImg,
        error
    };
}