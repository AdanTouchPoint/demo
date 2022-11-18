import { buildConfig } from 'payload/config';
import Representatives from './collections/Representatives';
import Users from './collections/Users';
import PageContent from './collections/PageContent';
//import {seed} from './seed';
import path from 'path'

const afterChangeHook = path.resolve(__dirname, 'hooks/afterChange.js');
const mockModulePath = path.resolve(__dirname, 'mocks/emptyObject.js');
console.log(afterChangeHook)
export default buildConfig({
  serverURL: 'http://localhost:3000',
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
  collections: [
    Users,
    Representatives,
    PageContent,
   
    // Add Collections here
    // Examples
  ],
 
 });
