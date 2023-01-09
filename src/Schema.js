export const ModalButtonSchema = (props) => {
  const {intl} = props;

  return {
    title: 'Modal Block',
    fieldsets: [
      {
        id: 'default',
        title: 'Default',
        fields: ['iconImage', 'titleText', 'contentText'],
      },
    ],

    properties: {
      iconImage: {
        title: 'icon',
        required: true,
        type: 'object',
      },
      titleText: {
        title: 'Title',
        required: true,
      },
      contentText: {
        title: 'Text',
        widget: 'textarea',
        type: 'wysiwyg',
        required: true,
      },
    },
    required: [],
  };
};
