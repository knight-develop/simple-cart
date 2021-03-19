import React, { useEffect, useState } from 'react'
function randomImage() {
    const IMAGE_LIST = ['https://cdn.mobilecity.vn/mobilecity-vn/images/2019/07/9x-black.jpg', 'https://cdn.mobilecity.vn/mobilecity-vn/images/2019/03/lenovo-k5.jpg', 'https://cdn.mobilecity.vn/mobilecity-vn/images/2020/07/lenovo-legion-1.jpg']
    const randomIndex = Math.trunc(Math.random() * 3);
    return IMAGE_LIST[randomIndex]
}
function useImage() {
    const [image, setImage] = useState('');
    //
    useEffect(() => {
        const imageInterval = setInterval(() => {
            const newImage = randomImage();
            setImage(newImage)
        }, 1000);
        return () => {
            clearInterval(imageInterval);
        }
    }, [])
    return image;
}

export default useImage
