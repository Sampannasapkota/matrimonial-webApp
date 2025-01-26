import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RolesModule } from './roles/roles.module';
import { UsersModule } from './users/users.module';

import { ProfilesModule } from './profiles/profiles.module';
import { MessagesModule } from './messages/messages.module';
import { MatchesModule } from './matches/matches.module';
import { InterestsModule } from './interests/interests.module';
import { ReportsModule } from './reports/reports.module';
import { LikesModule } from './likes/likes.module';
import { FamilydetailsModule } from './familydetails/familydetails.module';
import { AuthModule } from './authentication/auth.module';
import { ConfigModule } from '@nestjs/config';
import { UploadPhotosModule } from './upload-photos/upload-photos.module';
import { PartnerPreferencesModule } from './partner-preferences/partner-preferences.module';
import { CloudinaryModule } from './cloudinary/cloudinary.module';
import { DemographicDetailsModule } from './demographic-details/demographic-details.module';


@Module({
  imports: [
    CloudinaryModule,
    RolesModule,
    UsersModule,
    AuthModule,
   DemographicDetailsModule,
    ProfilesModule,
    MessagesModule,
    MatchesModule,
    InterestsModule,
    ReportsModule,
    LikesModule,
    FamilydetailsModule,
    ConfigModule.forRoot(),
    UploadPhotosModule,
    PartnerPreferencesModule,
    DemographicDetailsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
