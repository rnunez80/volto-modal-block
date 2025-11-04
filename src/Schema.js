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
        required: true,
        type: 'object',
      },
      titleText: {
        title: 'Title',
        required: true,
      },
      modalBlocks: {
        title: 'Modal Content',
        widget: 'slate',
      },
    },
    required: [],
  };
};
