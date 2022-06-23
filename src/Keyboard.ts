import { IKeyboardSpecialKeys } from './types'
import readline from 'readline'

readline.emitKeypressEvents(process.stdin)

if (process.stdin.isTTY) {
  process.stdin.setRawMode(true)
}

const specialKeys: IKeyboardSpecialKeys = {
  escape: () => process.exit(),
}

export class Keyboard {
  public onKeyPress(callback: (keyName: string) => void) {
    process.stdin.on('keypress', (_, key) => {
      if (key.name in specialKeys)
        return specialKeys[key.name]()
      callback(key.name)
    })
  }
}
