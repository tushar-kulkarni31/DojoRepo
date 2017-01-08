define([
    'dojo/_base/declare',
    'app/views/First',
    'dijit/layout/BorderContainer',
    'dijit/layout/ContentPane',
    'dijit/layout/AccordionContainer',
    'dijit/layout/TabContainer',
    'app/views/ValidationForm'
],function(declare,_First,_BorderContainer,_ContentPane,_AccordionContainer,_TabContainer,_ValidationForm){
    return declare([_BorderContainer],{
       postCreate: function(){
           this.inherited(arguments);
           this.addChild(new _ContentPane({title:'top', content: 'Top', region: 'top'}));

           var ac = new _AccordionContainer({title:'left', content: 'Left', region: 'left'});
           ac.addChild(new _ContentPane({title:'Top', content: 'Top'}));
           ac.addChild(new _ContentPane({title:'Middle', content: 'Middle'}));
           ac.addChild(new _ContentPane({title:'Bottom', content: 'Bottom'}));
           this.addChild(ac);

           var tc = new _TabContainer({title:'center', content: 'Center', region: 'center'});
           var lcp = new _ContentPane({title:'Left', content: ''});
           lcp.addChild(new _First());
           tc.addChild(lcp);
           //tc.addChild(new _ContentPane({title:'Middle', content: 'Middle'}));
           var mcp = new _ContentPane({title:'Middle', content: ''});
           mcp.addChild(new _ValidationForm());
           tc.addChild(mcp);

           tc.addChild(new _ContentPane({title:'Right', content: 'Right'}));
           this.addChild(tc);

           this.addChild(new _ContentPane({title:'right', content: 'Right', region: 'right'}));
           this.addChild(new _ContentPane({title:'bottom', content: 'Bottom', region: 'bottom'}));
       }
    });
})