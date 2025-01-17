import { Injectable } from '@nestjs/common';
import { CreatePartnerPreferenceDto } from './dto/create-partner-preference.dto';
import { UpdatePartnerPreferenceDto } from './dto/update-partner-preference.dto';

@Injectable()
export class PartnerPreferencesService {
  create(createPartnerPreferenceDto: CreatePartnerPreferenceDto) {
    return 'This action adds a new partnerPreference';
  }

  findAll() {
    return `This action returns all partnerPreferences`;
  }

  findOne(id: number) {
    return `This action returns a #${id} partnerPreference`;
  }

  update(id: number, updatePartnerPreferenceDto: UpdatePartnerPreferenceDto) {
    return `This action updates a #${id} partnerPreference`;
  }

  remove(id: number) {
    return `This action removes a #${id} partnerPreference`;
  }
}
