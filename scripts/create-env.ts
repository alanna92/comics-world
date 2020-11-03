import { writeFile } from 'fs';

const targetPath = './src/environments/environment.prod.ts';

const envConfigFile = `export const environment = {
   production: true,
   apiUrl: 'http://gateway.marvel.com/v1/public',
   publicKey: '${process.env.PUBLIC_KEY}',
};
`;

writeFile(targetPath, envConfigFile, 'utf8', (err) => {
    if (err) {
        return console.log(err);
    }
});
