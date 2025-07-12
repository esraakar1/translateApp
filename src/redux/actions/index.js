import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../utils/api"; 

export const getLanguages = createAsyncThunk("language/getLanguages", async () => {
    // apidan dil verilerini alıp 
   const res = await api.get("/getLanguages")

    // aldığı verileri payload olarak belirle
    return res.data.data.languages;
});

export const translateText = createAsyncThunk("translate/translateText",
    async (arg, { getState }) => {
        // aksiyon içinde store a abone olmak için getstate kullanılır
    const { translate } = getState();

//    api a gönderilecek olan parametreleri belirle
const params = new URLSearchParams();
params.set("source_language", translate.sourceLang.value);
params.set("target_language", translate.targetLang.value);
params.set("text", translate.textToTranslate);
// api a istek at 
const res = await api.post("/translate", params);

// aldığı cevrilmiş metni payload olarak belirle 

    return res.data.data.translatedText;
})