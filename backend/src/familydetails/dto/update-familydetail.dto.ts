import { PartialType } from '@nestjs/mapped-types';
import { CreateFamilydetailDto } from './create-familydetail.dto';

export class UpdateFamilydetailDto extends PartialType(CreateFamilydetailDto) {}
