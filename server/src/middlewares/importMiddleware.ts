


import multer from "multer";
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB
export const multerMiddleWare = (inputFieldName: string) => {
    const upload = multer({
        dest: "uploads/temp",
        limits: {
            fileSize: MAX_FILE_SIZE,
        },

        fileFilter: (req, file, cb) => {
            // ✅ allow CSV by extension
            if (!file.originalname.toLowerCase().endsWith(".csv")) {
                return cb(new Error("Only CSV files are allowed"));
            }

            // optional: mime-type check (less reliable)
            const allowedMimeTypes = [
                "text/csv",
                "application/vnd.ms-excel",
            ];

            if (!allowedMimeTypes.includes(file.mimetype)) {
                return cb(new Error("Invalid file type"));
            }

            cb(null, true);
        },
    });
    return upload.single(inputFieldName);

}