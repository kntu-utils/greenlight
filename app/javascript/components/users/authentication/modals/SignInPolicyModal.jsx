import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function SignInPolicyModal() {
  const { t } = useTranslation();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const hasSeenHint = localStorage.getItem('hasSeenHint');
    if (!hasSeenHint) {
      setShowModal(true);
      localStorage.setItem('hasSeenHint', true);
    }
  }, []);

  return (
    <Modal
      show={showModal}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      backdrop
      onHide={() => setShowModal(false)}
    >
      <Modal.Body className="text-justify pe-4">
        <p>{t('authentication.new_policy.header')}</p>
        <ul>
          <li>{t('authentication.new_policy.ldap_sign_in.title')}</li>
          <p>{t('authentication.new_policy.ldap_sign_in.description')}</p>

          <li>{t('authentication.new_policy.ldap_mails_new.title')}</li>
          <p>{t('authentication.new_policy.ldap_mails_new.description')}</p>

          <li>{t('authentication.new_policy.password_reset.title')}</li>
          <p>{t('authentication.new_policy.password_reset.description')}</p>
        </ul>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="brand-outline-color" onClick={() => setShowModal(false)}>{t('close')}</Button>
      </Modal.Footer>
    </Modal>
  );
}
