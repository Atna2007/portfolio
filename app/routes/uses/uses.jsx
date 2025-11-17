import usesBackgroundPlaceholder from '~/assets/uses-background-placeholder.jpg';
import usesBackground from '~/assets/uses-background.mp4';
import { Footer } from '~/components/footer';
import { Link } from '~/components/link';
import { List, ListItem } from '~/components/list';
import { Table, TableBody, TableCell, TableHeadCell, TableRow } from '~/components/table';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { baseMeta } from '~/utils/meta';
import styles from './uses.module.css';

export const meta = () => {
  return baseMeta({
    title: 'Herramientas',
    description: 'Una lista de hardware y software que uso para hacer mi trabajo',
  });
};

export const Uses = () => {
  return (
    <>
      <ProjectContainer className={styles.uses}>
        <ProjectBackground
          src={usesBackground}
          placeholder={usesBackgroundPlaceholder}
          opacity={0.7}
        />
        <ProjectHeader
          title="Herramientas"
          description="Una lista bastante completa de herramientas, aplicaciones, hardware y más que uso diariamente para diseñar y programar. Y sí, ese es un GIF de Johnny Mnemonic en el fondo."
        />
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Diseño</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    <Link href="https://www.figma.com">Figma</Link> es mi herramienta principal para
                    diseño de UI en estos días. Cambié de Sketch en 2020 y no he mirado atrás. También he creado{' '}
                    <Link href="https://www.figma.com/@hamish">algunos plugins</Link> que
                    puedes instalar.
                  </ListItem>
                  <ListItem>
                    Cualquier gráfico de movimiento que creo se hace en Adobe After Effects. Hasta ahora
                    no he encontrado un producto no-Adobe que sea tan bueno. Si alguien tiene
                    sugerencias por favor <Link href="/contact">envíame un mensaje</Link>.
                  </ListItem>
                  <ListItem>
                    Para modelos 3D y edición de video uso{' '}
                    <Link href="https://www.blender.org/">Blender</Link>. Desde la 2.8 se ha
                    vuelto mucho más simple de usar y en muchos aspectos mejor que herramientas caras como 3DS Max o Maya.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Desarrollo</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    Uso <Link href="https://vscodium.com/">VSCodium</Link> como mi editor de texto,
                    con el tema Tokyo Night y Operator Mono como mi tipografía de
                    elección.
                  </ListItem>
                  <ListItem>
                    Firefox es mi navegador principal tanto para desarrollo como para uso general.
                  </ListItem>
                  <ListItem>
                    <Link href="https://reactjs.org/">React</Link> es mi librería de
                    Javascript para front end de elección. El modelo mental centrado en componentes es
                    lo primero que realmente tuvo sentido para mí como diseñador.
                  </ListItem>
                  <ListItem>
                    Para efectos 3D y shaders de imagen uso{' '}
                    <Link href="https://threejs.org/">three.js</Link>. Tiene una curva de aprendizaje
                    pero puedes hacer cosas realmente poderosas con él.
                  </ListItem>
                  <ListItem>
                    Para CSS he usado una miríada de pre-procesadores y soluciones css-in-js como
                    styled-components, pero estos días estoy usando CSS vanilla con{' '}
                    <Link href="https://postcss.org/">PostCSS</Link> para obtener características de CSS futuras hoy.
                  </ListItem>
                  <ListItem>
                    Para animaciones en Javascript uso{' '}
                    <Link href="https://www.framer.com/motion/">Framer Motion</Link>, es
                    una gran manera de agregar animaciones de resorte a React y three.js.
                  </ListItem>
                  <ListItem>
                    Para construir y probar componentes de UI en aislamiento uso{' '}
                    <Link href="https://storybook.js.org/">Storybook</Link>. Revisa el{' '}
                    <Link href="https://storybook.hamishw.com">
                      storybook para este sitio web
                    </Link>
                    .
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow stretch width="m">
              <ProjectSectionHeading>Sistema</ProjectSectionHeading>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableHeadCell>Escritorio</TableHeadCell>
                    <TableCell>Construido personalizado</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Sistema operativo</TableHeadCell>
                    <TableCell>Arch Linux (por cierto)</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Navegador</TableHeadCell>
                    <TableCell>Zen Browser</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Monitor</TableHeadCell>
                    <TableCell>1440p IPS 144hz LG 27GL850</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Teclado</TableHeadCell>
                    <TableCell>Tofu65</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Mouse</TableHeadCell>
                    <TableCell>Logitech G403</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Laptop</TableHeadCell>
                    <TableCell>Macbook Pro 14″</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Auriculares</TableHeadCell>
                    <TableCell>Audio Technica ATH-M50x/Apple Airpods</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Micrófono</TableHeadCell>
                    <TableCell>Blue Yeti</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </>
  );
};
