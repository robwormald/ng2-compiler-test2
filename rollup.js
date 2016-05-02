//rollup hack
import {rollup} from 'rollup'
import * as path from 'path'
import nodeResolve from 'rollup-plugin-node-resolve'

class RollupNG2 {
    constructor(options){
        this.options = options;
    }
    resolveId(id, from){

        if(id.startsWith('rxjs/')){
            return `${__dirname}/node_modules/rxjs-es/${id.split('rxjs/').pop()}.js`;
        }

        if(id.startsWith('@angular/core')){
            if(id === '@angular/core'){
                return `${__dirname}/node_modules/@angular/core/esm/index.js`;
            }
            return `${__dirname}/node_modules/@angular/core/esm/${id.split('@angular/core').pop()}.js`;
        }
    }
}


const rollupNG2 = (config) => new RollupNG2(config);


export default {
    entry: 'tmp/main-static.js',
	format: 'iife',
	dest: 'tmp/build.js',
    sourceMap: true,
    plugins: [rollupNG2(), nodeResolve({jsnext: true})],

}
