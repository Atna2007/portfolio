import profileImgLarge from '~/assets/profile-large.jpg';
import profileImgPlaceholder from '~/assets/profile-placeholder.jpg';
import profileImg from '~/assets/profile.jpg';
import { Button } from '~/components/button';
import { DecoderText } from '~/components/decoder-text';
import { Divider } from '~/components/divider';
import { Heading } from '~/components/heading';
import { Image } from '~/components/image';
import { Link } from '~/components/link';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { Transition } from '~/components/transition';
import { Fragment, useState } from 'react';
import { media } from '~/utils/style';
import katakana from './katakana.svg';
import styles from './profile.module.css';

const ProfileText = ({ visible, titleId }) => (
  <Fragment>
    <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
      <DecoderText text="Hola" start={visible} delay={500} />
    </Heading>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      Soy Ariel Navas, un estudiante panameño de 18 años apasionado por la tecnología, la inteligencia artificial y las automatizaciones, actualmente a punto de graduarme y ya trabajando en proyectos reales que combinan creatividad y soluciones modernas. He desarrollado Nor.AI, un chatbot avanzado con contexto creado con Make y OpenAI, proyecto que ganó la Expo Súperate Pro Vivienda, y también formé parte del equipo escolar Game & Fun Technology, con el que creamos un juego educativo para motivar a estudiantes hacia el bachillerato tecnológico. Además, he desarrollado un chatbot profesional para la empresa Autocool Plus, demostrando mis habilidades para crear herramientas digitales útiles y funcionales.
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      Me especializo en automatizaciones, desarrollo web y experiencias digitales limpias, modernas y elegantes, con un estilo visual inspirado en Apple y Tesla, usando colores blanco y celeste, animaciones suaves, efectos brillantes y transiciones fluidas que hagan que cada sección del portafolio se sienta viva y sorprendente. Mi enfoque es crear interfaces con movimiento, imágenes animadas, textos que entran y salen de forma dinámica, y diseños que causen un wow inmediato. Puedes contactarme en navasariel44@gmail.com, donde siempre estoy disponible para proyectos, ideas o colaboraciones tecnológicas.
    </Text>
  </Fragment>
);

export const Profile = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.profile}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible || focused} timeout={0}>
        {({ visible, nodeRef }) => (
          <div className={styles.content} ref={nodeRef}>
            <div className={styles.column}>
              <ProfileText visible={visible} titleId={titleId} />
              
            </div>
            <div className={styles.column}>
              <div className={styles.tag} aria-hidden>
                <Divider
                  notchWidth="64px"
                  notchHeight="8px"
                  collapsed={!visible}
                  collapseDelay={1000}
                />
                <div className={styles.tagText} data-visible={visible}>
                  About me
                </div>
              </div>
              <div className={styles.image}>
                <Image
                  reveal
                  delay={100}
                  placeholder={profileImgPlaceholder}
                  srcSet={`${profileImg} 480w, ${profileImgLarge} 960w`}
                  width={960}
                  height={1280}
                  sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                  alt="Ariel Navas, estudiante apasionado por la tecnología"
                />
                <svg className={styles.svg} data-visible={visible} viewBox="0 0 136 766">
                  <use href={`${katakana}#katakana-profile`} />
                </svg>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
