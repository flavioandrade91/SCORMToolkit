declare global {
  interface Window {
    pipwerks: any;
  }
}

export function initializeScorm(): boolean {
  return window.pipwerks.SCORM.init();
}

export function getScormData(parameter: string): any {
  return window.pipwerks.SCORM.get(parameter);
}

export function setScormData(parameter: string, value: any): boolean {
  return window.pipwerks.SCORM.set(parameter, value);
}

export function finishScorm(): boolean {
  return window.pipwerks.SCORM.quit();
}
