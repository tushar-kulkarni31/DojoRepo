/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
define([
    'dojo/_base/declare',
    'dijit/_WidgetBase',
    'dijit/_OnDijitClickMixin',
    'dijit/_TemplatedMixin',
    'dijit/_WidgetsInTemplateMixin',
    'dojo/text!./First.html',
    //no-instanciated
    'dijit/form/Button'
],function(declare,_WidgetBase,_OnDijitClickMixin,_TemplatedMixin,_WidgetsInTemplateMixin,template){
    return declare([_WidgetBase,_OnDijitClickMixin,_TemplatedMixin,_WidgetsInTemplateMixin],{
        templateString: template,

        title: 'Default Title',

        _firstClicked: false,

        _counter: 1,

        _onClick: function(e){
          //window.console.log('Hello...');
          if(this._firstClicked){
              this.titleNode.innerHTML = this.title + " was clicked "+(++this._counter)+" times";
          }else{
              this.titleNode.innerHTML = this.title + " was clicked";
              this._firstClicked = true;
          }
        },

        postCreate: function(){
            // Here this.title value is being populated from the hello_world_from_widget.html page(data-dojo-props=)
            // and if that attribute is not defined then this.title value will be the value which is defined here for title attr.
            this.titleNode.innerHTML = this.title;
        }
    });
});


