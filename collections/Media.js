import { isAdminOrSelf } from "../access/isAdminOrSelf";
import { isAdminFieldLevel } from "../access/isAdmin";

const myBucketUrl = 'https://api-tpm-images.s3.us-west-1.amazonaws.com/img'
const Media = {
  slug: 'imagenes',
  admin: {
    description:{
      es:'Si tienes algun prblema con tu imagen intenta convertirla a formato .jpg',
      en: 'If you have any trouble with your image try convert to .jpg format'
    }
  },
  labels: {
    singular: {
      en: 'Image', es: 'Imagen',
    },
    plural: {
      en: 'Images', es: 'Imagenes',
    },
  },
  access: {
    // Only admins can create users
    create: isAdminOrSelf,
    // Admins can read all, but any other logged in user can only read themselves
    read: isAdminOrSelf,
    // Admins can update all, but any other logged in user can only update themselves
    update: isAdminOrSelf,
    // Admins can update all, but any other logged in user can only update themselves
    delete: isAdminOrSelf,
  },
  fields:[{
    name: "clientId",
    type: "relationship",
    relationTo: "users",
    required: true,
    admin: { hidden: true },
    // If user is not admin, set the site by default
    // to the first site that they have access to
    defaultValue: ({ user }) => {
      if (user) {
        return user.id;
      }
    },
    access: {
      // Only admins can create users
      create: isAdminFieldLevel,
      // Admins can update all, but any other logged in user can only update themselves
      update: isAdminFieldLevel,
    },
  }],
  upload: {
    staticURL: '/media',
    staticDir: 'media',
    disableLocalStorage: true,
    s3: {
      bucket: 'api-tpm-images',
      prefix: 'img', // files will be stored in bucket folder images/xyz
      // prefix: ({ doc }) => `assets/${doc.type}`, // dynamic prefixes are possible too
      commandInput: {
        // optionally, use here any valid PutObjectCommandInput property
        // https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3/interfaces/putobjectcommandinput.html
        ACL: 'public-read',  
      },
    },
    imageSizes: [
      {
        name: 'thumbnail',
        width: 400,
        height: 300,
        position: 'centre',
      },
      {
        name: 'card',
        width: 1150,
        height: 350,
        position: 'centre',
      },
      {
        name: 'tablet',
        width: 1024,
        // By specifying `null` or leaving a height undefined,
        // the image will be sized to a certain width,
        // but it will retain its original aspect ratio
        // and calculate a height automatically.
        height: null,
        position: 'centre',
      },
    ],
    adminThumbnail: 'thumbnail',
    mimeTypes: ['image/*'],
  },
  hooks: {
    afterRead: [
      ({ doc }) => {
        // add a url property on the main image
        doc.url = `${myBucketUrl}/${doc.filename}`

        // add a url property on each imageSize
        Object.keys(doc.sizes)
          .forEach(k => doc.sizes[k].url = `${myBucketUrl}/${doc.sizes[k].filename}`)
      }
    ]
  },
};
   
export default Media;