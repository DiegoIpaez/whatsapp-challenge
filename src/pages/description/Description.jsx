import DescriptionIcon from '@/components/ui/icon/DescriptionIcon';
import styles from './description.module.css';

const Description = () => {
  return (
    <div className={styles.descriptionContainer}>
      <DescriptionIcon />
      <h1 className={styles.title}>WhatsApp Web</h1>
      <p className={styles.subtitle}>
        Envía y recibe mensajes sin necesidad de tener tu teléfono conectado.
        <br />
        Usa WhatsApp en hasta 4 dispositivos vinculados y 1 teléfono a la vez.
      </p>
      <p className={styles.footerText}>
        Tus mensajes personales están cifrados de extremo a extremo.
      </p>
    </div>
  );
};

export default Description;
