// import multer from 'multer';

// const storageConfig=multer.diskStorage({
//     destination:(req,file,cb)=>{
//         cb(null,'public/images/');
//     },
//     filename:(res,file,cb)=>{
//         const name=Date.now()+"-"+file.originalname;
//         cb(null,name);
//     },
// })

// export const uploadFile=multer({storage:storageConfig,

// })

import multer from 'multer';
import fs from 'fs';
import path from 'path';

// Directory where files will be saved
const uploadDir = path.resolve('public/images');

// Ensure the directory exists
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

const storageConfig = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        const name = Date.now() + "-" + file.originalname;
        cb(null, name);
    },
});

export const uploadFile = multer({
    storage: storageConfig,
});
