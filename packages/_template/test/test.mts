import { run } from 'node:test';
import { spec as SpecReporter } from 'node:test/reporters';
import { glob } from 'glob';

const reporter = new SpecReporter();
const testFiles = await glob('**/*.test.{ts,mts}');
const testStream = run({ files: testFiles });

// Failed tests do not change the exit code, so we configure it here.
testStream.on('test:fail', () => {
	process.exitCode = 1;
});

testStream.pipe(reporter).pipe(process.stdout);
