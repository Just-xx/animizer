import { useEffect, useState } from 'react'
import axios from 'axios';

const AXOLOTL_API = 'https://axoltlapi.herokuapp.com/';
const DOG_API = 'https://random.dog/woof.json';
const CAT_API = 'https://api.thecatapi.com/v1/images/search';



const getAxolotl = async (setUrl, setIsFetched) => {
    const res = await axios.get(AXOLOTL_API);
    setUrl(res.data.url);
    setIsFetched(true);
}

const getCat = async (setUrl, setIsFetched) => {
    const res = await axios.get(CAT_API);
    setUrl(res.data[0].url);
    setIsFetched(true);
}

const getDog = async (setUrl, setIsFetched, setIsVideo) => {
    const res = await axios.get(DOG_API);
    setUrl(res.data.url);
    checkForVideo(res.data.url, setIsVideo)
    setIsFetched(true);
}


const checkForVideo = (url, setIsVideo) => {
    if (url.endsWith('.mp4'))
        setIsVideo(true)
}

export const useAnimal = (animal) => {
    
    const [imgUrl, setImgUrl] = useState(null);
    const [isFetched, setIsFetched] = useState(false);
    const [error, setError] = useState(false);
    const [isVideo, setIsVideo] = useState(false);



    const getImg = async () => {
        try {
            switch (animal) {
                case 'axolotl': await getAxolotl(setImgUrl, setIsFetched); break;
                case 'dog': await getDog(setImgUrl, setIsFetched, setIsVideo); break;
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
        setIsVideo(false)
        getImg();
    }

    useEffect(getImg, [])
    
    return {
        imgUrl,
        isFetched,
        newImg,
        error,
        isVideo
    };
}