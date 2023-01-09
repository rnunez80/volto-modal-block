import React from 'react'
import {Button, Header, Icon, Modal} from 'semantic-ui-react'

function View({data}) {
  const [open, setOpen] = React.useState(false)
  return (
    <>
      <button onClick={() => setOpen(true)}><img src={data.iconImage.file_name} /> {data.titleText}</button>
      <Modal
        closeIcon
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
      >
        <Header icon='archive' content='Archive Old Messages'/>
        <Modal.Content>
          {data.contentText}
        </Modal.Content>
      </Modal>
    </>
  )
}

export default View
