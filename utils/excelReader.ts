import * as XLSX from 'xlsx';
import path from 'path';

export type LoginData = {
    username: string;
    password: string;
};
export function readExcel(
    filePath: string,
    sheetName: string
): LoginData[]{

    const fullpath=path.resolve(filePath);
    console.log(fullpath)
    const workbook=XLSX.readFile(fullpath);
    const sheet=workbook.Sheets[sheetName];
    const data=XLSX.utils.sheet_to_json<LoginData>(sheet)
    return data;
}