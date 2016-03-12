import {BrowserXhr} from 'angular2/http';
import {Injectable} from 'angular2/core';

@Injectable()
export class CORSBrowserXHR extends BrowserXhr {
    build(): any {
        // Should not be needed anymore in next beta
        let xhr: any = super.build();
        xhr.withCredentials = true;
        return xhr;
    }
}
