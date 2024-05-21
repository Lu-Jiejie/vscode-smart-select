import { log } from '../log'
import type { Context } from '../types'

import jsArrowFunctionParser from './js-arrow-function'
import jsAssignParser from './js-assign'
import jsBlockStatementParser from './js-block-statement'
import jsBlockParser from './js-block'

const parsers = [
  jsArrowFunctionParser,
  jsAssignParser,
  jsBlockStatementParser,
  jsBlockParser,
]

export function ruleParser(context: Context) {
  for (const parser of parsers) {
    const newSelection = parser(context)
    if (newSelection) {
      log(`[${parser.title}] ${newSelection.start.line}:${newSelection.start.character} => ${newSelection.end.line}:${newSelection.end.character}`)
      return newSelection
    }
  }
}
