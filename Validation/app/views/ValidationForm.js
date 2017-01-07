/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
define([
    'dojo/_base/declare',
    'dijit/form/Form',
    'dijit/_WidgetsInTemplateMixin',
    'dojo/text!./ValidationForm.html'
],function(declare,Form,_WidgetsInTemplateMixin,template){
    return declare([Form,_WidgetsInTemplateMixin],{
        templateString: template
    });
});

