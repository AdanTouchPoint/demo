const myBucketUrl = 'https://api-tpm-images.s3.us-west-1.amazonaws.com/img'
const Media = {
  slug: 'media',
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
        width: 768,
        height: 1024,
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