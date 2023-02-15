import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { presenters } from '@infrastructure/persistence/presenters';
import { repositories } from '@infrastructure/persistence/repositories';
import { schemas } from '@infrastructure/persistence/schemas';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5422,
      username: 'customers',
      password: 'customers',
      database: 'customers',
      synchronize: true,
      autoLoadEntities: true,
    }),
    TypeOrmModule.forFeature(schemas),
  ],
  providers: [...presenters, ...repositories],
  exports: [...repositories.map((repo) => repo.provide)],
})
export class InfrastructureModule {}
