import {Pipe, PipeTransform} from '@angular/core';
import {EXPRESS_BASE} from "@memebox/app-state";
import {Action, ActionType, SERVER_URL} from "@memebox/contracts";

@Pipe({
  name: 'mediaToPreviewUrl'
})
export class MediaToPreviewUrlPipe implements PipeTransform {

  transform(media: Action, useOldWay = false): string {
    const pathToPreview = media.type === ActionType.Video
      ? media.previewUrl
      : (media.previewUrl || media.path);

    if (pathToPreview?.includes(SERVER_URL) && media.id && !useOldWay) {
      return `${EXPRESS_BASE}/fileById/${media.id}`;
    } else {
      // Online URL (not local) OR new media dialog
      return replaceholder(pathToPreview);
    }
  }

}

function replaceholder (value: string): string{
  if (value) {
    return value.replace(SERVER_URL, EXPRESS_BASE);
  }

  return '';
}
