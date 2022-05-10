import { Button } from 'antd';
import { useState } from 'react';
import Modal from '../ui/Modal/Modal';
import { ExternalAction } from '../interfaces/external-action.interface';
import s from './ActionButton.module.scss';

interface Props {
  action: ExternalAction;
}

export default function ActionButton(props: Props) {
  const [showModal, setShowModal] = useState(false);
  const { action } = props;
  const { url, title, description, icon, color, openExternally } = action;

  const buttonClicked = () => {
    if (openExternally) {
      window.open(url, '_blank');
    } else {
      setShowModal(true);
    }
  };

  return (
    <>
      <Button
        type="primary"
        className={`${s.button}`}
        onClick={buttonClicked}
        style={{ backgroundColor: color }}
      >
        <img src={icon} className={`${s.icon}`} alt={description} />
        {title}
      </Button>
      <Modal
        title={description || title}
        url={url}
        visible={showModal}
        handleCancel={() => setShowModal(false)}
      />
    </>
  );
}