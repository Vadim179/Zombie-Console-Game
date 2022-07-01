import styles from 'ansi-styles'

export class Colors {
  static hex(color: string) {
    return (text: string) =>
      styles.color.ansi16m(...styles.hexToRgb(color)) +
      text +
      styles.color.close
  }

  static rgb(r: number, g: number, b: number) {
    return (text: string) =>
      styles.color.ansi(styles.rgbToAnsi(r, g, b)) +
      text +
      styles.color.close
  }
}
