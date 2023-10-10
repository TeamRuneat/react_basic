import { MulterModule } from '@nestjs/platform-express';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MulterOptions } from '@nestjs/platform-express/multer/interfaces/multer-options.interface';
import * as multerS3 from 'multer-s3';
import { S3Client } from '@aws-sdk/client-s3';

const multerOptionsFactory = (configService: ConfigService): MulterOptions => ({
  storage: multerS3({
    s3: new S3Client({
      region: configService.get('AWS_S3_REGION'),
      credentials: {
        accessKeyId: configService.get('AWS_S3_ACCESS_KEY_ID'),
        secretAccessKey: configService.get('AWS_S3_SECRET_ACCESS_KEY'),
      },
    }),
    bucket: configService.get('AWS_S3_BUCKET'),
    contentType: multerS3.AUTO_CONTENT_TYPE,
    cacheControl: 'max-age=31536000',
    key: function (req, file, cb) {
      cb(null, Date.now().toString());
    },
  }),
});

export default () =>
  MulterModule.registerAsync({
    imports: [ConfigModule],
    useFactory: multerOptionsFactory,
    inject: [ConfigService],
  });
