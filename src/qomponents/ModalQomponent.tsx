import { useState } from 'react';
import { Button, Modal } from '@seeqdev/qomponents';

function ModalQomponent() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-row border-solid border-gray-300 border p-6 rounded-md w-96">
      <div className="flex flex-col text-left w-full">
        <div className="mb-6">
          <span className="text-lg font-semibold">Modal</span>
        </div>
        <Modal
          open={open}
          onClose={() => {
            setOpen(false);
          }}
          titleIcon="fc-check"
          size="lg"
          title="Modal Title">
          <div className="p-2 text-base">
            This is the content for the modal. It can be anything you want it to be. It can be text, images, or even a
            video!
          </div>
        </Modal>
        <Button
          onClick={() => {
            setOpen(true);
          }}
          variant="theme"
          label="Open Modal"
        />
      </div>
    </div>
  );
}

export default ModalQomponent;
