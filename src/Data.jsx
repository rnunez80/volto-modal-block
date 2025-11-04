import React from 'react';
import { ModalButtonSchema } from './Schema';
import { BlockDataForm } from '@plone/volto/components';

const ModalButtonData = (props) => {
  const { data, block, onChangeBlock, schemaEnhancer } = props;
  const schema = schemaEnhancer
    ? schemaEnhancer(ModalButtonSchema(props), props)
    : ModalButtonSchema(props);

  return (
    <BlockDataForm
      schema={schema}
      title="Modal Button Block"
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
