import dotenv from 'dotenv';

dotenv.config();

const encriptionConfig = {
    key: `${process.env.ENCRYPTION_KEY}`,
    algorithm: 'aes-256-cbc',
    ivLength: 16,
    iv: process.env.ENCRYPTION_IV,
};

export default encriptionConfig;
