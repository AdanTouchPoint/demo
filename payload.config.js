import { buildConfig } from 'payload/config';
import s3Upload from 'payload-s3-upload';
import Representatives from './collections/Representatives';
import Users from './collections/Users';
import MainPage from './collections/MainPage';
//import {seed} from './seed';
import path from 'path';
import dotenv from 'dotenv';
import Media from './collections/Media';
import Emails from './collections/Emails';
import ThankYouMessage from './collections/TYP'; 
import Tweet from './collections/TweetMessage';
import Leads from './collections/Leads';
import pageConfig from './collections/pageConfig';
import Form from './collections/Form';
dotenv.config({
  path: path.resolve(__dirname, '../.env'),
});
import MyCustomLogo from './customComponents/customLogo'
import MyCustomIcon from './customComponents/customIcon'
import RepAus from './collections/RepAus';
import Electorates from './collections/Electorates';
import Analytics from './customComponents/Analytics';
import  AfterNavLinks from './customComponents/AfterNavLinks'
import Questions from './collections/Questions';
import ElectoratesDemo from './collections/ElectoratesDemo';
import RepAuDemo from './collections/RepAuDemo';
import Theme from './collections/Theme';
import NSW from './collections/NSW';
import NSW_Electorates from './collections/NSW_Electorates';
import Vic from './collections/Vic';
import SA from './collections/SA';
import sa_electorates from './collections/SA_Electorates';
import vic_electorates from './collections/Vic_Electorates';
const beforeChangeHook = path.resolve(__dirname, 'hooks/afterChange');
import QLD from './collections/QLD';
import qld_electorates from './collections/QLD_Electorates';
import CandidatesRecord from './collections/CandidatesRecords';
import Newqld from './collections/Newqld';
import CustomeReps from './collections/CustomeReps';
import CustomeElectorates from './collections/CustomeElectorates';
import customeElectoratesV2 from './collections/CustomElectoratesV2';
import CustomeRepsV2 from './collections/CustomRepsV2';
import CandidatesRecordsV2 from './collections/CandidateRecordsV2';
import CitizenGoReps from './collections/CitizenGoReps';
const mockModulePath = path.resolve(__dirname, 'mocks/emptyObject.js');

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL || 'http://localhost:8080',
  admin: {
    components:{
      routes: [
        {
            path: '/analytics',
            Component: Analytics,
        }
      ],
      afterNavLinks: [AfterNavLinks],
      graphics: {
        Icon: MyCustomIcon,
        Logo: MyCustomLogo,
      },
    },
    user: Users.slug,
    webpack: (config) => ({
			...config,
			resolve: {
				...config.resolve,
				alias: {
					...config.resolve.alias,
					[beforeChangeHook]: mockModulePath,
				}
			}
		})
  },
  cors: ['https://app.overton.services','https://payload-demo-tpm.herokuapp.com' ,'*'],
  collections: [
    Users,
    Representatives,
    MainPage,
    Media,
    Emails,
    ThankYouMessage,
    Tweet,
    Leads,
    RepAus,
    Electorates,
    Questions,
    pageConfig,
    Form,
    ElectoratesDemo,
    RepAuDemo,
    Theme,
    NSW,
    NSW_Electorates,
    Vic,
    vic_electorates,
    SA,
    sa_electorates,
    QLD,
    qld_electorates,
    CandidatesRecord,
    Newqld,
    CustomeRepsV2,
    customeElectoratesV2,
    CustomeReps,
    CustomeElectorates,
    CandidatesRecordsV2,
    CitizenGoReps,
  ],
  plugins: [
    s3Upload({
      region: process.env.AWS_REGION,
      credentials: {
        accessKeyId: process.env.AWS_KEY,
        secretAccessKey: process.env.AWS_SECRET,
      },
    }),
  ],
 /*onInit: async (payload) => {
    await seed(payload);
  },*/
 });
