import { buildConfig } from 'payload/config';
import Representatives from './collections/Representatives';
import Users from './collections/Users';
import PageContent from './collections/PageContent';
//import {seed} from './seed';
import path from 'path'

const afterChangeHook = path.resolve(__dirname, 'hooks/afterChange.js');
const mockModulePath = path.resolve(__dirname, 'mocks/emptyObject.js');

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
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
  cors: {
    origin: '*',
},
   collections: [
    Users,
    Representatives,
    PageContent,
   
    // Add Collections here
    // Examples
  ],
 
 });
