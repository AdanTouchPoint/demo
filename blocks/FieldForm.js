const FormBlock = {
    slug: 'fieldForm', // required
    imageURL: 'https://google.com/path/to/image.jpg',
    imageAltText: 'A nice thumbnail image to show what this block looks like',
    fields: [ // required
      {
        name: 'label',
        type: 'text',
        required: true,
      },
      {
        name: 'placeholder',
        type: 'text',
      },
      {
        label:{es:'Tipo', en:'Type'},
        name: 'type',
        type: 'select', 
        saveToJWT: true,
        options: [
          {
            label: 'Name',
            value:'name'
          },
          {
            label:'Last Name',
            value:'lastName'
          },
          {
            label:'emailUser',
            value:'emailUser'
          },
          {
            label:'State',
            value:'state'
          },
          {
            label:'Postal Code',
            value:'postalCode'
          },
          {
            label:'Age',
            value:'age'
          },
          {
            label:'City',
            value:'city'
          },
          {
            label:'Other',
            value:'other'
          },
        ]
      },
    ]
  };
  module.exports = FormBlock