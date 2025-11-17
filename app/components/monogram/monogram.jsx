import { forwardRef, useId } from 'react';
import { useTheme } from '~/components/theme-provider';
import { classes } from '~/utils/style';
import styles from './monogram.module.css';

export const Monogram = forwardRef(({ highlight, className, ...props }, ref) => {
  const { theme } = useTheme();
  const id = useId();
  const clipId = `${id}monogram-clip`;

  return (
    <svg
      aria-hidden
      className={classes(styles.monogram, className)}
      width="48"
      height="29"
      viewBox="0 0 48 29"
      ref={ref}
      {...props}
    >
      <text x="24" y="24" fontSize="28" textAnchor="middle" fill={theme === 'light' ? 'black' : 'white'} fontFamily="cursive">A</text>
      {highlight && (
        <text x="24" y="24" fontSize="28" textAnchor="middle" className={styles.highlight} fontFamily="cursive">A</text>
      )}
    </svg>
  );
});
