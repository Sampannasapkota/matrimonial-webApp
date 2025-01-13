import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RolesModule } from './roles/roles.module';
import { UsersModule } from './users/users.module';
import { ProvincesModule } from './provinces/provinces.module';
import { DistrictsModule } from './districts/districts.module';
import { ProfilesModule } from './profiles/profiles.module';
import { MessagesModule } from './messages/messages.module';
import { MatchesModule } from './matches/matches.module';
import { InterestsModule } from './interests/interests.module';
import { ReportsModule } from './reports/reports.module';
import { LikesModule } from './likes/likes.module';
import { FamilydetailsModule } from './familydetails/familydetails.module';
import { AuthModule } from './authentication/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    RolesModule,
    UsersModule,
    AuthModule,
    ProvincesModule,
    DistrictsModule,
    ProfilesModule,
    MessagesModule,
    MatchesModule,
    InterestsModule,
    ReportsModule,
    LikesModule,
    FamilydetailsModule,
    ConfigModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
