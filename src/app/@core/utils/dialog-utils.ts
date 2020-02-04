import {MatDialogRef} from '@angular/material/dialog';
import {DialogResponse, DialogResponseType} from '../model/dialog-response-type.enum';

export class DialogUtils {
  public static resolve(dialogRef: MatDialogRef<any>, callback: (obj: any) => void, obj: any): void {
    dialogRef.afterClosed().subscribe((response: DialogResponse) => {
      if (response) {
        if (response.type === DialogResponseType.SUCCESS) {
          callback(obj);
        } else if (response.type === DialogResponseType.ERROR) {
          console.error(`Modal closed with error: ${response.message}`);
        } else if (response.type === DialogResponseType.DISMISS) {
          // tslint:disable-next-line:no-console
          console.log(`Modal closed with message: ${response.message}`);
        } else {
          // tslint:disable-next-line:no-console
          console.log(`Modal closed with message: ${response}`);
        }
      } else {
        // tslint:disable-next-line:no-console
        console.log('Modal escaped!!!');
      }
    });
  }
}

