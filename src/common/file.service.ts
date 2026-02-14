import { Injectable } from '@nestjs/common';
import * as fs from 'fs';

@Injectable()
export class FileService {

  readJSON(path: string) {
    return JSON.parse(fs.readFileSync(path, 'utf-8'));
  }

  writeJSON(path: string, data: any) {
    fs.writeFileSync(path, JSON.stringify(data, null, 2));
  }
}
