import {
  ClientProviderOptions,
  ClientOptions,
  Transport,
} from '@nestjs/microservices';
import { join } from 'path';

export const heroGrpcClientOptions: ClientProviderOptions = {
  name: 'HERO_PACKAGE',
  transport: Transport.GRPC,
  options: {
    package: 'hero',
    protoPath: join(__dirname, 'hero/hero.proto'),
    // package: ['hero', 'hero2'],
    // protoPath: ['./hero/hero.proto', './hero/hero2.proto'],
  },
};

export const emailGrpcClient: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    url: 'localhost:50001',
    package: 'email',
    protoPath: join(__dirname, '_proto/email.proto'),
  },
};

export const invoiceGrpcClient: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    url: 'localhost:50002',
    package: 'invoice',
    protoPath: join(__dirname, '_proto/invoice.proto'),
  },
};
