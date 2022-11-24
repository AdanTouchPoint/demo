import { buildConfig } from 'payload/config';
import Representatives from './collections/Representatives';
import Users from './collections/Users';
import PageContent from './collections/PageContent';
//import {seed} from './seed';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config({
  path: path.resolve(__dirname, '../.env'),
});

const afterChangeHook = path.resolve(__dirname, 'hooks/afterChange');
const mockModulePath = path.resolve(__dirname, 'mocks/emptyObject.js');

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL || 'http://localhost:3000',
  admin: {
    user: Users.slug,
    webpack: (config) => ({
			...config,
			resolve: {
				...config.resolve,
				alias: {
					...config.resolve.alias,
					[afterChangeHook]: mockModulePath,
				}
			}
		})
  },
  cors: ['*'],
  collections: [
    Users,
    Representatives,
    PageContent,
  ],
 
 });
