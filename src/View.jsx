import React from 'react';
import { Button, Header, Modal } from 'semantic-ui-react';
import { RichText } from '@plone/volto-slate/editor/render';

function View({ data }) {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <Modal
        closeIcon
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        trigger={
          <Button>
            {data.iconImage && (
              <img src={data.iconImage.file_name} alt="" />
            )}{' '}
            {data.titleText}
          </Button>
        }
      >
        <Header icon="archive" content={data.titleText} />
        <Modal.Content>
          <RichText value={data.modalBlocks} />
        </Modal.Content>
      </Modal>
    </>
  );
}

export default View;
