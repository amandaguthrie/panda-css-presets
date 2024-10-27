import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { isEmptyString, isOnlyWhitespace } from '../src/validate';

describe('Validation Functions', async () => {
	await it('Function isEmptyString', async () => {
		await it('should return true if s is an empty string', async () => {
			assert.equal(isEmptyString(''), true);
		});
		await it('should return false if s is a string with a length > 0', async () => {
			assert.equal(isEmptyString('abc'), false);
		});
		await it('should return false if s is an array', async () => {
			assert.equal(isEmptyString([]), false);
		});
		await it('should return false if s is an object', async () => {
			assert.equal(isEmptyString({}), false);
		});
		await it('should return false if s is null', async () => {
			assert.equal(isEmptyString(null), false);
		});
		await it('should return false if s is undefined', async () => {
			assert.equal(isEmptyString(undefined), false);
		});
	});

	await it('Function isOnlyWhitespace', async () => {
		await it('should return true if s is an empty string', async () => {
			assert.equal(isOnlyWhitespace(''), true);
		});
		await it('should return true if s is a string only containing whitespace characters', async () => {
			assert.equal(isOnlyWhitespace(' \n'), true);
		});
		await it('should return false if s is a string with non-whitespace characters', async () => {
			assert.equal(isOnlyWhitespace('abc'), false);
		});
		await it('should return false if s is an array', async () => {
			assert.equal(isOnlyWhitespace([]), false);
		});
		await it('should return false if s is an object', async () => {
			assert.equal(isOnlyWhitespace({}), false);
		});
		await it('should return false if s is null', async () => {
			assert.equal(isOnlyWhitespace(null), false);
		});
		await it('should return false if s is undefined', async () => {
			assert.equal(isOnlyWhitespace(undefined), false);
		});
	});
});
