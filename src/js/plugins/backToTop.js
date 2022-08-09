import { addBackToTop } from 'vanilla-back-to-top'

 function backToTop() {
    addBackToTop({
  backgroundColor: '#3c1efccf',
  diameter: 70,
  innerHTML: '<svg id="plane" viewBox="0 0 32 32"><path d="M15.521 3.91c0.828 0 1.5 0.672 1.5 1.5v7.75l10 6.25v2.688l-10-3.375v5.25l2.039 2.029-0.001 2.084-3.538-1.176-3.487 1.18 0.015-2.189 1.91-1.865 0.017-5.312-9.997 3.436 0.021-2.75 10.007-6.313 0.016-7.688c-0.002-0.827 0.67-1.499 1.498-1.499z"></path></svg>',
  textColor: '#fcfcfcda',
  scrollDuration: 700,
  showWhenScrollTopIs: 100,
  cornerOffset: 30,
});
}
export default backToTop