import classNames from 'classnames';
import { useTranslation } from 'next-i18next';
import { useEffect } from 'react';
import styles from './HeroLogo.module.scss';

const widths = 'w-[140px] sm:w-[220px] lg:w-[260px]';

export const SVGLogo = () => {
  useEffect(() => {
    const polylineElement = document.getElementById('polyline');
    const polyline = polylineElement as HTMLElement & SVGGeometryElement;
    polyline?.setAttribute('style', 'stroke-dasharray:' + polyline?.getTotalLength() + ';stroke-dashoffset:' + polyline?.getTotalLength());
  });

  return (
    <svg id="svg"
      className={classNames('pr-2 sm:pr-4 overflow-visible fill-white', widths, styles.svg)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 517.23 526.59">
      <title>DIELLE</title>
      <path className={styles.svgOuter}
        d="M307.74,166c2.78,0,5.57,0,8.35.13,19.64.63,48.3,1.12,64.6,13.21,15.14,11.23,23,33.94,34.83,48.61,12.93,16,27.93,31.57,39.91,47.61,15.68,21,31.27,42.07,45.19,64.28,30.16,48.13,48,100,47.3,157.16-.62,51.47-16.42,104.1-64.24,129.65-34.71,18.55-72.8,28.25-111.17,35.46-33.8,6.36-67.37,13.88-101.6,13.88a207.71,207.71,0,0,1-26.6-1.65c-1.95-.25-3.88-.54-5.81-.87-67.42-11.67-120.68-69.84-150.34-128.33C56.45,482.55,32,393.73,58.88,325.89c19.75-49.74,52.69-100.27,102.21-124.36a367.19,367.19,0,0,1,76.11-27A310.46,310.46,0,0,1,307.74,166m0-8.3a319.51,319.51,0,0,0-72.43,8.78,377.44,377.44,0,0,0-77.85,27.64c-24.18,11.77-46.12,30.25-65.2,55-16.09,20.81-29.91,45.64-41.09,73.81-12.94,32.6-15.57,71.65-7.81,116.07,8,45.6,24.73,85,37.4,109.94,16.45,32.45,38.17,61.53,62.8,84.09,29,26.57,60.47,42.94,93.52,48.66,2,.36,4.12.67,6.17.93a217.35,217.35,0,0,0,27.66,1.72c30.34,0,60.3-5.78,89.29-11.37,4.53-.88,9.23-1.78,13.84-2.65,34.8-6.54,75.5-16,113.55-36.3,23.89-12.77,41.89-32.65,53.51-59.09,9.67-22,14.76-48.21,15.12-77.78a272.84,272.84,0,0,0-12.46-84.52c-8-25.76-20.17-51.71-36.11-77.14-13.84-22.09-28.83-42.44-45.57-64.85-7.14-9.56-15.36-19-23.31-28.1-5.64-6.46-11.47-13.15-16.8-19.75-4.13-5.12-7.83-11.5-11.75-18.25-6.82-11.73-13.87-23.86-24.58-31.81-17.86-13.24-46.44-14.13-67.31-14.78l-2-.06c-2.84-.09-5.74-.14-8.61-.14Z"
        transform="translate(-39.01 -157.65)" />
      <polyline id="polyline" className={styles.svgPolyline}
        points="82.51 87.42 366.83 439.14 244.98 87.42 163.74 439.16 366.83 87.42 448.06 439.14 163.74 87.42 123.13 439.14" />
      <circle className={styles.svgCircle} cx="82.51" cy="87.43" r="3.67" />
      <circle className={styles.svgCircle} cx="163.91" cy="87.43" r="3.67" />
      <circle className={styles.svgCircle} cx="244.98" cy="87.43" r="3.67" />
      <circle className={styles.svgCircle} cx="367.26" cy="87.43" r="3.67" />
      <circle className={styles.svgCircle} cx="123.12" cy="439.15" r="3.67" />
      <circle className={styles.svgCircle} cx="163.91" cy="439.15" r="3.67" />
      <circle className={styles.svgCircle} cx="367.42" cy="439.15" r="3.67" />
      <circle className={styles.svgCircle} cx="448.06" cy="439.15" r="3.67" />
      <path className={styles.svgText}
        d="M284.1,421q0,12.8-5.37,19.83t-15.8,7H249.46V394H263q10.35,0,15.72,7.12T284.1,421ZM275,421a35.64,35.64,0,0,0-.87-8.37,18.26,18.26,0,0,0-2.48-5.94,10.55,10.55,0,0,0-3.8-3.54A10,10,0,0,0,263,402h-4.34V439.9H263a10,10,0,0,0,4.8-1.18,10.55,10.55,0,0,0,3.8-3.54,18.31,18.31,0,0,0,2.48-5.9A34.84,34.84,0,0,0,275,421Z"
        transform="translate(-39.01 -157.65)" />
      <path className={styles.svgText} d="M299.63,447.9V394h9.14V447.9Z" transform="translate(-39.01 -157.65)" />
      <path className={styles.svgText} d="M326.58,447.9V394h24.14v8.07H335.34v14.32h14.23v7.46H335.34v15.91h16.14v8.15Z"
        transform="translate(-39.01 -157.65)" />
      <path className={styles.svgText} d="M366.63,447.9V394h9.21v45.46h14.85v8.45Z" transform="translate(-39.01 -157.65)" />
      <path className={styles.svgText} d="M403.48,447.9V394h9.21v45.46h14.85v8.45Z" transform="translate(-39.01 -157.65)" />
      <path className={styles.svgText} d="M440.33,447.9V394h24.13v8.07H449.08v14.32h14.24v7.46H449.08v15.91h16.14v8.15Z"
        transform="translate(-39.01 -157.65)" />
    </svg>
  )
};

export const HeroLogo = () => {
  const { t } = useTranslation();

  return (
    <div className="flex items-center justify-center drop-shadow-md">
      <SVGLogo />
      <p className={classNames(
        "pl-2 sm:pl-4 text-[16px] sm:text-[28px] lg:text-[40px] text-white tracking-[4px] font-semibold capitalize leading-tight",
        widths,
        styles.description
      )}>
        {t('companyMotto')}
      </p>
    </div>
  );
}