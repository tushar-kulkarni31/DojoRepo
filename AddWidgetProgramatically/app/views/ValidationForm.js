/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
define([
    'dojo/_base/declare',
    'dijit/form/Form',
    'dijit/_WidgetsInTemplateMixin',
    'dojox/layout/TableContainer',
    'dijit/form/ValidationTextBox',
    'dojox/validate/web'
],function(declare,Form,_WidgetsInTemplateMixin,_TableContainer,_ValidationTextBox){
    return declare([Form,_WidgetsInTemplateMixin],{
        //templateString: template
        
        postCreate: function(){
            var tc = new _TableContainer({cols: 1});
            tc.addChild(new _ValidationTextBox({title: 'First Name:', name: 'firstName', required: true}));
            tc.addChild(new _ValidationTextBox({title: 'Last Name:', name: 'lastName', required: true}));
            tc.addChild(new _ValidationTextBox({
                title: 'Email:',
                name: 'email', 
                required: true,
                validator: dojox.validate.isEmailAddress,
                invalidMessage: 'This is not a valid email!'
            }));
            tc.addChild(new _ValidationTextBox({title: 'Age:',
                name: 'age',
                required: true,
                validator: dojox.validate.isInRange,
                constraints: {min: 18, max: 100},
                invalidMessage: 'This is not within a range of 18 to 100!'
            }));

            this.domNode.appendChild(tc.domNode);
        }
    });
});

