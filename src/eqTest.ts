export class EqTest
{
  private static parent: HTMLElement;
  private static body: HTMLElement;
  private static imageElement: HTMLImageElement;

  private static image: string
  private static url: string;
  private static time: number;
  private static events: EqTestEvents;

  public static create(config: Config): void
  {
    if (config.parent instanceof HTMLElement) {
      this.parent = config.parent;
    } else {
      this.parent = document.querySelector(config.parent);
    }

    if (this.parent) {
      this.body = document.createElement('div');
      this.body.id = 'eqtest-body';

      this.imageElement = new Image();

      this.body.appendChild(this.imageElement);
      this.parent.appendChild(this.body);
    }

    this.events = config.events ? config.events : {
      onEnd: () => {}, onStart: () => {}, onLoad: () => {}, onLoadFail: () => {}
    };

    this.time = config.time ? config.time : 1000;
    this.url = config.url;
  }

  public static async load(url?: string): Promise<boolean>
  {
    url = url ? url : this.url;
    if (!this.parent) {
      return false;
    }

    try {
      this.image = await this.getImage(url);
      
      if (!this.image) {
        return false;
      }
    } catch (error) {
      console.error(error);
      if (this.events.onLoadFail) {
        this.events.onLoadFail(error);
      }

      return false;
    }

    if (this.events.onLoad) {
      this.events.onLoad(this.image);
    }

    return true;
  }

  public static async start(time?: number): Promise<boolean>
  {
    if (!this.image) {
      return false;
    }

    if (this.events.onStart) {
      this.events.onStart();
    }

    const imageShown = await this.showImage(this.image);

    if (imageShown) {
      const timeEnded = await this.wait(time ? time : this.time);

      if (timeEnded) {
        this.cleanUp();

        return true;
      }
    }

    return false;
  }

  private static cleanUp(): void
  {
    this.imageElement.src = '';
    this.image = null;

    if (this.events.onEnd) {
      this.events.onEnd();
    }
  }

  private static async wait(time: number): Promise<boolean>
  {
    try {
      await new Promise((resolve: any) => { setTimeout(() => { resolve(true) }, time) });

      return true;
    } catch (error) {
      throw error;
    }
  }

  private static async showImage(image: string): Promise<boolean>
  {
    try {
      this.imageElement.src = image;
      return true;
    } catch (error) {
      throw error;
    }
  }

  private static async getImage(url: string): Promise<string>
  {
    const request = new Request(url, { method: 'GET', cache: 'no-store' });
    try {
      const response = await fetch(request);
      const image = await this.loadImage(response);

      return image;
    } catch (error) {
      throw error;
    }
  }

  private static async loadImage(response: Response): Promise<string>
  {
    const buffer = await response.arrayBuffer();
    const base64Flag = 'data:image/jpeg;base64, ';
    const base64Image = await this.convertImageToBase64(buffer);

    const imageData = base64Flag + base64Image;

    return imageData;
  }

  private static async convertImageToBase64(buffer: ArrayBuffer): Promise<string>
  {
    let binary = '';
    const bytes = [].slice.call(new Uint8Array(buffer));

    bytes.forEach((byte: number) => binary += String.fromCharCode(byte));

    return window.btoa(binary);
  }
}

export type Config = {
  parent: HTMLElement | string,
  url: string,
  time: number,
  events: EqTestEvents
}

export type EqTestEvents = {
  onLoad: OnLoadEvent,
  onStart: OnStartEvent,
  onEnd: OnEndEvent,
  onLoadFail: OnLoadFailEvent
}

export type OnLoadEvent = (image: string, error?: any) => void;

export type OnStartEvent = (error?: any) => void;

export type OnEndEvent = (error?: any) => void;

export type OnLoadFailEvent = (error: any) => void;
