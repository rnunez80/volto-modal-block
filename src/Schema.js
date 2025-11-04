export const ModalButtonSchema = (props) => {
  const {intl} = props;

  return {
    title: 'Modal Block',
    fieldsets: [
      {
        id: 'default',
        title: 'Default',
        fields: ['iconImage', 'titleText', 'modalBlocks'],
      },
    ],

    properties: {
      iconImage: {
        title: 'icon',
        type: 'object',
      },
      titleText: {
        title: 'Title',
      },
      modalBlocks: {
        title: 'Modal Content',
        type: 'blocks',
      },
    },
    required: ['iconImage', 'titleText'],
  };
};
