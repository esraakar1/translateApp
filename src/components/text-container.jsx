import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setText } from '../redux/slices/translateSlice';
import Loader from './loader';

const TextContainer = () => {
    const { isLoading, textToTranslate, translatedText} = useSelector((store) => store.translate
);
    const dispatch = useDispatch();
  return (
    <div className='flex gap-3 mt-5 md:gap-[150px] max-md:flex-col'>
        <div className='flex-1'>
            <textarea
            value={textToTranslate}
             onChange={(e) => dispatch(setText(e.target.value))} className='w-full min-h-[250px] max-h-[500px] text-black text-[20px] rounded p-[10px] bg-white'></textarea>
        </div>
        <div className='flex-1 relative'>
            <textarea
             value={translatedText}
             disabled
             className='w-full min-h-[250px] max-h-[500px] text-black text-[20px] rounded p-[10px] bg-gray-500 text-gray-200'></textarea>

             {isLoading && <Loader /> }
        </div>
    </div>
  )
}

export default TextContainer;