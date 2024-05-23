import { DiaryEntry,NonSensitiveDiaryEntry } from '../types';
import diaryData from './diaries.json';

const diaries: Array<DiaryEntry> = diaryData as Array<DiaryEntry>;

export const getEntries = () => diaries;


/**
 * Como este metodo no tiene comentarios, 
 * se debe mapear las propiedades de DiaryEntry a NonSensitiveDiaryEntry
 * es decir, se debe omitir la propiedad comment
 * @returns NonSensitiveDiaryEntry
 */
export const getEntriesWithoutComments = (): NonSensitiveDiaryEntry[] => {
    return diaries.map(({id, date, weather, visibility}) => {
        return{
            id,
            date,
            weather,
            visibility
        }
    })
}

export const addEntry = () => null;

