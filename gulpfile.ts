import { TaskFunction, Globs, parallel, series, watch } from 'gulp'
import del from 'del'
import { exec } from 'child_process'

const ignored = ['.cache', 'dist', 'storybook-static', '**/*.css.d.ts', '**/*.js{,x}']

export const clean: TaskFunction = () => del([...ignored, '!node_modules/**'])
export const typeCheck = series(npxTask('tcm src -s'), npxTask('tsc --noEmit -p .'))
const tslint = npxTask('tslint -p .')
const stylelint = npxTask('stylelint src')
export const staticCheck = namedTask('staticCheck', parallel(typeCheck, tslint, stylelint))
export const test = series(staticCheck, npxTask('jest'))
export const build = series(test, npxTask('parcel build src/index.html'))
export const buildStorybook = series(staticCheck, npxTask('build-storybook'))

export const develop = parallel(continuousTask('src', staticCheck), npxTask('jest --watch'), npxTask('parcel --log-level 2 src/index.html'), npxTask('start-storybook --ci --quiet -p 5678'))

function npx(cmd: string) {
  const cp = exec(cmd)

  cp.stdout.pipe(process.stdout)
  cp.stderr.pipe(process.stderr)

  return cp
}

function npxTask(cmd: string) {
  const task: TaskFunction = () => npx(cmd)

  task.displayName = cmd

  return task
}

function namedTask(name: string, task: TaskFunction) {
  task.displayName = name

  return task
}

function continuousTask(globs: Globs, watchedTask: TaskFunction) {
  const task = () => watch(globs, { ignoreInitial: false, ignored }, watchedTask)

  task.displayName = `${watchedTask.displayName} --watch`

  return task
}
