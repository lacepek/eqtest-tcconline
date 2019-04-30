export class EqTestComponent {
  private parent: HTMLElement;
  private imageElement: HTMLImageElement;

  private image: string;
  private url: string;
  private time: number;
  private events: EqTestEvents;

  public constructor(config: Config) {
    if (config.parent instanceof HTMLElement) {
      this.parent = config.parent;
    } else {
      this.parent = document.querySelector(config.parent);
    }

    if (this.parent) {
      const body = document.createElement('div');
      body.id = config.id;
      body.className = config.wrapperClassName || '';

      this.imageElement = new Image();
      this.imageElement.className = config.imageClassName || '';

      body.appendChild(this.imageElement);
      this.parent.appendChild(body);
    }

    const defaultEvents = { onEnd: () => {}, onStart: () => {}, onLoad: () => {} };

    this.events = config.events || defaultEvents;

    this.time = config.time || 1000;
    this.url = config.url;
  }

  public async load(): Promise<boolean> {
    if (!this.parent) {
      return false;
    }

    try {
      this.image = await this.getImage(this.url);

      if (!this.image) {
        return false;
      }
    } catch (error) {
      if (this.events.onLoad) {
        this.events.onLoad(null, this, error);
      }

      return false;
    }

    if (this.events.onLoad) {
      this.events.onLoad(this.image, this);
    }

    return true;
  }

  public async start(time?: number): Promise<boolean> {
    const currentTime = time || this.time;

    if (!this.image) {
      return false;
    }

    if (this.events.onStart) {
      this.events.onStart(currentTime, this);
    }

    const imageShown = await this.showImage(this.image);

    if (imageShown) {
      const endTime = await this.wait(currentTime);

      this.cleanUp();

      if (this.events.onEnd) {
        this.events.onEnd(endTime, this);
      }

      return true;
    }

    return false;
  }

  private cleanUp(): void {
    this.imageElement.src = '';
    this.image = null;
  }

  private async wait(time: number): Promise<number> {
    try {
      const startTime = performance.now();
      const endTime = await new Promise<number>((resolve: (value: number) => void) => {
        setTimeout(() => {
          const time = performance.now();
          resolve(time);
        }, time);
      });

      return endTime - startTime;
    } catch (error) {
      throw error;
    }
  }

  private async showImage(image: string): Promise<boolean> {
    try {
      this.imageElement.src = image;
      return true;
    } catch (error) {
      throw error;
    }
  }

  private async getImage(url: string): Promise<string> {
    const request = new Request(url, { method: 'GET', cache: 'no-store' });
    try {
      const response = await fetch(request);
      const image = await this.loadImage(response);

      return image;
    } catch (error) {
      throw error;
    }
  }

  private async loadImage(response: Response): Promise<string> {
    const buffer = await response.arrayBuffer();
    const base64Flag = 'data:image/jpeg;base64, ';
    const base64Image = await this.convertImageToBase64(buffer);

    const imageData = base64Flag + base64Image;

    return imageData;
  }

  private async convertImageToBase64(buffer: ArrayBuffer): Promise<string> {
    let binary = '';
    const bytes = [].slice.call(new Uint8Array(buffer));

    bytes.forEach((byte: number) => (binary += String.fromCharCode(byte)));

    return window.btoa(binary);
  }
}

export type Config = {
  parent: HTMLElement | string;
  url: string;
  time: number;
  events: EqTestEvents;
  id: string;
  wrapperClassName?: string;
  imageClassName?: string;
};

export type EqTestEvents = {
  onLoad: OnLoadEvent;
  onStart: OnStartEvent;
  onEnd: OnEndEvent;
};

export type OnLoadEvent = (image: string, _this: EqTestComponent, error?: any) => void;

export type OnStartEvent = (time: number, _this: EqTestComponent, error?: any) => void;

export type OnEndEvent = (endTime: number, _this: EqTestComponent, error?: any) => void;
