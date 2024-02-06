// lib/fetchImages.ts
// import type { ImagesResults, LocalPhoto } from "@/app/models/Images";
// import { ImagesSchemaWithPhotos } from "@/app/models/Images";

import fs from 'fs';
import path from 'path';

export async function getLocalImages(){
    const directoryPath = path.join(process.cwd(), 'public', 'images');
    const files = fs.readdirSync(directoryPath);
    const data = files.map((file, index, array) => ({
        id: file.split('.')[0],
        src: `/images/${file}`,
        alt: file.split('.')[0],
        previousSrc: index === 0 ? undefined : `/images/${array[index - 1]}`, // Set to undefined instead of null
        nextSrc: index === array.length - 1 ? undefined : `/images/${array[index + 1]}`, // Set to undefined instead of null
    }));
      
    return data;
  }

// const pixelsKey = "QaB4MRFhvCJTfZKxn4eTp6Yn6x0psxFClLKEQudxTam9tuVlmPywS7Dn";


// export default async function fetchImages(url: string,): Promise<ImagesResults | undefined> {
//     try{
//         const res = await fetch(url, {
//             headers:{
//                 Authorization : pixelsKey
//             }
//         })
//         if (!res.ok) throw new Error("Fetch Image error!\n")
//         const imagesResults : ImagesResults = await res.json()
//     console.log(imagesResults)
//     const parsedData = ImagesSchemaWithPhotos.parse(imagesResults)
//     if (parsedData.total_results === 0) return undefined
//     else return parsedData;
//     } catch (e) {
//         if (e instanceof Error) console.log(e.stack)
//     }
// }