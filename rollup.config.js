export default {
    entry: 'dist-npm/index.js',
    dest: 'dist-npm/bundles/mf-ph.umd.js',
    sourceMap: false,
    format: 'umd',
    moduleName: 'ng.mf-ph',
    globals: {
      '@angular/core': 'ng.core',
      'rxjs/Observable': 'Rx',
      'rxjs/ReplaySubject': 'Rx',
      'rxjs/add/operator/map': 'Rx.Observable.prototype',
      'rxjs/add/operator/mergeMap': 'Rx.Observable.prototype',
      'rxjs/add/observable/fromEvent': 'Rx.Observable',
      'rxjs/add/observable/of': 'Rx.Observable'
    }
  }