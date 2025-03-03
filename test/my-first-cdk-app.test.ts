import { handler } from "../src";

describe('My First CDK App tests', () => {
  it('returns name and text', async () => {
    const output = await handler({ name: 'Grobbe' });
    expect(output).toStrictEqual('Good Job Grobbe!');
  });

  it('returns no name and text', async () => {
    const output = await handler({ name: '' });
    expect(output).toStrictEqual('Good Job');
  });
});
