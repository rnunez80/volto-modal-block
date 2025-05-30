import React from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';
import RenderBlocks from '@plone/volto/components/theme/View/RenderBlocks';

function View({ data, metadata }) {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <button onClick={() => setOpen(true)}>
        {data.iconImage && <img src={data.iconImage.file_name} alt="" />} {/* Added alt attribute for accessibility */}
        {data.titleText}
      </button>
      <Modal
        closeIcon
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
      >
        <Header icon="archive" content={data.titleText} />
        <Modal.Content>
          <RenderBlocks content={data.modalBlocks} metadata={metadata} />
        </Modal.Content>
      </Modal>
    </>
  );
}

export default View;
