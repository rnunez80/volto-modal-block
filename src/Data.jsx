import React from 'react';
import { ModalButtonSchema } from './Schema';
import { BlockDataForm } from '@plone/volto/components';
import { useIntl, defineMessages } from 'react-intl';

const messages = defineMessages({
  ModalButtonBlock: {
    id: 'ModalButton Block',
    defaultMessage: 'ModalButton Block',
  },
});

const ModalButtonData = (props) => {
  const { data, block, onChangeBlock, schemaEnhancer } = props;
  const intl = useIntl();
  const schema = schemaEnhancer
    ? schemaEnhancer(ModalButtonSchema({ ...props, intl }), props)
    : ModalButtonSchema({ ...props, intl });

  return (
    <BlockDataForm
      schema={schema}
      title='Modal Button Block'
      onChangeField={(id, value) => {
        onChangeBlock(block, {
          ...data,
          [id]: value,
        });
      }}
      formData={data}
      fieldIndex={data.index}
      block={block}
    />
  );
};

export default ModalButtonData;
