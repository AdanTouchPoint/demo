const configFields = {
    slug: 'Input',
   // imageURL: 'https://google.com/path/to/image.jpg',
    //imageAltText: 'A nice thumbnail image to show what this block looks like',
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
            label: {es:'Nombre', en:'Name'},
            value:'name'
          },
          {
            label:{es:'Apellido', en:'Last Name'},
            value:'lastName'
          },
          {
            label:{es:'Email', en:'Email'},
            value:'emailUser'
          },
          {
            label:{es:'Estado', en:'State'},
            value:'state'
          },
          {
            label:{es:'Codigo Postal', en:'Postal Code'},
            value:'postalCode'
          },
          {
            label:{es:'Edad', en:'Age'},
            value:'age'
          },
          {
            label:{es:'Ciudad', en:'City'},
            value:'city'
          },
          {
            label:{es:'Partido', en:'Party'},
            value:'party'
          },
        ]
      },
    ]
  };
  module.exports = configFields