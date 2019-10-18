/**
 * @file mofron-comp-fdconts/index.js
 * @brief folding contents component
 * @author simpart
 */
const mf = require('mofron');
const Text = require('mofron-comp-clktext');
const Split = require('mofron-comp-fdsplit');
const Click = require('mofron-event-click');
const Fade = require('mofron-effect-fade');

mf.comp.FdConts = class extends Split {
    /**
     * constructor
     * 
     * @param (mixed) object: component option
     * @type private
     */
    constructor (po) {
        try {
            super();
            this.name('FdConts');
            this.prmOpt(po);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * initialize dom contents
     * 
     * @type private
     */
    initDomConts () {
        try {
            super.initDomConts();

	    this.switch2(
	        new Text({
		    effect: [
		        new Fade({ eid:0, value:true, tag: "FdConts", delay:200 }),
			new Fade({ eid:1, value:false, tag: "FdConts" }),
                    ],
		    style: {
		        "position"    : "relative",
		        "margin-left" :"0.2rem",
			"top"         : this.switch().style("top")
		    },
		    height: this.switch().height(),
		    text: "&raquo;", visible: false
		})
            );
	    /* folding config */
	    this.foldwid('0rem');

	    /* devtype config */
	    this.respsv({
		mobile:[ {}, { ratio: new mf.Param(50,50) } ],
		other:[ {}, { ratio: new mf.Param(20,80) } ]
	    });
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * set switch2, mobile config
     * 
     * @type private
     */
    beforeRender () {
        try {
            super.beforeRender();
            if (2 > this.child().length) {
                return;
	    }
	    this.child()[1].addChild(this.switch2());
	    this.respsv({ mobile:[ {}, { folding:true } ] });

	} catch (e) {
            console.error(e.stack);
	    throw e;
	}
    }
    
    /**
     * switch for disabled folding
     * 
     * @param (component) switch component
     * @return (component) switch component
     * @type parameter
     */
    switch2 (prm) {
        try {
	    if (undefined !== prm) {
	        let swevt = (sw1,sw2,sw3) => {
                    try { sw3.folding(false); } catch (e) {
                        console.error(e.stack);
			throw e;
		    }
		}
                prm.event(new Click([swevt,this]));
	    }
	    return this.innerComp('switch2', prm);
	} catch (e) {
	     console.error(e.stack);
	     throw e;
	}
    }
    
    /**
     * set folding speed
     * 
     * @param (number) folding speed
     * @return (number) folding speed
     * @type parameter
     */
    speed (prm) {
        try {
            this.switch2().effectOpt({ speed: prm },{ tag: "FdConts" });
	    return super.speed(prm);
	} catch (e) {
            console.error(e.stack);
	    throw e;
	}
    }
    
    /**
     * folding config
     * 
     * @param (component) this object
     * @param (boolean) folding flag
     * @type private
     */
    foldConf (fds,fld) {
        try {
            super.foldConf(fds,fld);
            fds.switch2().visible(fld);
	} catch (e) {
            console.error(e.stack);
	    throw e;
	}
    }
}
module.exports = mofron.comp.FdConts;
/* end of file */
