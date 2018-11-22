import { Module } from '@nestjs/common';
import { join } from 'path';
import { AngularUniversalModule, applyDomino } from '@nestjs/ng-universal';

@Module({
  imports: [
    AngularUniversalModule.forRoot({
      viewsPath: join(process.cwd(), 'dist/angular-social'),
      bundle: require('./../dist/angular-social-server/main.js'),
    }),
  ],
})
export class ApplicationModule {}
