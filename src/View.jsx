import React from 'react';
import {
  Button,
  Dialog,
  Heading,
  Modal,
  ModalOverlay,
} from 'react-aria-components';
import RenderBlocks from '@plone/volto/components/theme/View/RenderBlocks';

function View({ data, metadata }) {
  const [isOpen, setOpen] = React.useState(false);
  return (
    <>
      <Button onPress={() => setOpen(true)}>
        {data.iconImage && (
          <img src={data.iconImage.file_name} alt={data.titleText} />
        )}
        {data.titleText}
      </Button>
      <ModalOverlay isOpen={isOpen} onOpenChange={setOpen}>
        <Modal>
          <Dialog>
            <Heading>{data.titleText}</Heading>
            <RenderBlocks content={data.modalBlocks} metadata={metadata} />
          </Dialog>
        </Modal>
      </ModalOverlay>
    </>
  );
}

export default View;
