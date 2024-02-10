import {run} from "node:test";
import {glob} from 'glob';
import {spec} from "node:test/reporters";

const reporter = new spec();

const testFiles = await glob('**/*.test.{ts,mts}')

const testStream = run({files: testFiles})

testStream.compose(reporter).pipe(process.stdout)

testStream.once('end', () => {
  process.exit(0)
})



