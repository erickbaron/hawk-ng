import { Observable } from 'rxjs';

export function fromMatchMedia(query: string): Observable<MediaQueryList> {
    return new Observable(observer => {
        const mediaQueryList = matchMedia(query);

        const onChange = () => observer.next(mediaQueryList);

        if (mediaQueryList.addEventListener) {
            mediaQueryList.addEventListener('change', onChange);

            return () => mediaQueryList.removeEventListener('change', onChange);
        } else {
            mediaQueryList.addListener(onChange);

            return () => mediaQueryList.removeListener(onChange);
        }
    });
}
