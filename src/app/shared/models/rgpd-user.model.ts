import {RgpdType} from './RgpdType';

export interface RgpdUser {
  mobile: number;
  rgpdType: RgpdType;
  agreement: File;
}
