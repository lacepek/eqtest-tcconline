import { EqTestComponent, Config } from './eqTest';

export class EqTest {
  private static idCounter = 0;
  
  public static create(config: Config): EqTestComponent {
    config.id = config.id || this.genereteId();

    return new EqTestComponent(config);
  }

  private static genereteId(): string {
    return `eqtest-body-${this.idCounter}`;
  }
};
