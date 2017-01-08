define([
    'dojo/_base/declare',
    'dojo/Deferred'
]
,function(declare,Deferred){

    function asyncProcess(){
        var deferred = new Deferred();

// Before reject when timeout is same, resolve executes here.
//        setTimeout(function(){
//                deferred.resolve('I am resolved');
//        },2000);

        setTimeout(function(){
            deferred.reject('I am rejected');
        },2000);

// After reject when timeout is same, rejected executes here.
//        setTimeout(function(){
//                deferred.resolve('I am resolved');
//        },2000);
        var count = 0;
        setInterval(function(){
            deferred.progress((count++)+': still working');
        },500);

        return deferred;
    }

    return declare(null,{
        constructor:function(){
            var deferred;

            // In local scope when timeout is same as rejected, resolve executes here.
            setTimeout(function(){
                deferred.resolve('I am resolved');
            },2000);
            
            console.log('In constructor');
            deferred = asyncProcess();

            //Error in first node of chain
//            deferred.promise.then(function(data){
//                console.log("Then 1:",data);
//                return data;
//            },function(err){
//                console.log('ERROR:',err);
//            }).then(function(data){
//                console.log("Then 2:",data);
//                return "icodingclub";
//            }).then(function(data){
//                console.log("Then 3:",data);
//            });

            ////Error in last node of chain
//            deferred.promise.then(function(data){
//                console.log("Then 1:",data);
//                return data;
//            }).then(function(data){
//                console.log("Then 2:",data);
//                return "icodingclub";
//            }).then(function(data){
//                console.log("Then 3:",data);
//            },function(err){
//                console.log('ERROR:',err);
//            });

            deferred.promise.then(function(data){
                console.log("Then 3:",data);
            },function(err){
                console.log('ERROR:',err);
            },function(progress){
                console.log(progress);
            });

            console.log('Constructor ends');
        }
    });
});