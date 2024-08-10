import multer from "multer";
import path from 'path';
import crypto from 'crypto';

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve(__dirname, '..', '..', 'uploads'));
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = crypto.createHash('md5').update('Hello World', 'utf8').digest('hex');
    const prefix = file.originalname.split('.')[0] || 'novo-arquivo';
    cb(null, `${prefix}-${uniqueSuffix}${path.extname(file.originalname)}`);
  }
});

export default multer({ storage });