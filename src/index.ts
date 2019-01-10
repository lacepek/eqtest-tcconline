import { EqTest, Config } from './eqTest';

export function create(config: Config): void
{
  EqTest.create(config);
}

export async function start(time: number): Promise<boolean>
{
  return await EqTest.start(time);
}

export async function load(url: string): Promise<boolean>
{
  return await EqTest.load(url);
}
