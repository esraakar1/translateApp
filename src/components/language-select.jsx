import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ReactSelect from "react-select"
import { setSource, setTarget, swap } from '../redux/slices/translateSlice'
import { translateText } from '../redux/actions'

const LanguageSelect = () => {

    const dispatch = useDispatch();

   const { isLoading, languages } = useSelector((store) => store.language);

   const { sourceLang, targetLang, textToTranslate } = useSelector((store) => store.translate);

//    languages dizisinde nesneler code ve name değerlerinden olusuyordu
    // react select ise optionların value ve label değerlerinden oluşan nesneler olmasını istiyorduk
    // biz de languages dizisini dönüp react seleect formatına getirdik
   const formatted = languages.map((item) => ({
    value: item.code,
    label: item.name,
   }));

  return (
    <div className='flex gap-2 text-black'>
       <ReactSelect
         className='flex-1' 
         options={formatted}  
         isLoading={isLoading}
         isDisabled={isLoading}
         value={sourceLang}
         onChange={(selected) => {dispatch(setSource(selected));
         }}
         />

        <button onClick={() => dispatch(swap())} className='bg-zinc-700 py-2 px-6 hover:bg-zinc-800 transition rounded text-white'>Değiş
        </button>

        <ReactSelect 
         className='flex-1' 
         options={formatted}  
         isLoading={isLoading}
         isDisabled={isLoading}
         value={targetLang}
         onChange={(selected) => {
            dispatch(setTarget(selected));

            if (textToTranslate) {
                dispatch(translateText());
            }

         }}
         />
    </div>
  )
}

export default LanguageSelect